<template>
    <Header></Header>
	<Planet></Planet>
	<Take></Take>
	<Promise></Promise>
	<LetsTalke></LetsTalke>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import Header from "../Widgets/AboutUs/Header.vue";
import Planet from "../Widgets/AboutUs/Planet.vue";
import Take from "../Widgets/AboutUs/Take.vue";
import Promise from "../Widgets/AboutUs/Promise.vue";
import LetsTalke from "../Widgets/AboutUs/LetsTalke.vue";
import { RootStateInterface } from "../Store";
import StateInterface from "../Store/Modules/PageInfo/StateInterface";
import PageDataStateInterface from "../Store/Modules/PageData/StateInterface";
import InfoInterface from "../Widgets/Home/Entity/InfoInterface";
import { useStore } from "vuex";

const store = useStore<RootStateInterface>();
const pageInfo = computed<StateInterface>(() => store.state.pageInfo);

let isInitData = ref(false);

watch(pageInfo.value, () => {
	if(!isInitData.value) {
		store.dispatch('pageData/getPageData', {
			// eslint-disable-next-line
			'action': 'getData',
			'page-name': pageInfo.value.pageName,
			'page-id': pageInfo.value.pageId
		});

		isInitData.value = true;
	}
});
</script>

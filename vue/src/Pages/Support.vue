<template>
    <Header></Header>
	<Content></Content>
</template>

<script setup lang="ts">
import Header from "../Widgets/Support/Header.vue";
import Content from "../Widgets/Support/Content.vue";
import { useStore } from "vuex";
import { computed, ref, watch } from "vue";
import { RootStateInterface } from "../Store";
import StateInterface from "../Store/Modules/PageInfo/StateInterface";
import PageDataStateInterface from "../Store/Modules/PageData/StateInterface";
import InfoInterface from "../Widgets/Home/Entity/InfoInterface";

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

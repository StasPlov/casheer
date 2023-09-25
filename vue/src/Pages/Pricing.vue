<template>
    <Header></Header>
    <Content></Content>
	<Documents></Documents>
	<Condition></Condition>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import Header from "../Widgets/Pricing/Header.vue";
import Content from "../Widgets/Pricing/Content.vue";
import Documents from "../Widgets/Pricing/Documents.vue";
import Condition from "../Widgets/Pricing/Condition.vue";
import InfoInterface from "../Widgets/Home/Entity/InfoInterface";
import { useStore } from "vuex";
import { RootStateInterface } from "../Store";
import StateInterface from "../Store/Modules/PageInfo/StateInterface";
import PageDataStateInterface from "../Store/Modules/PageData/StateInterface";

const store = useStore<RootStateInterface>();
const pageInfo = computed<StateInterface>(() => store.state.pageInfo);
const pageData = computed<PageDataStateInterface>(() => store.state.pageData);

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

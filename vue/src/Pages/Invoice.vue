<template>
    <Header></Header>
	<Technology></Technology>

	<InfoListBlock
		:list="infoListBlock"
	></InfoListBlock>
	
	<Info></Info>

	<LetsLaunch
		:img="require('@/Assets/Images/casheer image 6.png')"
		:themColor="'#7d00e278'"
		:itemList="launchList"
	></LetsLaunch>

	<OurBussinesProduct></OurBussinesProduct>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import Header from "@/Widgets/Invoice/Header.vue";
import Technology from "@/Widgets/Invoice/Technology.vue";
import Info from "@/Widgets/Invoice/Info.vue";

import LetsLaunch from "../Widgets/LetsLaunch/LetsLaunch.vue";
import LetsLaunchItemInterface from "../Widgets/LetsLaunch/Type/LetsLaunchItemInterface";
import OurBussinesProduct from "../Widgets/OurBussinesProduct/OurBussinesProduct.vue";
import InfoInterface from "../Widgets/InfoListBlock/Type/InfoInterface";
import InfoListBlock from "../Widgets/InfoListBlock/InfoListBlock.vue";

import { useStore } from "vuex";
import { RootStateInterface } from "../Store";
import StateInterface from "../Store/Modules/PageInfo/StateInterface";
import PageDataStateInterface from "../Store/Modules/PageData/StateInterface";
import InfoEntityInterface from "../Widgets/Home/Entity/InfoInterface";
import ImageInterface from "../Entity/ImageInterface";

const store = useStore<RootStateInterface>();
const pageInfo = computed<StateInterface>(() => store.state.pageInfo);
const pageData = computed<PageDataStateInterface>(() => store.state.pageData);
const data = computed(() => pageData.value.data?.info_list_block);

const image = computed<ImageInterface>(() => data.value?.image);

const infoListBlock = computed<Array<InfoInterface>>(() => data.value?.items);

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

const launchList = ref<Array<LetsLaunchItemInterface>>([
	{
		num: '1',
		title: 'Begin',
		subTitle: 'Click and fill the express sign-up process. Get started now.'
	},
	{
		num: '2',
		title: 'Select',
		subTitle: 'Simply choose the solution that’s best for your business.'
	},
	{
		num: '3',
		title: 'Grow',
		subTitle: 'Expand and realise your complete business potential.'
	},
]);
</script>

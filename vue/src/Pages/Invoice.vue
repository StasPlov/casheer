<template>
    <Header></Header>
	<Technology></Technology>

	<InfoListBlock
		:list="infoListBlock"
	></InfoListBlock>
	
	<Info></Info>

	<LetsLaunch
		:title="LLtitle"
		:image="LLimage"
		:step-image="LLstepImage"
		:color="LLcolor"
		:step-list="LLstepList"
		:action="LLaction"
	></LetsLaunch>

	<OurBussinesProduct
		:title="OBPtitle"
		:product-list="OBPproductList"
	></OurBussinesProduct>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import Header from "@/Widgets/Invoice/Header.vue";
import Technology from "@/Widgets/Invoice/Technology.vue";
import Info from "@/Widgets/Invoice/Info.vue";

import LetsLaunch from "../Widgets/LetsLaunch/LetsLaunch.vue";
import OurBussinesProduct from "../Widgets/OurBussinesProduct/OurBussinesProduct.vue";
import InfoInterface from "../Widgets/InfoListBlock/Type/InfoInterface";
import InfoListBlock from "../Widgets/InfoListBlock/InfoListBlock.vue";

import { useStore } from "vuex";
import { RootStateInterface } from "../Store";
import StateInterface from "../Store/Modules/PageInfo/StateInterface";
import PageDataStateInterface from "../Store/Modules/PageData/StateInterface";
import InfoEntityInterface from "../Widgets/Home/Entity/InfoInterface";
import ImageInterface from "../Entity/ImageInterface";
import StepInterface from "../Widgets/LetsLaunch/Type/StepInterface";
import ActionInterface from "../Widgets/LetsLaunch/Type/ActionInterface";
import ProductInterface from "../Widgets/OurBussinesProduct/Type/ProductInterface";

const store = useStore<RootStateInterface>();

const pageInfo = computed<StateInterface>(() => store.state.pageInfo);
const pageData = computed<PageDataStateInterface>(() => store.state.pageData);

const data = computed(() => pageData.value.data?.info_list_block);
const dataLetsLaunchBlock = computed(() => pageData.value.data?.lets_launch_block);
const dataOurBussinesProductBlock = computed(() => pageData.value.data?.our_bussines_product_block);

/* InfoListBlock */
const infoListBlock = computed<Array<InfoInterface>>(() => data.value?.items);

/* LetsLaunch */
const LLstepList = computed<Array<StepInterface>>(() => dataLetsLaunchBlock.value?.step_list);
const LLaction = computed<ActionInterface>(() => dataLetsLaunchBlock.value?.action);
const LLcolor = computed<string>(() => dataLetsLaunchBlock.value?.color);
const LLimage = computed<ImageInterface>(() => dataLetsLaunchBlock.value?.image);
const LLstepImage = computed<ImageInterface>(() => dataLetsLaunchBlock.value?.step_image);
const LLtitle = computed<string>(() => dataLetsLaunchBlock.value?.title);

/* OurBussinesProductBlock */
const OBPproductList = computed<Array<ProductInterface>>(() => dataOurBussinesProductBlock.value?.product_list);
const OBPtitle = computed<Array<ProductInterface>>(() => dataOurBussinesProductBlock.value?.title);

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

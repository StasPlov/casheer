<template>
    <Header></Header>

	<InfoListBlock
		:list="infoListBlock"
	></InfoListBlock>

	<!-- <Info></Info> -->

	<LetsLaunch
		:img="require('@/Assets/Images/casheer image 6.png')"
		:themColor="'#5066F6'"
		:itemList="launchList"
	></LetsLaunch>

	<OurBussinesProduct></OurBussinesProduct>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Header from "@/Widgets/TouchAndTap/Header.vue";
import LetsLaunch from "../Widgets/LetsLaunch/LetsLaunch.vue";
import LetsLaunchItemInterface from "../Widgets/LetsLaunch/Type/LetsLaunchItemInterface";
import OurBussinesProduct from "../Widgets/OurBussinesProduct/OurBussinesProduct.vue";

import InfoInterface from "../Widgets/InfoListBlock/Type/InfoInterface";
import InfoListBlock from "../Widgets/InfoListBlock/InfoListBlock.vue";

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

const infoListBlock = ref<Array<InfoInterface>>([
	{
		image: require('@/Assets/Icons/casheer invoice icon info.svg'),
		description: 'Realtime reporting',
	},
	{
		image: require('@/Assets/Icons/casheer invoice icon.svg'),
		description: 'Readymade integration tools',
	},
	{
		image: require('@/Assets/Icons/casheer invoice icon (1).svg'),
		description: 'Recurring payments',
	},
	{
		image: require('@/Assets/Icons/casheer invoice icon (2).svg'),
		description: 'Mobile SDK',
	},
	{
		image: require('@/Assets/Icons/casheer invoice icon (1).svg'),
		description: 'Faster and more responsive checkout',
	},
	{
		image: require('@/Assets/Icons/casheer invoice icon (2).svg'),
		description: 'Merchant Dashboard',
	},
]);
</script>

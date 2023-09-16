<template>
    <Header></Header>
	<Technology></Technology>

	<InfoListBlock
		:list="infoListBlock"
	></InfoListBlock>
	
	<Developed></Developed>

	<LetsLaunch
		:img="require('@/Assets/Images/casheer image 6.png')"
		:themColor="'#7d00e278'"
		:itemList="launchList"
	></LetsLaunch>

	<OurBussinesProduct></OurBussinesProduct>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Header from "@/Widgets/Invoice/Header.vue";
import Technology from "@/Widgets/Invoice/Technology.vue";
import Developed from "@/Widgets/Invoice/Developed.vue";

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
		description: 'Access your personalised <br>dashboard featuring real-time analytics and tracking orders.',
	},
	{
		image: require('@/Assets/Icons/casheer invoice icon.svg'),
		description: 'Share secure payment links with customers using WhatsApp and other major social platforms.',
	},
	{
		image: require('@/Assets/Icons/casheer invoice icon (1).svg'),
		description: 'Create, distribute, and issue payment links to customers in any language.',
	},
	{
		image: require('@/Assets/Icons/casheer invoice icon (2).svg'),
		description: 'Provide payment support with offline modes using POS terminals.',
	},
]);
</script>

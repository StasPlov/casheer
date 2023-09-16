<template>
    <Header></Header>
	<Technology></Technology>
	<Info></Info>
	
	<Smarter
		:list="infoList"
	></Smarter>

	<PaymentMethods></PaymentMethods>

	<LetsLaunch
		:img="require('@/Assets/Images/casheer image 6.png')"
		:themColor="'var(--color-arctic1)'"
		:itemList="launchList"
	></LetsLaunch>

	<OurBussinesProduct></OurBussinesProduct>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Header from "@/Widgets/TouchAndTap/Header.vue";
import Technology from "@/Widgets/TouchAndTap/Technology.vue";
import Info from "@/Widgets/TouchAndTap/Info.vue";
import Smarter from "@/Widgets/TouchAndTap/Smarter.vue";
import PaymentMethods from "@/Widgets/TouchAndTap/PaymentMethods.vue";

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

const infoList = ref<Array<InfoInterface>>([
	{
		image: require('@/Assets/Icons/casheer invoice icon info.svg'),
		description: 'Offline Mode',
	},
	{
		image: require('@/Assets/Icons/casheer invoice icon.svg'),
		description: 'Real Time Reporting & Analytics',
	},
	{
		image: require('@/Assets/Icons/casheer invoice icon (1).svg'),
		description: '24/7 Support',
	},
	{
		image: require('@/Assets/Icons/casheer invoice icon (2).svg'),
		description: 'Integrated Payments',
	},
	{
		image: require('@/Assets/Icons/casheer invoice icon (1).svg'),
		description: 'Tax Reporting',
	},
	{
		image: require('@/Assets/Icons/casheer invoice icon (2).svg'),
		description: 'All-in-one Solution',
	},
]);
</script>

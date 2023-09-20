<template>
    <Header></Header>
	<Technology></Technology>

	<InfoListBlock
		:list="infoListBlock"
	></InfoListBlock>

	<Info></Info>
	
	<LetsLaunch
		:img="require('@/Assets/Images/casheer image 6.png')"
		:themColor="'var(--color-green1)'"
		:itemList="launchList"
	></LetsLaunch>
	
	<OurBussinesProduct></OurBussinesProduct>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Header from "@/Widgets/WalletAndCarts/Header.vue";
import LetsLaunch from "../Widgets/LetsLaunch/LetsLaunch.vue";
import Technology from "../Widgets/WalletAndCarts/Technology.vue";
import Info from "../Widgets/WalletAndCarts/Info.vue";

import LetsLaunchItemInterface from "../Widgets/LetsLaunch/Type/ActionInterface";
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
		description: 'Make fast, compliant wallet payments for goods and services.',
	},
	{
		image: require('@/Assets/Icons/casheer invoice icon.svg'),
		description: 'Enjoy added multi-tier digital KYC verification.',
	},
	{
		image: require('@/Assets/Icons/casheer invoice icon (1).svg'),
		description: 'Receive PayMe credits using any payment gateway.',
	},
	{
		image: require('@/Assets/Icons/casheer invoice icon (2).svg'),
		description: 'Transfer direct to local banks, or via wallet-to-wallet.',
	},
	{
		image: require('@/Assets/Icons/casheer invoice icon (1).svg'),
		description: 'Use QR ‘Scan & Pay’ options for merchant transactions.',
	},
	{
		image: require('@/Assets/Icons/casheer invoice icon (2).svg'),
		description: 'Credit your account with easy card payments.',
	},
]);
</script>

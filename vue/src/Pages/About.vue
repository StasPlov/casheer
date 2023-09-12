<template>
    <Header></Header>
	<Planet></Planet>
	<Take></Take>
	<Promise></Promise>
	<LetsTalke></LetsTalke>
</template>

<script setup lang="ts">
import { computed } from "vue";
import Header from "../Widgets/AboutUs/Header.vue";
import Planet from "../Widgets/AboutUs/Planet.vue";
import Take from "../Widgets/AboutUs/Take.vue";
import Promise from "../Widgets/AboutUs/Promise.vue";
import LetsTalke from "../Widgets/AboutUs/LetsTalke.vue";
/* 
const itemList = computed(() => [
	{
		image: require('@/Assets/Images/644f2b16487d2196638996432083498e.gif'),
		title: 'Grow',
		description: 'Boost enterprise performance with an all-new range of advanced payment systems, real-time reporting and merchant dashboard built to manage your assets in a fully customisable sandbox environment.',
		isReverse: false
	},
	{
		image: require('@/Assets/Images/e8d61a3910ffcd51a88fd3a1459c94ec.gif'),
		title: 'Secure',
		description: 'Protect the integrity of your assets, business processes, and payment data with compliant digital solutions endorsed by the Bank of Kuwait and all regulatory bodies. <br>Every solution includes 24-7 global support.',
		isReverse: true
	},
	{
		image: require('@/Assets/Images/ef472f3c22388d1cf4c00146f33b8f84.gif'),
		title: 'Innovate',
		description: '<p>Become a market leader and foster a new competitive environment with fully intuitive and mobile-ready technologies complete with readymade plugins and restful APIs.</p> <p>Resolve silos through unified payment integrations and stay ahead of the industry, with instant merchant onboarding and settlements.</p>',
		isReverse: false
	}] as Array<InfoInterface>); */
</script>

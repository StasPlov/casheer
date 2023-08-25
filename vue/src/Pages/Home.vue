<template>
    <Header></Header>
	<GradiendText></GradiendText>

	<template v-for="item in itemList" :key="item">
		<BlockInfo
			:image="item.image"
			:title="item.title"
			:description="item.description"
			:isReverse="item.isReverse"
		></BlockInfo>
	</template>

	<Payments></Payments>
	<Always></Always>
	<Man></Man>
	<Welcome></Welcome>
</template>

<script setup lang="ts">
import { computed } from "vue";
import Header from "../Widgets/Home/Header.vue";
import GradiendText from "../Widgets/Home/GradiendText.vue";
import BlockInfo from "../Widgets/Home/BlockInfo.vue";
import Payments from "../Widgets/Home/Payments.vue";
import Always from "../Widgets/Home/Always.vue";
import Man from "../Widgets/Home/Man.vue";
import Welcome from "../Widgets/Home/Welcome.vue";
import InfoInterface from "../Widgets/Home/Entity/InfoInterface";

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
	}] as Array<InfoInterface>);
</script>

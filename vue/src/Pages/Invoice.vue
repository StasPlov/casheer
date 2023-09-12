<template>
    <Header></Header>
	<Technology></Technology>
	<Access></Access>
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
import Access from "@/Widgets/Invoice/Access.vue";
import Developed from "@/Widgets/Invoice/Developed.vue";
import LetsLaunch from "../Widgets/LetsLaunch/LetsLaunch.vue";
import LetsLaunchItemInterface from "../Widgets/LetsLaunch/Type/LetsLaunchItemInterface";
import OurBussinesProduct from "../Widgets/OurBussinesProduct.vue";

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

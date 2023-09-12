<template>
	<div class="bg-[var(--color-black1)]">
		<div class="px-[7vw] py-[32vh] bg-white rounded-b-[2.25rem]">
			<ul class="grid grid-cols-2 grid-flow-row gap-14 gap-x-32 max-phoneX:grid-cols-1">
				<li v-for="item in list" :key="item" class="flex gap-11 items-center">
					<img :src="item.image" alt="" class="w-12">
					<span class="text-black text-3xl font-normal font-[Arial] max-w-[23.75rem]" v-html="item.title"></span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed } from "vue";


const list = computed(() => [
	{
		image: require('@/Assets/Icons/casheer invoice icon info.svg'),
		title: 'Realtime reporting',
	},
	{
		image: require('@/Assets/Icons/casheer invoice icon.svg'),
		title: 'Readymade integration tools',
	},
	{
		image: require('@/Assets/Icons/casheer invoice icon (1).svg'),
		title: 'Recurring payments',
	},
	{
		image: require('@/Assets/Icons/casheer invoice icon (2).svg'),
		title: 'Mobile SDK',
	},
	{
		image: require('@/Assets/Icons/casheer invoice icon (1).svg'),
		title: 'Faster and more responsive checkout',
	},
	{
		image: require('@/Assets/Icons/casheer invoice icon (2).svg'),
		title: 'Merchant Dashboard',
	},
]);
</script>

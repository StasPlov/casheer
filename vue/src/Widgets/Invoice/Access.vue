<template>
	<div class="bg-[var(--color-black1)]">
		<div class="px-[7vw] py-[32vh] bg-white rounded-b-[2.25rem]">
			<ul class="grid grid-cols-2 grid-flow-row gap-14 gap-x-32">
				<li v-for="item in list" :key="item" class="flex gap-11">
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
		title: 'Access your personalised <br>dashboard featuring real-time analytics and tracking orders.',
	},
	{
		image: require('@/Assets/Icons/casheer invoice icon.svg'),
		title: 'Share secure payment links with customers using WhatsApp and other major social platforms.',
	},
	{
		image: require('@/Assets/Icons/casheer invoice icon (1).svg'),
		title: 'Create, distribute, and issue payment links to customers in any language.',
	},
	{
		image: require('@/Assets/Icons/casheer invoice icon (2).svg'),
		title: 'Provide payment support with offline modes using POS terminals.',
	},
]);
</script>

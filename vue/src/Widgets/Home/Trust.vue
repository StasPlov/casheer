<template>
	<div class="w-full bg-white relative">
		<div class="px-[7vw] py-[15vh] flex flex-col gap-32">

			<div class="flex flex-col gap-5">
				<h2 class="text-black text-center font-mont text-3xl font-bold">Payment Methods</h2>

				<Carousel :items-to-show="10" :wrap-around="true" :transition="300">
					<Slide v-for="icon in iconList" :key="icon">
						<img :src="icon.img" alt="" draggable="false" class="select-none">
					</Slide>

					<template #addons>
						<!-- <navigation /> -->
						<!-- <pagination /> -->
					</template>
				</Carousel>
			</div>

			<div class="flex flex-col gap-24">
				<div class="flex flex-col gap-8">
					<div class="flex flex-col gap-4">
						<h2 class="text-black text-center font-mont text-5xl font-bold">Trust matters most</h2>
						<span class="text-black text-2xl font-normal font-[Arial] text-center">Backed by the strongest financial  authorities in the region.</span>
					</div>

					<ul class="flex gap-8 justify-center">
						<li v-for="trust in trustList" :key="trust">
							<img :src="trust.img" alt="" class="select-none" draggable="false">
						</li>
					</ul>
				</div>

				<div class="self-center">
					<ul class="grid grid-rows-4 grid-flow-col gap-8 gap-x-40">
						<li v-for="partner in partnerList" :key="partner" class="flex gap-5 items-center">
							<img :src="partner.img" alt="" class="select-none w-20" draggable="false">
							<span class="text-black text-xl font-normal font-[Arial] flex-[3]">{{ partner.title }}</span>
						</li>
					</ul>
				</div>
			</div>

		</div>
	</div>
</template>

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { computed, ref } from "vue";

const iconList = computed(() => [
	{
		img: require('@/Assets/Icons/logo_visa.svg')
	},
	{
		img: require('@/Assets/Icons/logo_spare.svg')
	},
	{
		img: require('@/Assets/Icons/logo_samsung pay.svg')
	},
	{
		img: require('@/Assets/Icons/logo_mastercard.svg')
	},
	{
		img: require('@/Assets/Icons/logo_knet.svg')
	},
	{
		img: require('@/Assets/Icons/logo_casheer wallet.svg')
	},
	{
		img: require('@/Assets/Icons/logo_benefit pay.svg')
	},
	{
		img: require('@/Assets/Icons/logo_apple pay.svg')
	},
	{
		img: require('@/Assets/Icons/logo_american express.svg')
	}
]);

const trustList = computed(() => [
	{
		img: require('@/Assets/Icons/casheer central bank of bahrain.svg')
	},
	{
		img: require('@/Assets/Icons/casheer central bank of kuwait.svg')
	}
]);

const partnerList = computed(() => [
	{
		title: 'PCI DSS',
		img: require('@/Assets/Icons/PCI DSS.svg')
	},
	{
		title: 'Microsoft Golden partner',
		img: require('@/Assets/Icons/mask group.svg')
	},
	{
		title: 'Mastercard Principal membership',
		img: require('@/Assets/Icons/mastercard logo.svg')
	},
	{
		title: 'Mastercard Platinum member',
		img: require('@/Assets/Icons/mastercard logo.svg')
	},
	/* new column */
	{
		title: 'Arab Financials',
		img: require('@/Assets/Icons/mask group (2).svg')
	},
	{
		title: 'Eazy Financial',
		img: require('@/Assets/Icons/mastercard logo.svg')
	},
	{
		title: 'Kuwait Finance House ( Kuwait )',
		img: require('@/Assets/Icons/casheer logo.svg')
	},
	{
		title: 'Gulf Bank ( Kuwait )',
		img: require('@/Assets/Icons/mask group (1).svg')
	},
]);
</script>

<template>
	<div class="w-full bg-[var(--color-black1)] relative pb-28">
		<div class="py-9">
			<h2 class="text-white text-center font-mont text-4xl font-bold">Trusted by</h2>			
		</div>

		<div class="flex flex-col gap-5 bg-white py-16 w-full">
			<Carousel
				:items-to-show="countItemsToShow" 
				:wrap-around="true" 
				:transition="300"
				:snapAlign="'start'"
			>
				<Slide v-for="icon in iconList" :key="icon">
					<img :src="icon.img" alt="" draggable="false" class="select-none">
				</Slide>
			</Carousel>	
		</div>
	</div>
</template>

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { computed, ref } from "vue";

let curentRectWidth = ref(document.querySelector('html').clientWidth as number);

const isMobile = computed(() => curentRectWidth.value < 425);
const isTablet = computed(() => curentRectWidth.value < 768);
const isTabletBig = computed(() => curentRectWidth.value < 1024);

window.addEventListener('resize', () => {
	resize();
});

const countItemsToShow = computed(() => {
	if(isMobile.value) {
		return 2;
	}

	if(isTablet.value) {
		return 2;
	}

	if(isTabletBig.value) {
		return 4;
	}

	return 6;
});

function resize() {
	curentRectWidth.value = document.querySelector('html').clientWidth as number;
}

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

<template>
	<div class="w-full bg-[var(--color-black1)]">
		<div class="px-[7vw] py-24">
			<h2 class="text-white text-center font-mont text-4xl font-bold">All payment methods:</h2>			
			
			<div class="flex flex-col py-16 w-full">
				<Carousel
					:items-to-show="countItemsToShow"
					:snapAlign="'start'"
					:wrap-around="true" 
					:transition="300"
				>
					<Slide v-for="icon in iconList" :key="icon">
						<img :src="icon.img" alt="" draggable="false" class="select-none">
					</Slide>
				</Carousel>	
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { computed, ref, watch } from "vue";

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
		return 3;
	}

	return 5;
});

const iconList = computed(() => [
	{
		img: require('@/Assets/Icons/visa logo.png')
	},
	{
		img: require('@/Assets/Icons/mastercard logo.png')
	},
	{
		img: require('@/Assets/Icons/apple pay.png')
	},
	{
		img: require('@/Assets/Icons/samsung pay logo.png')
	},
	{
		img: require('@/Assets/Icons/benefit pay logo.png')
	}
]);

function resize() {
	curentRectWidth.value = document.querySelector('html').clientWidth as number;
}
</script>

<template>
	<div class="w-full bg-[var(--color-black1)] relative pb-28">
		<div class="flex flex-col px-[7vw]">
			<div class="py-9">
				<h2 class="text-white text-center font-mont text-4xl font-bold">Supported payment methods:</h2>			
			</div>

			<div class="flex flex-col gap-5 py-16 w-full">
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
		return 3;
	}

	if(isTabletBig.value) {
		return 4;
	}

	return 4;
});

function resize() {
	curentRectWidth.value = document.querySelector('html').clientWidth as number;
}

const iconList = computed(() => [
	{
		img: require('@/Assets/Icons/benefit pay logo.png')
	},
	{
		img: require('@/Assets/Icons/Mask group F.svg')
	},
	{
		img: require('@/Assets/Icons/Mask group F+.svg')
	},
	{
		img: require('@/Assets/Icons/Mask group K.svg')
	},
]);
</script>

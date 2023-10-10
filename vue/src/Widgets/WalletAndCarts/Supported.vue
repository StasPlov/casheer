<template>
	<div class="w-full bg-transparent relative">
		<div class="flex flex-col gap-8 px-[8.375rem] z-10">
			<div class="py-9">
				<h2 class="text-white text-center font-mont text-4xl font-bold" v-html="title"></h2>			
			</div>

			<ul class="flex self-center gap-24 max-sm:grid max-sm:grid-cols-2">
				<li v-for="item in list" :key="item">
					<img v-if="item.image" :src="item.image.url" alt="" draggable="false" class="select-none">
				</li>
			</ul>

			<!-- <div class="flex flex-col gap-5 py-16 w-full">
				<Carousel
					:items-to-show="countItemsToShow" 
					:wrap-around="true" 
					:transition="500"
					:snapAlign="'start'"
					:autoplay="2000"
				>
					<Slide v-for="item in list" :key="item">
						<img v-if="item.image" :src="item.image.url" alt="" draggable="false" class="select-none">
					</Slide>
				</Carousel>	
			</div> -->
		</div>
	</div>
</template>

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { computed, ref } from "vue";
import ImageInterface from '../../Entity/ImageInterface';

const props = defineProps<{
	title?: string,
	list?: Array<{ image: ImageInterface }>
}>();

let curentRectWidth = ref(document.querySelector('html').clientWidth as number);

const isMobile = computed(() => curentRectWidth.value < 425);
const isTablet = computed(() => curentRectWidth.value < 768);
const isTabletBig = computed(() => curentRectWidth.value < 1024);

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

window.addEventListener('resize', () => {
	resize();
});

function resize() {
	curentRectWidth.value = document.querySelector('html').clientWidth as number;
}
</script>

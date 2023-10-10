<template>
	<div class="w-full bg-[var(--color-black1)]">
		<div class="px-[8.375rem] py-24 flex flex-col gap-20">
			<h2 class="text-white text-center font-mont text-4xl font-bold" v-html="title"></h2>			
			
			<ul class="flex gap-24 self-center">
				<li v-for="item in methodList" :key="item">
					<img v-if="item.image" :src="item.image.url" alt="" draggable="false" class="select-none">
				</li>
			</ul>

			<!-- <div class="flex flex-col py-16 w-full">
				<Carousel
					:items-to-show="countItemsToShow"
					:snapAlign="'start'"
					:wrap-around="true" 
					:transition="300"
					:autoplay="2000"
				>
					<Slide v-for="item in methodList" :key="item">
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
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";
import { RootStateInterface } from "../../Store";
import PageDataStateInterface from "../../Store/Modules/PageData/StateInterface";
import ImageInterface from "../../Entity/ImageInterface";

let curentRectWidth = ref(document.querySelector('html').clientWidth as number);

const isMobile = computed(() => curentRectWidth.value < 425);
const isTablet = computed(() => curentRectWidth.value < 768);
const isTabletBig = computed(() => curentRectWidth.value < 1024);

const store = useStore<RootStateInterface>();
const pageData = computed<PageDataStateInterface>(() => store.state.pageData);
const data = computed(() => pageData.value.data?.payments_method);

const methodList = computed<{ image: ImageInterface }>(() => data.value?.method_list);
const title = computed<string>(() => data.value?.title);

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

function resize() {
	curentRectWidth.value = document.querySelector('html').clientWidth as number;
}
</script>

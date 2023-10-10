<template>
	<div class="w-full bg-[var(--color-black1)] relative pb-28 max-phoneX:pb-[11rem]">
		<div class="py-9 max-phoneX:py-[9.37rem]">
			<h2 class="text-white text-center font-mont text-4xl font-bold max-phoneX:text-[3.75rem]" v-html="title"></h2>			
		</div>

		<div class="flex flex-col gap-5 bg-white w-full">
			<Carousel
				:items-to-show="countItemsToShow" 
				:wrap-around="true" 
				:transition="300"
				:snapAlign="'start'"
				:pauseAutoplayOnHover="true"
				:autoplay="5000"
			>
				<Slide v-for="item in list" :key="item">
					<a :href="item.link" v-if="item.link">
						<img :src="item.image.url" alt="" draggable="false" class="select-none w-[16rem] p-10">
					</a>

					<img v-else :src="item.image.url" alt="" draggable="false" class="select-none w-[16rem] p-10">
				</Slide>
			</Carousel>	
		</div>
	</div>
</template>

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { RootStateInterface } from "../../Store";
import PageDataStateInterface from "../../Store/Modules/PageData/StateInterface";
import ImageInterface from '../../Entity/ImageInterface';

let curentRectWidth = ref(document.querySelector('html').clientWidth as number);

const isMobile = computed(() => curentRectWidth.value < 425);
const isTablet = computed(() => curentRectWidth.value < 768);
const isTabletBig = computed(() => curentRectWidth.value < 1024);

const store = useStore<RootStateInterface>();
const pageData = computed<PageDataStateInterface>(() => store.state.pageData);
const data = computed(() => pageData.value.data?.trusted_by);

const title = computed<string>(() => data.value?.title);
const list = computed<Array<{
	image: ImageInterface;
	link: string
}>>(() => data.value?.list);

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
</script>

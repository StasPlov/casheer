<template>
	<div class="w-full bg-white relative overflow-hidden">
		<div class="flex flex-col gap-28 px-[8.375rem] py-[6.3rem] pb-[10.8rem] max-phoneX:px-[1.125rem]">
			<div class="flex flex-col gap-24 justify-center">
				<h1 class="text-[var(--color-black1)] text-3xl font-mont uppercase font-bold text-center rtl:font-normal" v-html="title"></h1>
				
				<ul class="flex self-center gap-4 max-phoneX:flex-col max-phoneX:gap-[8.9375rem]">
					<li v-for="item in productList" :key="item">
						<div ref="itemsListAnim" class="flex flex-col gap-10 items-start our-bussines-item px-5 py-8 rounded-[1.6875rem] min-h-[27.4375rem] max-w-[23.125rem] mr-8 relative rtl:[direction:rtl]" :style="`--our-bussines-product-them-color: ${item.color}`">
							<div class="flex gap-5">
								<img v-if="item.icon" :src="item.icon.url" alt="" draggable="false" class="select-none w-[5.3125rem] h-[5.3125rem]">
								<h2 class="text-black text-3xl font-mont font-bold text-start rtl:font-normal" v-html="item.title"></h2>
							</div>

							<span class="text-black text-xl font-[Arial] font-normal text-start" v-html="item.description"></span>
							
							<a :href="item.button.link?.url ?? ''" v-if="item.button && item.button.is_active">
								<Button class="bg-[var(--our-bussines-product-them-color)]">
									<span class="text-black text-base font-semibold font-[Arial]" :class="{ 'text-white':item.color === 'var(--color-violet1)' || item.color === 'var(--color-blue1)' }">{{ item.button.text }}</span>
								</Button>
							</a>
							
							<img v-if="item.image" :src="item.image.url" alt="" draggable="false" :class="{ 'h-40 -bottom-20':item.color === 'var(--color-blue1)' }" class="object-contain h-[7.875rem] bottom-[-3.125rem] absolute select-none right-[2.1rem] rtl:left-10 rtl:right-auto z-50">
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import Button from "@/Ui/Button.vue";
import { computed, onMounted, ref, watchEffect } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProductInterface from "./Type/ProductInterface";

gsap.registerPlugin(ScrollTrigger);

const props = defineProps<{
	title?: string,
	productList?: Array<ProductInterface>
}>();

let itemsListAnim = ref([]);

let curentRectWidth = ref(document.querySelector('html').clientWidth as number);

const isMobile = computed(() => curentRectWidth.value <= 425);
const isTablet = computed(() => curentRectWidth.value <= 768);
const isTabletBig = computed(() => curentRectWidth.value <= 1024);

const countItemsToShow = computed(() => {
	if(isMobile.value) {
		return 1;
	}

	if(isTablet.value) {
		return 2;
	}

	if(isTabletBig.value) {
		return 3;
	}

	return 3;
});

window.addEventListener('resize', () => {
	resize();
});

watchEffect(() => {
	animateItemList();
}, { flush: "post" });

function animateItemList() {
	gsap.utils.toArray<any>(itemsListAnim.value).forEach((element, i) => {
		gsap.fromTo(element, {
			opacity: 0,
			y: '20%',
		},{
			opacity: 1,
			autoAlpha: 1,
			delay: i * 0.25,
			duration: 2,
			y: 0,
			ease: 'power4.out',
			scrollTrigger: {
				trigger: element,
				start: 'top 100%',
				end: 'bottom bottom',
				toggleActions: "play none none reset",
			},
		});
	});
}

function resize() {
	curentRectWidth.value = document.querySelector('html').clientWidth as number;
}
</script>

<style scoped>
.our-bussines-item {
	background: linear-gradient(145deg, var(--our-bussines-product-them-color) -1.21%, rgba(47, 128, 237, 0.00) 100%)!important;
}
</style>

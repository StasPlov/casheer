<template>
	<div class="w-full bg-[var(--color-black1)]">
		<Carousel
			ref="planeCarousel"
			v-if="list.length"
			:items-to-show="countItemsToShow"
			:wrap-around="false"
			:transition="500"
			:snapAlign="align"
			:pauseAutoplayOnHover="true"
			v-model="curentSlide"
		>
			<Slide v-for="(item, index) in list" :key="item">
				<div ref="itemsListAnim">
					<Plan @click="slideTo(index)" :item="item"> </Plan>
				</div>
			</Slide>
		</Carousel>

		<div class="flex justify-center" v-else>
			<LoadSpiner></LoadSpiner>
		</div>
	</div>
</template>

<script setup lang="ts">
import LoadSpiner from "@/Components/LoadSpiner.vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
import { computed, ref, watch, watchEffect } from "vue";
import Plan from "./Plan/Plan.vue";
import PlanInterface from "./Plan/Type/PlanInterface";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const props = defineProps<{
	list: Array<PlanInterface>;
}>();

let curentRectWidth = ref(document.querySelector("html").clientWidth as number);
let planeCarousel = ref(null);
let curentSlide = ref(0);
let itemsListAnim = ref([]);

const isEvenList = computed(() => props.list.length % 2 === 0); // Четное ли кол-во элэментов
const isMobile = computed(() => curentRectWidth.value < 425);
const isTablet = computed(() => curentRectWidth.value < 768);
const isTabletBig = computed(() => curentRectWidth.value < 1024);
const isMonitBig = computed(() => curentRectWidth.value < 1840);
// return (!isEvenList.value && curentSlide.value === 0) ? 1 : 2;
const countItemsToShow = computed(() => {
	if(isMobile.value) {
		return 1;
	}

	if(isTablet.value) {
		return 1;
	}

	if(isTabletBig.value) {
		return 1.5;
	}

	if(isMonitBig.value) {
		return 2;
	}

	if(props.list.length <= 2) {
		return props.list.length;
	}

	return 3;
});

const align = computed(() => {
	return 'start';
});

window.addEventListener("resize", () => {
	resize();
});

watchEffect(() => {
	animateItemList();
}, { flush: "post" });

function resize() {
	curentRectWidth.value = document.querySelector("html").clientWidth as number;
}

function slideTo(val: any) {
	curentSlide.value = val;
	console.log(isEvenList.value, curentSlide.value);
}

function animateItemList() {
	gsap.utils.toArray<any>(itemsListAnim.value).forEach((element, i) => {
	gsap.fromTo(
		element,
		{
			opacity: 0,
			y: "20%",
		},
		{
			opacity: 1,
			autoAlpha: 1,
			delay: i * 0.25,
			duration: 2,
			y: 0,
			ease: "power4.out",
			scrollTrigger: {
				trigger: element,
				start: "top 100%",
				end: "bottom bottom",
				toggleActions: "play none none reset",
			},
		}
	);
	});
}
</script>


<style>
.carousel__viewport {
	padding-top: 0.625rem;
	padding-bottom: 0.625rem;
}

.carousel__track {
	/* margin-left: 7vw; */
}

.carousel__slide {
	/* display: flex;
	justify-content: start; */
	/* padding: 0.3125rem;
	margin-right: 7vw; */
}

/* .carousel__slide--prev {
	justify-content: end;
}

.carousel__slide--next {
	justify-content: start;
}

.carousel__slide--active {
	justify-content: center;
}*/
</style>

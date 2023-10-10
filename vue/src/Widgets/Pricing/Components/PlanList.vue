<template>
	<div class="w-full bg-[var(--color-black1)]">
		<Slider ref="planeCarousel" v-if="itemCount && !listIsLoading" class="mx-[4.75rem] max-phoneX:mx-[0.125rem] max-lg:mx-[8.75rem]"
			:slider-class="`flex gap-[4.75rem] max-lg:gap-[8.75rem]`" :elementViewCount="countItemsToShow"
		>
			<Plan v-for="item in list" :key="item" :item="item"></Plan>
		</Slider>

		<!-- <ul v-if="itemCount <= 3">
			<li v-for="(item, index) in list" :key="item" ref="itemsListAnim">
				<Plan @click="slideTo(index)" :item="item"></Plan>
			</li>
		</ul> -->
		
		<!-- <Carousel
			ref="planeCarousel"
			v-if="list.length && !listIsLoading"
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
		</Carousel> -->

		<div class="flex justify-center" v-if="listIsLoading">
			<LoadSpiner></LoadSpiner>
		</div>
	</div>
</template>

<script setup lang="ts">
import Slider from "@/Ui/Slider.vue";
import LoadSpiner from "@/Components/LoadSpiner.vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
import { computed, ref, watch, watchEffect } from "vue";
import Plan from "./Plan/Plan.vue";
import PlanInterface from "./Plan/Type/PlanInterface";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RootStateInterface } from "../../../Store";
import { useStore } from "vuex";
import StateInterface from "../../../Store/Modules/Plane/StateInterface";

gsap.registerPlugin(ScrollTrigger);

const store = useStore<RootStateInterface>();
const props = defineProps<{
	list: Array<PlanInterface>;
}>();

let curentRectWidth = ref(document.querySelector("html").clientWidth as number);
let planeCarousel = ref(null);
let curentSlide = ref(0);
let itemsListAnim = ref([]);

const listIsLoading = computed(() => (store.state.plane as StateInterface).planeListIsLoading);

const isEvenList = computed(() => props.list.length % 2 === 0); // Четное ли кол-во элэментов
const isMobile = computed(() => curentRectWidth.value <= 425);
const isTablet = computed(() => curentRectWidth.value <= 768);
const isTabletBig = computed(() => curentRectWidth.value <= 1024);
const isMonitBig = computed(() => curentRectWidth.value <= 1840);
const itemCount = computed(() => props?.list?.length ?? 0);

// return (!isEvenList.value && curentSlide.value === 0) ? 1 : 2;
const countItemsToShow = computed(() => {
	if(isTabletBig.value && !isMobile.value) {
		return 2;
	}

	if(isMobile.value && isTabletBig.value) {
		return 1;
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
	/* margin-left: 6.3rem; */
}

.carousel__slide {
	/* display: flex;
	justify-content: start; */
	/* padding: 0.3125rem;
	margin-right: 6.3rem; */
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

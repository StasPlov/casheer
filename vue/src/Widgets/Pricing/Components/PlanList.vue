<template>
	<div class="w-full bg-[var(--color-black1)]">
        <Carousel ref="planeCarousel" v-if="list.length"
            :items-to-show="countItemsToShow" 
            :wrap-around="false" 
            :transition="500"
            :snapAlign="align"
            :pauseAutoplayOnHover="true"
			v-model="curentSlide"
        >
			<Slide v-for="(item, index) in list" :key="item">
				<div ref="itemsListAnim">
					<Plan @click="slideTo(index)"
						:item="item"
					>
					</Plan>
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
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
import { computed, ref, watch, watchEffect } from 'vue'
import Plan from './Plan/Plan.vue'
import PlanInterface from './Plan/Type/PlanInterface';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const props = defineProps<{
	list: Array<PlanInterface> 
}>();

let curentRectWidth = ref(document.querySelector('html').clientWidth as number);
let planeCarousel = ref(null);
let curentSlide = ref(0);
let align = ref('center');
let itemsListAnim = ref([]);

const isEvenList = computed(() => (props.list.length % 2) === 0); // Четное ли кол-во элэментов
const isMobile = computed(() => curentRectWidth.value < 425);
const isTablet = computed(() => curentRectWidth.value < 768);
const isTabletBig = computed(() => curentRectWidth.value < 1024);
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

	return 1.5;
});

window.addEventListener('resize', () => {
	resize();
});

watchEffect(() => {
	animateItemList();
}, { flush: "post" });

function resize() {
	curentRectWidth.value = document.querySelector('html').clientWidth as number;
}

function slideTo(val: any) {
	curentSlide.value = val;
	console.log(isEvenList.value, curentSlide.value);
}

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
</script>

<style scoped>
.carousel__slide {
	display: flex;
	justify-content: center;
	padding: 0.3125rem;
}

.carousel__slide:first-child {
	display: flex;
	justify-content: end;
}

.carousel__slide:last-child {
	display: flex;
	justify-content: start;
}

.carousel__viewport {
	perspective: 125rem;
}

.carousel__track {
	transform-style: preserve-3d;
}

.carousel__slide--sliding {
	transition: 0.5s;
}

.carousel__slide {
	opacity: 0.9;
	transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
	transform: rotateY(20deg) scale(85%);
}

.carousel__slide--prev {
	opacity: 1;
	transform: rotateY(-10deg) scale(80%);
}

.carousel__slide--next {
	opacity: 1;
	transform: rotateY(10deg) scale(80%);
}

.carousel__slide--active {
	opacity: 1;
	transform: rotateY(0) scale(1);
}
</style>
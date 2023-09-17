<template>
	<div class="w-full bg-white relative launch overflow-hidden" :style="`--data-bg-color: ${themColor ?? 'transparent'}`">
		<div class="flex flex-col gap-28 px-[7vw] py-[5vw] z-0">
			<div class="flex flex-col gap-24 items-center z-10">
				<h1 class="text-[var(--data-bg-color)] text-3xl font-mont uppercase font-bold text-center">Let’s Launch Casheer Now</h1>
				
				<ul class="flex flex-wrap gap-0 gap-y-8 max-md:flex-col max-md:items-center max-md:gap-24">
					<template v-for="(item, index) in list" :key="index">
						<li class="flex flex-col gap-11 text-center" ref="itemsListAnim">
							<span class="text-black text-6xl font-[Arial] font-bold">{{ item.num }}</span>
							<span class="text-black text-3xl font-bold font-[Arial] uppercase" v-html="item.title"></span>
							<span class="text-black text-xl font-normal font-[Arial] max-w-[14.625rem]" v-html="item.subTitle"></span>
						</li>
						<li v-if="index !== (list.length - 1)" ref="itemsListAnim">
							<img :src="arrowIcon" alt="" class="mt-10 max-md:rotate-90 max-md:max-h-3" draggable="false">
						</li>
					</template>
				</ul>
			</div>

			<div class="flex flex-col gap-4 items-start z-10">
				<h1 class="text-[var(--data-bg-color)] text-4xl font-mont font-medium">Access your next solution</h1>

				<Button class="border-[var(--data-bg-color)] border-solid border-[5px] bg-transparent !rounded-[6.25rem] !px-16 !py-1">
					<span class="text-[var(--color-black1)] text-2xl font-bold font-[Arial]">Get Started</span>
				</Button>
			</div>
		</div>

		<img  v-if="img" :src="img" alt="" class="absolute right-0 bottom-0 select-none w-[40vw]" draggable="false" ref="imageAnim">
	</div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import Button from "@/Ui/Button.vue";
import arrowIcon from "@/Assets/Icons/Arrow 3.svg";
import LetsLaunchItemInterface from './Type/LetsLaunchItemInterface';

import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const props = defineProps<{
	img?: string,
	themColor?: string,
	itemList?: Array<LetsLaunchItemInterface> 
}>();

const list = computed<Array<LetsLaunchItemInterface>>(() => props.itemList as []);
const imageAnim = ref(null);
const itemsListAnim = ref([]);

function animateImage() {
	gsap.fromTo(imageAnim.value, {
			opacity: 0,
			x: '50%',
			y: '50%',
		},{
			opacity: 1,
			autoAlpha: 1,
			duration: 4,
			x: '0',
			y: '0',
			ease: 'power4.out',
			scrollTrigger: {
				trigger: imageAnim.value,
				start: 'top 100%',
				end: 'bottom bottom',
				toggleActions: "play none none reset",
			},
		});
}

function animateItemList() {
	gsap.utils.toArray<any>(itemsListAnim.value).forEach((element, i) => {
		gsap.fromTo(element, {
			opacity: 0,
			x: '-50%',
		},{
			opacity: 1,
			autoAlpha: 1,
			delay: i * 0.8,
			duration: 2,
			x: '0',
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


/* gsap.fromTo(
	imageAnim.value,
	{
		opacity: 0,
		autoAlpha: 0,
		y: '200px',
	},
	{
		opacity: 1,
		autoAlpha: 1,
		duration: 3,
		y: '0px',
		ease: 'power4.out',
		scrollTrigger: {
			trigger: imageAnim.value,
			start: 'top 100%',
			end: 'bottom bottom',
			toggleActions: "play none none reset",
		},
	}
); */

onMounted(() => {
	animateImage();
	animateItemList();
});
</script>

<style scoped>
.launch:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 100%;
    background-image: linear-gradient(0deg, var(--data-bg-color) 0%, #fff0 25%)
}

.launch:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 100%;
    background-image: linear-gradient(180deg, var(--data-bg-color) 0%, #fff0 25%)
}
</style>

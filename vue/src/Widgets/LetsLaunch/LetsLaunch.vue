<template>
	<div class="w-full bg-white relative launch overflow-hidden" :style="`--data-bg-color: ${color}`">
		<div class="flex flex-col gap-28 px-[8.375rem] py-[9rem] max-phoneX:pt-[13.5rem] z-0 max-phoneX:pb-[20.25rem]">
			<div class="flex flex-col gap-24 items-center z-10">
				<h1 class="text-[var(--data-bg-color)] text-3xl text-[2.1875rem] font-mont uppercase font-bold text-center max-phoneX:max-w-[50%] rtl:font-normal" v-html="title"></h1>
				
				<ul class="flex flex-wrap gap-0 gap-y-8 max-phoneX:flex-col max-phoneX:items-center max-phoneX:gap-24">
					<template v-for="(item, index) in stepList" :key="index">
						<li class="flex flex-col gap-11 text-center" ref="itemsListAnim">
							<span class="text-black text-6xl font-[Arial] font-bold">{{ item.num }}</span>
							<span class="text-black text-3xl font-bold font-[Arial] uppercase" v-html="item.title"></span>
							<span class="text-black text-xl font-normal font-[Arial] max-w-[14.625rem]" v-html="item.sub_title"></span>
						</li>
						<li v-if="index !== (stepList.length - 1)" ref="itemsListAnim">
							<img v-if="props.stepImage" :src="stepImage.url" alt="" class="max-phoneX:rtl:[transform:rotateZ(0deg)] max-w-[3.75rem] mt-10 max-phoneX:[transform:rotateZ(90deg)] max-phoneX:max-h-3 select-none rtl:[transform:rotateY(180deg)]" draggable="false">
						</li>
					</template>
				</ul>
			</div>

			<div class="flex flex-col gap-5 items-start z-10" v-if="action">
				<h1 class="text-[var(--data-bg-color)] text-4xl text-[2.5rem] font-mont font-medium max-phoneX:max-w-[50%] rtl:font-normal" v-html="action.title"></h1>

				<a :href="action.button.link?.url ?? ''" v-if="action.button.is_active">
					<Button class="!bg-transparent btn relative hover:scale-105 duration-500 !px-12 !py-4">
						<span class="text-[var(--color-black1)] text-2xl text-[1.6875rem] font-bold font-[Arial]">{{ action.button.text }}</span>
					</Button>
				</a>
			</div>
		</div>

		<img  v-if="image" :src="image.url" alt="" class="absolute right-0 bottom-0 select-none max-w-[36rem] rtl:left-0 rtl:right-auto rtl:[transform:rotateY(180deg)] max-phoneX:max-w-full" draggable="false" ref="imageAnim">
	</div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch, watchEffect } from "vue";
import Button from "@/Ui/Button.vue";
import arrowIcon from "@/Assets/Icons/Arrow 3.svg";
import StepInterface from './Type/StepInterface';
import ActionInterface from './Type/ActionInterface';

import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ImageInterface from "../../Entity/ImageInterface";
gsap.registerPlugin(ScrollTrigger);

const props = defineProps<{
	title?: string,
	image?: ImageInterface,
	stepImage?: ImageInterface,
	color?: string,
	stepList?: Array<StepInterface>,
	action?: ActionInterface
}>();

let imageAnim = ref(null);
let itemsListAnim = ref([]);

watchEffect(() => {
	animateImage();
	animateItemList();
});

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
</script>

<style scoped>
.launch:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 100%;
    background-image: linear-gradient(0deg, var(--data-bg-color) -15%, #fff0 22%)
}

.launch:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 100%;
    background-image: linear-gradient(180deg, var(--data-bg-color) -15%, #fff0 18%)
}

.btn::before {
	content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50px;
    border: 5px solid transparent;
    background: radial-gradient(var(--data-bg-color), transparent) border-box;
    mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
}
</style>


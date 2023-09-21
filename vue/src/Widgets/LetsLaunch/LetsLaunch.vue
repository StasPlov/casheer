<template>
	<div class="w-full bg-white relative launch overflow-hidden" :style="`--data-bg-color: ${color}`">
		<div class="flex flex-col gap-28 px-[7vw] py-[5vw] z-0">
			<div class="flex flex-col gap-24 items-center z-10">
				<h1 class="text-[var(--data-bg-color)] text-3xl font-mont uppercase font-bold text-center" v-html="title"></h1>
				
				<ul class="flex flex-wrap gap-0 gap-y-8 max-md:flex-col max-md:items-center max-md:gap-24">
					<template v-for="(item, index) in stepList" :key="index">
						<li class="flex flex-col gap-11 text-center" ref="itemsListAnim">
							<span class="text-black text-6xl font-[Arial] font-bold">{{ item.num }}</span>
							<span class="text-black text-3xl font-bold font-[Arial] uppercase" v-html="item.title"></span>
							<span class="text-black text-xl font-normal font-[Arial] max-w-[14.625rem]" v-html="item.sub_title"></span>
						</li>
						<li v-if="index !== (stepList.length - 1)" ref="itemsListAnim">
							<img v-if="props.stepImage" :src="stepImage.url" alt="" class="mt-10 max-md:[transform:rotateZ(180deg)] max-md:max-h-3 select-none rtl:[transform:rotateY(180deg)]" draggable="false">
						</li>
					</template>
				</ul>
			</div>

			<div class="flex flex-col gap-4 items-start z-10" v-if="action">
				<h1 class="text-[var(--data-bg-color)] text-4xl font-mont font-medium" v-html="action.title"></h1>

				<a :href="action.button.link?.url ?? ''" v-if="action.button.is_active">
					<Button class="border-[var(--data-bg-color)] border-solid border-[5px] bg-transparent !rounded-[6.25rem] !px-16 !py-1">
						<span class="text-[var(--color-black1)] text-2xl font-bold font-[Arial]">{{ action.button.text }}</span>
					</Button>
				</a>
			</div>
		</div>

		<img  v-if="image" :src="image.url" alt="" class="absolute right-0 bottom-0 select-none max-w-[40vw] rtl:left-0 rtl:right-auto rtl:[transform:rotateY(180deg)]" draggable="false" ref="imageAnim">
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
import ButtonInterface from "../../Entity/ButtonInterface";
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

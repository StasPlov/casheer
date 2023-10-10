<template>
	<div class="flex flex-col w-full bg-[var(--color-black1)] relative justify-center items-start" v-if="content">

		<div class="px-[8.375rem] py-[11.7rem] pr-0 pb-0 rtl:pl-0 rtl:pr-[6.3rem] w-full">
			<Light1 class="absolute right-0 top-[-23.75rem] max-phoneX:left-[-20%] w-[47.5625rem]"></Light1>
			<Light2 class="absolute right-0 top-0 max-phoneX:right-[-7.5rem] w-[73.3125rem]"></Light2>

			<div class="grid grid-cols-[repeat(2,_auto)] max-phoneX:grid-cols-1">
				<div class="flex flex-col gap-16 max-phoneX:pb-20 z-10">
					<div class="flex flex-col gap-0">
						<h1 class="text-[5.625rem] font-mont font-bold leading-normal text-transparent bg-clip-text bg-gradient-casheer-checkout-text-center max-phoneX:text-[5.025rem]" v-html="first.title"></h1>
						<span class="text-white text-4xl font-normal leading-tight font-mont" v-html="first.sub_title"></span>
					</div>
					
					<span class="text-white text-2xl font-normal text-[Arial] max-phoneX:hidden" v-html="first.description"></span>
				</div>

				<div class="flex justify-end z-10">
					<div class="relative top-[-6.125rem] scale-110 translate-x-[-1.8rem]">
						<img v-if="first.image_1" :src="first.image_1.url" alt="" class=" w-[57.6875rem] right-0 relative select-none z-0 max-phoneX:min-w-[130%] max-phoneX:right-[8.125rem]" draggable="false" ref="animateMonit01">

						<div class="absolute w-[18.75rem] top-[8rem] left-[9.375rem] max-phoneX:top-[5.625rem] max-phoneX:left-0 z-0" ref="animatePhone01">
							<img v-if="first.image_2" :src="first.image_2.url" alt="" class="relative select-none" draggable="false" ref="waletImage">
							<img v-if="first.image_3" :src="first.image_3.url" alt="" class="w-[87%] absolute select-none top-7 left-5" draggable="false" ref="waletImage">
						</div>
					</div>
				</div>

				<div class="hidden flex-col max-phoneX:flex z-10">
					<span class="text-white text-2xl font-normal text-[Arial]" v-html="first.description"></span>
				</div>
			</div>
		</div>

		<div class="px-[8.375rem] py-[11.7rem] pb-0 flex flex-col gap-20 w-full">
			<div class="grid grid-cols-[repeat(2,_auto)] gap-32 max-phoneX:grid-cols-1 z-10">
				<div class="flex flex-col gap-0">
					<h1 class="text-[5.625rem] font-mont font-bold leading-normal text-transparent bg-clip-text bg-gradient-casheer-checkout-text-center max-phoneX:text-[5.025rem]" v-html="two.title"></h1>
					<span class="text-white text-4xl font-normal leading-tight font-mont" v-html="two.sub_title"></span>
				</div>

				<div class="mt-10 max-phoneX:hidden">
					<span class="text-white text-2xl font-normal text-[Arial] max-w-[29.375rem]" v-html="two.description"></span>
				</div>
			</div>

			<div class="flex justify-center z-10">
				<div class="relative max-phoneX:hidden">
					<img v-if="two.image_1" :src="two.image_1.url" alt="" class=" w-[39.25rem] relative select-none z-10" draggable="false">
				</div>

				<div class="relative hidden max-phoneX:flex">
					<img v-if="two.image_1" :src="two.image_1.url" alt="" class=" w-[39.25rem] relative select-none z-10" draggable="false">
				</div>
			</div>

			<div class="hidden mt-10 max-phoneX:flex z-10">
				<span class="text-white text-2xl font-normal text-[Arial] max-w-[29.375rem]" v-html="two.description"></span>
			</div>
		</div>

		<div class="px-[8.375rem] py-[11.7rem] pb-0 pr-0 w-full rtl:pl-0 rtl:pr-[6.3rem] relative">
			<Light3 class="absolute left-0 bottom-[-20.625rem] w-[57.625rem]"></Light3>

			<div class="grid grid-cols-2 max-phoneX:grid-cols-1">
				<div class="flex flex-col gap-16 max-phoneX:pb-20 z-10">
					<div class="flex flex-col gap-0">
						<h1 class="text-[5.625rem] font-mont font-bold leading-normal text-transparent bg-clip-text bg-gradient-casheer-checkout-text-center max-phoneX:text-[5.025rem]" v-html="last.title"></h1>
						<span class="text-white text-4xl font-normal leading-tight font-mont" v-html="last.sub_title"></span>
					</div>
					
					<span class="text-white text-2xl font-normal text-[Arial] max-phoneX:hidden" v-html="last.description"></span>
				</div>

				<div class="flex justify-center max-phoneX:pb-10 z-10">
					<div class="relative">
						<img v-if="last.image_1" :src="last.image_1.url" alt="" class=" w-[14.1875rem] absolute select-none z-0 top-16 left-[-3.125rem]" draggable="false" ref="phoneImage2">
						<img v-if="last.image_2" :src="last.image_2.url" alt="" class="w-[19rem] select-none z-10" draggable="false" ref="phoneImage">
						<img v-if="last.image_3" :src="last.image_3.url" alt="" class="animation-levitate-three w-[35.625rem] min-w-[35.625rem] top-0 right-[-7.5rem] absolute select-none animate-pulse" draggable="false" ref="arrowImage">
					</div>	
				</div>

				<div class="hidden flex-col max-phoneX:flex z-10">
					<span class="text-white text-2xl font-normal text-[Arial]" v-html="last.description"></span>
				</div>
			</div>
		</div>

		<div class="px-[8.375rem] py-[11.7rem] pt-[9rem] w-full">
			<div class="grid grid-cols-2 grid-flow-row gap-8 gap-y-11 max-phoneX:grid-cols-1">
				<div v-for="item in infoList" :key="item" ref="itemsListAnim">
					<InfoBlock class="h-full"
						:title="item.title"
						:description="item.description"
						:image="item.image"
					></InfoBlock>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import Light1 from "./Assets/Light1.vue";
import Light2 from "./Assets/Light2.vue";
import Light3 from "./Assets/Light3.vue";

import { useStore } from "vuex";
import { computed, onMounted, ref, watch, watchEffect } from "vue";
import InfoBlock from "./InfoBlog/InfoBlock.vue";
import InfoBlockInterface from "./InfoBlog/Type/InfoBlockInterface";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { RootStateInterface } from "../../Store";
import PageDataStateInterface from "../../Store/Modules/PageData/StateInterface";
import ImageInterface from "../../Entity/ImageInterface";

gsap.registerPlugin(ScrollTrigger);

const phoneImage = ref(null);
const phoneImage2 = ref(null);
const arrowImage = ref(null);
const itemsListAnim = ref([]);
let animatePhone01 = ref(null);
let animateMonit01 = ref(null);

const store = useStore<RootStateInterface>();
const pageData = computed<PageDataStateInterface>(() => store.state.pageData);
const content = computed(() => pageData.value.data?.content);

const first = computed(() => content.value?.first);
const two = computed(() => content.value?.two);
const last = computed(() => content.value?.last);
const infoList = computed<Array<InfoBlockInterface>>(() => content.value?.info_list ?? []);

watchEffect(() => {
	animatePhone();
	animatePhone2();
	animateArrow();
	animateItemList();
	
	animateMonit01_();
	animatePhone01_();
}, { flush: "post" });

function animatePhone() {
	gsap.fromTo(
		phoneImage.value,
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
				trigger: phoneImage.value,
				start: 'top 100%',
				end: 'bottom bottom',
				toggleActions: "play none none reset",
			},
		}
	);
}

function animatePhone2() {
	gsap.fromTo(
		phoneImage2.value,
		{
			opacity: 0,
			autoAlpha: 0,
			x: '50%',
		},
		{
			opacity: 1,
			autoAlpha: 1,
			duration: 3,
			delay: 1.5,
			x: '0',
			ease: 'power4.out',
			scrollTrigger: {
				trigger: phoneImage2.value,
				start: 'top 100%',
				end: 'bottom bottom',
				toggleActions: "play none none reset",
			},
		}
	);
}

function animateArrow() {
	gsap.fromTo(
		arrowImage.value,
		{
			opacity: 0,
			autoAlpha: 0,
			y: '400px',
		},
		{
			opacity: 1,
			autoAlpha: 1,
			duration: 3,
			delay: 1,
			y: '0px',
			ease: 'power4.out',
			scrollTrigger: {
				trigger: arrowImage.value,
				start: 'top 100%',
				end: 'bottom bottom',
				toggleActions: "play none none reset",
			},
		}
	);
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

function animatePhone01_() {
	gsap.fromTo(animatePhone01.value, {
		opacity: 0,
		y: '150px',
		x: '-25px'
	},{
		opacity: 1,
		autoAlpha: 1,
		delay: 0.1,
		duration: 4,
		y: 0,
		x: 0,
		ease: 'power4.out',
		scrollTrigger: {
			trigger: animatePhone01.value,
			start: 'top 100%',
			end: 'bottom bottom',
			toggleActions: "play none none reset",
		},
	});
}
function animateMonit01_() {
	gsap.fromTo(animateMonit01.value, {
		opacity: 0,
		y: '180px',
		x: '50px'
	},{
		opacity: 1,
		autoAlpha: 1,
		duration: 2.5,
		y: 0,
		x: 0,
		ease: 'power4.out',
		scrollTrigger: {
			trigger: animateMonit01.value,
			start: 'top 100%',
			end: 'bottom bottom',
			toggleActions: "play none none reset",
		},
	});
}
</script>

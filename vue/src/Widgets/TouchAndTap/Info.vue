<template>
	<div class="flex flex-col w-full bg-[var(--color-black1)] relative justify-center items-start overflow-hidden" v-if="content">
		<Light1 class="absolute top-[-23.125rem] w-[31.25rem] left-[36.9rem] max-phoneX:hidden"></Light1>

		<div class="px-[8.375rem] py-[11.7rem] pb-0 w-full rtl:[direction:ltr] relative">
			<Light2 class="absolute top-[19.375rem] right-[-7.5rem] w-[50rem]"></Light2>
			<Light3 class="absolute top-0 right-0 w-[26.0625rem]"></Light3>

			<div class="grid grid-cols-2 gap-14 max-phoneX:grid-cols-1 z-10">
				<div class="flex flex-col gap-16 order-1 max-phoneX:order-none max-phoneX:pb-20 rtl:[direction:rtl]">
					<span class="text-white text-2xl font-normal text-[Arial]" v-html="first.description"></span>

					<ul class="flex flex-col gap-5 max-phoneX:hidden z-10">
						<li class="flex items-center gap-3 before:content-normal before:flex before:w-4 before:h-4 before:rounded-full before:bg-[var(--color-arctic1)]"
							v-for="item in first.list" :key="item"
						>
							<span class="text-white text-2xl font-[Arial] font-semibold">{{ item.title }}</span>
						</li>
					</ul>

					<ul class="flex gap-6 z-10">
						<li v-for="item in first.payment_list" :key="item">
							<img v-if="item.image" :src="item.image.url" alt="" class="max-h-11">
						</li>
					</ul>
				</div>

				<div class="flex justify-start z-10">
					<div class="relative top-[-3.125rem]">
						<img v-if="first.image_1" :src="first.image_1.url" alt="" class="w-[33.8125rem] relative select-none z-10" draggable="false" ref="waletImage">
						<img v-if="first.image_2" :src="first.image_2.url" alt="" class=" w-[24.3125rem] absolute select-none top-[12.5rem] right-[7.5rem] z-10" draggable="false" ref="animatePhone1">
						<img v-if="first.image_3" :src="first.image_3.url" alt="" class="w-[17.875rem] absolute select-none top-0 right-0 z-10 " draggable="false" ref="animateMonit1">
					</div>	
				</div>

				<div class="hidden flex-col gap-16 max-phoneX:flex z-10">
					<ul class="flex flex-col gap-5">
						<li class="flex items-center gap-3 before:content-normal before:flex before:w-4 before:h-4 before:rounded-full before:bg-[var(--color-arctic1)]"
							v-for="item in first.list" :key="item"
						>
							<span class="text-white text-2xl font-[Arial] font-semibold">{{ item.title }}</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
		
		<div class="px-[8.375rem] py-[11.7rem] pt-[18rem] w-full relative">
			<Light4 class="absolute top-[-30.625rem] left-[-17.5rem] w-[63.3125rem]"></Light4>

			<div class="grid grid-cols-2 max-phoneX:grid-cols-1">
				<div class="flex flex-col gap-16 max-phoneX:pb-20 z-10">
					<div class="flex flex-col gap-0">
						<h1 class="text-[5.625rem] font-mont font-bold leading-normal text-transparent bg-clip-text bg-gradient-casheer-TapAndGo-text-center max-phoneX:text-[5.025rem]" v-html="two.title"></h1>
						<span class="text-white text-4xl font-normal leading-tight font-mont" v-html="two.sub_title"></span>
					</div>
					
					<span class="text-white text-2xl font-normal text-[Arial] max-phoneX:hidden" v-html="two.description"></span>
				</div>

				<div class="flex justify-start max-phoneX:pb-96 rtl:justify-end z-10">
					<div class="relative top-[-3.125rem]">
						<img v-if="two.image_1" :src="two.image_1.url" alt="" class=" w-[35.5rem] relative select-none z-10" draggable="false" ref="waletImage">
						<img v-if="two.image_2" :src="two.image_2.url" alt="" class="w-[34.8125rem] absolute select-none top-0 -right-52 z-10" draggable="false" ref="waletImage">
						<img v-if="two.image_3" :src="two.image_3.url" alt="" class="animation-levitate-three w-[30.1875rem] h-[30.1875rem] absolute select-none top-16 right-10 z-0 animate-pulse" draggable="false" ref="waletImage">
					</div>	
				</div>

				<div class="hidden flex-col max-phoneX:flex z-10">
					<span class="text-white text-2xl font-normal text-[Arial]" v-html="two.description"></span>
				</div>
			</div>

		</div>

		<div class="px-[8.375rem] py-[11.7rem] pb-0 w-ful rtl:[direction:ltr]">
			<div class="grid grid-cols-2 max-phoneX:grid-cols-1">
	
				<div class="flex flex-col gap-16 order-1 max-phoneX:order-none max-phoneX:pb-72 rtl:[direction:rtl] z-10">
					<div class="flex flex-col gap-0">
						<h1 class="text-[5.625rem] font-mont font-bold leading-normal text-transparent bg-clip-text bg-gradient-casheer-TapAndGo-text-center max-phoneX:text-[5.025rem]" v-html="three.title"></h1>
						<span class="text-white text-4xl font-normal leading-tight font-mont" v-html="three.sub_title"></span>
					</div>
					
					<span class="text-white text-2xl font-normal text-[Arial] max-phoneX:hidden" v-html="three.description"></span>
				</div>

				<div class="flex justify-start max-phoneX:pb-20 z-10">
					<div class="relative">
						<img v-if="three.image_1" :src="three.image_1.url" alt="" class="w-[25.3125rem] relative select-none z-10 animate-pulse ml-[6.25rem]" draggable="false" ref="waletImage">
						<img v-if="three.image_2" :src="three.image_2.url" alt="" class=" w-full absolute top-[12.8125rem] left-[3.75rem] select-none z-10" draggable="false" ref="waletImage">
						<img v-if="three.image_3" :src="three.image_3.url" alt="" class="w-[37.5rem] min-w-[32rem] absolute select-none top-[-140px] left-[-6.3rem] z-10" draggable="false" ref="waletImage">
					</div>	
				</div>

				<div class="hidden flex-col max-phoneX:flex z-10">
					<span class="text-white text-2xl font-normal text-[Arial]" v-html="three.description"></span>
				</div>

			</div>
		</div>

		<div class="px-[8.375rem] py-[11.7rem] flex flex-col gap-20 w-full relative">
			<Light5 class="absolute top-[-10.625rem] right-0 w-[63.3125rem]"></Light5>

			<div class="grid grid-cols-[repeat(2,_auto)] gap-32 max-phoneX:grid-cols-1 z-10">
				<div class="flex flex-col gap-0">
					<h1 class="text-[5.625rem] font-mont font-bold leading-normal text-transparent bg-clip-text bg-gradient-casheer-TapAndGo-text-center max-phoneX:text-[5.025rem]" v-html="last.title"></h1>
					<span class="text-white text-4xl font-normal leading-tight font-mont" v-html="last.sub_title"></span>
				</div>

				<div class="mt-10 max-phoneX:hidden">
					<span class="text-white text-2xl font-normal text-[Arial] max-w-[29.375rem]" v-html="last.description"></span>
				</div>
			</div>

			<div class="flex justify-center z-10">
				<div class="relative max-phoneX:hidden">
					<img v-if="last.image_1" :src="last.image_1.url" alt="" class="w-[39.25rem] relative select-none z-10 shdow" draggable="false">
					<img v-if="last.image_2" :src="last.image_2.url" alt="" class=" w-[7.625rem] absolute select-none z-10 -top-10 right-[19.3125rem]" draggable="false">
					<img v-if="last.image_3" :src="last.image_3.url" alt="" class="w-[12.3125rem] absolute select-none z-10 top-[3.125rem] -right-[9.375rem]" draggable="false">
					<img v-if="last.image_4" :src="last.image_4.url" alt="" class="animation-levitate-three w-[39.9375rem] absolute select-none z-10 top-[2.1875rem] right-[17.875rem]" draggable="false">
				</div>

				<div class="relative hidden max-phoneX:flex z-10">
					<img v-if="last.image_mobile" :src="last.image_mobile.url" alt="" class=" w-[39.25rem] relative select-none ml-[-6.3rem] z-10" draggable="false">
				</div>
			</div>

			<div class="hidden mt-10 max-phoneX:flex">
				<span class="text-white text-2xl font-normal text-[Arial] max-w-[29.375rem]" v-html="last.description"></span>
			</div>
		</div>

	</div>
</template>

<script setup lang="ts">
import Light1 from "./Assets/Light1.vue";
import Light2 from "./Assets/Light2.vue";
import Light3 from "./Assets/Light3.vue";
import Light4 from "./Assets/Light4.vue";
import Light5 from "./Assets/Light5.vue";

import { computed, onMounted, ref, watch, watchEffect } from "vue";
import InfoBlock from "./InfoBlog/InfoBlock.vue";
import InfoBlockInterface from "./InfoBlog/Type/InfoBlockInterface";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useStore } from "vuex";
import { RootStateInterface } from "../../Store";
import PageDataStateInterface from "../../Store/Modules/PageData/StateInterface";

gsap.registerPlugin(ScrollTrigger);

const phoneImage = ref(null);
const phoneImage2 = ref(null);
const arrowImage = ref(null);
const itemsListAnim = ref([]);
let animatePhone1 = ref(null);
let animateMonit1 = ref(null);

const store = useStore<RootStateInterface>();
const pageData = computed<PageDataStateInterface>(() => store.state.pageData);
const content = computed(() => pageData.value.data?.content);

const first = computed(() => content.value?.first);
const two = computed(() => content.value?.two);
const three = computed(() => content.value?.three);
const last = computed(() => content.value?.last);

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
			x: '-50%',
			y: '20%',
			rotate: '35deg'
		},{
			opacity: 1,
			autoAlpha: 1,
			delay: i * 0.5,
			duration: 2,
			x: 0,
			y: 0,
			rotate: 0,
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
	gsap.fromTo(animatePhone1.value, {
		opacity: 0,
		x: '-25px'
	},{
		opacity: 1,
		autoAlpha: 1,
		delay: 0.1,
		duration: 4,
		x: 0,
		ease: 'power4.out',
		scrollTrigger: {
			trigger: animatePhone1.value,
			start: 'top 100%',
			end: 'bottom bottom',
			toggleActions: "play none none reset",
		},
	});
}
function animateMonit01_() {
	gsap.fromTo(animateMonit1.value, {
		opacity: 0,
		y: '180px',
	},{
		opacity: 1,
		autoAlpha: 1,
		duration: 2.5,
		y: 0,
		ease: 'power4.out',
		scrollTrigger: {
			trigger: animateMonit1.value,
			start: 'top 100%',
			end: 'bottom bottom',
			toggleActions: "play none none reset",
		},
	});
}
</script>

<style scoped>
.shdow {
	filter: drop-shadow(0px 0px 1px #1CF4FF) drop-shadow(0px 0px 5px #1CF4FF) drop-shadow(0px 0px 5px #1CF4FF);
}
</style>

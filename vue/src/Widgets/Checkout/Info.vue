<template>
	<div class="flex flex-col w-full bg-[var(--color-black1)] relative justify-center items-start">
		<div class="px-[7vw] py-[25vh] pr-0 z-0 w-full">
			<div class="grid grid-cols-2">
	
				<div class="flex flex-col gap-16">
					<div class="flex flex-col gap-0">
						<h1 class="text-[5.625rem] font-mont font-bold leading-normal text-transparent bg-clip-text bg-gradient-casheer-checkout-text-center">Onboarding</h1>
						<span class="text-white text-4xl font-normal leading-tight font-[Arial]">in real time</span>
					</div>
					
					<span class="text-white text-2xl font-normal text-[Arial]">
						<p>Accept payments immediately and experience a <br>simplified launch, thanks to online orientation and <br>intuitive documentation optimised for larger online <br>stores to start-ups.</p>
					</span>
				</div>

				<div class="relative flex items-center justify-center">
					<img :src="backgroundNotebook" alt="" class="absolute elect-none right-0" draggable="false">
				</div>

			</div>
		</div>

		<div class="px-[7vw] py-[25vh] z-0 w-full flex flex-col gap-20">
			<div class="grid grid-cols-2 gap-32">
				<div class="flex flex-col gap-0">
					<h1 class="text-[5.625rem] font-mont font-bold leading-normal text-transparent bg-clip-text bg-gradient-casheer-checkout-text-center">Dashboard</h1>
					<span class="text-white text-4xl font-normal leading-tight font-[Arial]">insights in an instant</span>
				</div>

				<div class="mt-10">
					<span class="text-white text-2xl font-normal text-[Arial]">
						<p>Track payments and transactions from any device, <br>no matter the time of day.</p>
						<p>Explore a range of extensive merchant benefits <br>designed for the online and offline businesses of <br>tomorrow.</p>
					</span>
				</div>
			</div>

			<div class="flex justify-center">
				<img :src="backgroundDasboard" alt="">
			</div>
		</div>

		<div class="px-[7vw] py-[25vh] z-0 w-full">
			<div class="grid grid-cols-2">
	
				<div class="flex flex-col gap-16">
					<div class="flex flex-col gap-0">
						<h1 class="text-[5.625rem] font-mont font-bold leading-normal text-transparent bg-clip-text bg-gradient-casheer-checkout-text-center">Experience</h1>
						<span class="text-white text-4xl font-normal leading-tight font-[Arial]">the fastest returns</span>
					</div>
					
					<span class="text-white text-2xl font-normal text-[Arial]">
						<p>Instant payment processing offers <br>advantages to even the most emerging <br>business and empowers them with the <br>capital and cashflow to scale.</p>
					</span>
				</div>

				<div class="relative flex items-center justify-center">
					<img :src="backgroundPhone1" alt="" class="absolute select-none left-[12.5rem]" draggable="false" ref="phoneImage2">
					<img :src="backgroundPhone2" alt="" class="absolute select-none" draggable="false" ref="phoneImage">
					<img :src="backgroundArrow4" alt="" class="absolute select-none animate-pulse" draggable="false" ref="arrowImage">
				</div>

			</div>
		</div>

		<div class="px-[7vw] py-[25vh] pt-[10vh] w-full">
			<div class="grid grid-cols-2 grid-flow-row gap-8 gap-y-11">
				<template v-for="item in infoList" :key="item">
					<InfoBlock
						:title="item.title"
						:description="item.description"
						:image="item.image"
					></InfoBlock>
				</template>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";

import backgroundGraphics from "@/Assets/Images/InvoiceDev/graphics.svg";
import backgroundPhone from "@/Assets/Images/InvoiceDev/casheer graphics 16.png";
import backgroundMonitor from "@/Assets/Images/InvoiceDev/casheer graphics 18.png";
import backgroundHend from "@/Assets/Images/InvoiceDev/casheer graphics 15.png";
import backgroundMap from "@/Assets/Images/InvoiceDev/map.svg";

import backgroundDasboard from "@/Assets/Images/casheer checkout dashboard.svg";
import backgroundNotebook from "@/Assets/Images/OPTY430 1.png";

import backgroundPhone1 from "@/Assets/Images/iphone mochup front touch and tap 1.png";
import backgroundPhone2 from "@/Assets/Images/iphone mochup front touch and tap 2.png";
import backgroundArrow4 from "@/Assets/Images/Group 494.svg";

import InfoBlock from "./InfoBlog/InfoBlock.vue";
import InfoBlockInterface from "./InfoBlog/Type/InfoBlockInterface";

import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const phoneImage = ref(null);
const phoneImage2 = ref(null);
const arrowImage = ref(null);
const itemsListAnim = ref([]);

const infoList = computed<Array<InfoBlockInterface>>(() => [
	{
		title: 'Direct integration',
		description: 'From instant synchronisation with card networks and banks to browser-based checkout flows, we operate and serve at every level of the financial stack.',
		image: require('@/Assets/Icons/Mask group.png')
	},
	{
		title: 'Data-hardened',
		description: 'Platform models respond to macro-insights to drive revenue streams across conversion, fraud, revenue recovery, and more.',
		image: require('@/Assets/Icons/Mask group (3).svg')
	},
	{
		title: 'Fastest-improving platform',
		description: 'Stay ahead and secure of industry shifts, with continuous updates and optimizations.',
		image: require('@/Assets/Icons/Mask group (4).svg')
	},
	{
		title: 'Gold standard operability',
		description: 'Our systems uphold unlimited uptime to ensure consistent scalability and compliance.',
		image: require('@/Assets/Icons/Mask group (5).svg')
	}
]);

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

onMounted(() => {
	animatePhone();
	animatePhone2();
	animateArrow();
	animateItemList();
});
</script>

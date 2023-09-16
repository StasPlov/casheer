<template>
	<div class="flex flex-col w-full bg-[var(--color-black1)] relative justify-center items-start overflow-hidden">

		<div class="px-[7vw] py-[13vw] w-full min-h-screen">
			<div class="grid grid-cols-2 gap-14 max-md:grid-cols-1">
	
				<div class="flex flex-col gap-16 order-1 max-md:order-none max-md:pb-20">
					<span class="text-white text-2xl font-normal text-[Arial]">
						<p>Upgrade your Android device to a full-functioning <br>
						contactless POS. Casheer Touch app accepts Visa & <br>
						Mastercard with multiple payment options. Merchant <br>
						infrastructure is now at your fingertips</p>
					</span>

					<ul class="flex flex-col gap-5 max-md:hidden">
						<li class="flex items-center gap-3 before:content-normal before:flex before:w-4 before:h-4 before:rounded-full before:bg-[var(--color-arctic1)]"
							v-for="text in textList" :key="text"
						>
							<span class="text-white text-2xl font-[Arial] font-semibold">{{ text }}</span>
						</li>
					</ul>

					<ul class="flex gap-6">
						<li v-for="item in logoList" :key="item">
							<img :src="item.image" alt="" class="max-h-11">
						</li>
					</ul>
				</div>

				<div class="flex justify-start">
					<div class="relative top-[-3.125rem]">
						<img :src="background01" alt="" class="w-[33.8125rem] relative select-none z-10 animate-pulse" draggable="false" ref="waletImage">
						<img :src="background02" alt="" class="w-[24.3125rem] absolute select-none top-[12.5rem] right-[7.5rem] z-10" draggable="false" ref="waletImage">
						<img :src="background03" alt="" class="w-[17.875rem] absolute select-none top-0 right-0 z-10 " draggable="false" ref="waletImage">
					</div>	
				</div>

				<div class="hidden flex-col gap-16 max-md:flex">
					<ul class="flex flex-col gap-5">
						<li class="flex items-center gap-3 before:content-normal before:flex before:w-4 before:h-4 before:rounded-full before:bg-[var(--color-arctic1)]"
							v-for="text in textList" :key="text"
						>
							<span class="text-white text-2xl font-[Arial] font-semibold">{{ text }}</span>
						</li>
					</ul>
				</div>

			</div>
		</div>
		
		<div class="px-[7vw] py-[13vw] w-full min-h-screen">
			<div class="grid grid-cols-2 max-md:grid-cols-1">
	
				<div class="flex flex-col gap-16 max-md:pb-20">
					<div class="flex flex-col gap-0">
						<h1 class="text-[5.625rem] font-mont font-bold leading-normal text-transparent bg-clip-text bg-gradient-casheer-TapAndGo-text-center">Flexibility</h1>
						<span class="text-white text-4xl font-normal leading-tight font-[Arial]">and accessible e-receipts</span>
					</div>
					
					<span class="text-white text-2xl font-normal text-[Arial] max-md:hidden">
						<p>Enhance the customer experience with transparent and comprehensive transaction reports. Share and process paperless e-receipts instantly via email or mobile.</p>
					</span>
				</div>

				<div class="flex justify-start max-md:pb-96">
					<div class="relative top-[-3.125rem]">
						<img :src="background1" alt="" class="w-[35.5rem] relative select-none z-10" draggable="false" ref="waletImage">
						<img :src="background2" alt="" class="w-[34.8125rem] absolute select-none top-0 -right-52 z-10" draggable="false" ref="waletImage">
						<img :src="background3" alt="" class="w-[30.1875rem] h-[30.1875rem] absolute select-none top-16 right-10 z-0 animate-pulse" draggable="false" ref="waletImage">
					</div>	
				</div>

				<div class="hidden flex-col max-md:flex">
					<span class="text-white text-2xl font-normal text-[Arial]">
						<p>Enhance the customer experience with transparent and comprehensive transaction reports. Share and process paperless e-receipts instantly via email or mobile.</p>
					</span>
				</div>

			</div>
		</div>

		<div class="px-[7vw] py-[13vw] w-full min-h-screen">
			<div class="grid grid-cols-2">
	
				<div class="flex flex-col gap-16 order-1">
					<div class="flex flex-col gap-0">
						<h1 class="text-[5.625rem] font-mont font-bold leading-normal text-transparent bg-clip-text bg-gradient-casheer-TapAndGo-text-center">Security</h1>
						<span class="text-white text-4xl font-normal leading-tight font-[Arial]">built to support efficiency</span>
					</div>
					
					<span class="text-white text-2xl font-normal text-[Arial]">
						<p>Enjoy complete protection for your transactions thanks to a 3D-secure PCI DSS compliant infrastructure. Cardholder data stays safe, invisible, and only in customer hands.</p>
					</span>
				</div>

				<div class="flex justify-start">
					<div class="relative top-[-3.125rem]">
						<img :src="background1" alt="" class="w-[35.5rem] relative select-none z-10" draggable="false" ref="waletImage">
						<img :src="background2" alt="" class="w-[34.8125rem] absolute select-none top-0 -right-52 z-10" draggable="false" ref="waletImage">
						<img :src="background3" alt="" class="w-[30.1875rem] h-[30.1875rem] absolute select-none top-16 right-10 z-0 animate-pulse" draggable="false" ref="waletImage">
					</div>	
				</div>

			</div>
		</div>

		<div class="px-[7vw] py-[13vw] flex flex-col gap-20 w-full min-h-screen">
			<div class="grid grid-cols-2 gap-32">
				<div class="flex flex-col gap-0">
					<h1 class="text-[5.625rem] font-mont font-bold leading-normal text-transparent bg-clip-text bg-gradient-casheer-TapAndGo-text-center">Convenience</h1>
					<span class="text-white text-4xl font-normal leading-tight font-[Arial]">meets intelligence</span>
				</div>

				<div class="mt-10">
					<span class="text-white text-2xl font-normal text-[Arial] max-w-[29.375rem]">
						<p>Accept digital payments, virtual and <br>physical cards through the fast and <br>intuitive Casheer Tap & Go POS. <br>Leverage any payment option <br>instantly, at any time, on any device.</p>
					</span>
				</div>
			</div>

			<div class="flex justify-center">
				<div class="relative">
					<img :src="background24" alt="" class="w-[39.25rem] relative select-none z-10" draggable="false">
					<img :src="background21" alt="" class="w-[7.625rem] absolute select-none z-10 -top-10 right-[19.3125rem]" draggable="false">
					<img :src="background22" alt="" class="w-[12.3125rem] absolute select-none z-10 top-[3.125rem] -right-[9.375rem]" draggable="false">
					<img :src="background23" alt="" class="w-[39.9375rem] absolute select-none z-10 top-[2.1875rem] right-[17.875rem]" draggable="false">
				</div>
			</div>
		</div>

	</div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";

import background01 from "@/Assets/Images/Group 498.svg";
import background02 from "@/Assets/Images/casheer card (1).png";
import background03 from "@/Assets/Images/2300zdfgh 1.png";

import background1 from "@/Assets/Images/Group 501.svg";
import background2 from "@/Assets/Images/phone.png";
import background3 from "@/Assets/Images/Group 497.svg";

import background21 from "@/Assets/Images/casheer touch & tap graphics (2).png";
import background22 from "@/Assets/Images/casheer touch & tap graphics (3).png";
import background23 from "@/Assets/Images/mockup laptop checkout (2) 1.png";
import background24 from "@/Assets/Images/Group 495.svg";

/* import backgroundPhone from "@/Assets/Images/InvoiceDev/casheer graphics 16.png";
import backgroundMonitor from "@/Assets/Images/InvoiceDev/casheer graphics 18.png";
import backgroundHend from "@/Assets/Images/InvoiceDev/casheer graphics 15.png";
import backgroundMap from "@/Assets/Images/InvoiceDev/map.svg"; */

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

const logoList = computed<Array<any>>(() => [
	{
		image: require('@/Assets/Icons/samsung pay logo.png')
	},
	{
		image: require('@/Assets/Icons/samsung pay logo.png')
	},
	{
		image: require('@/Assets/Icons/samsung pay logo.png')
	},
]);

const textList = computed<Array<string>>(() => [
	'Tap & Go - contactless credit card support.',
	'Smart Link – email, SMS, social media.',
	'Smart device superapp - no additional hardware.'
]);

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

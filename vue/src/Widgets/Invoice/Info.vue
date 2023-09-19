<template>
	<div class="flex flex-col w-full bg-[var(--color-black1)] relative justify-center items-start overflow-hidden">
		
		<div class="px-[7vw] py-[13vw] pb-0 z-0 w-full">
			<div class="grid grid-cols-2 max-md:grid-cols-1 max-md:gap-28">

				<div class="flex flex-col gap-16">
					<div class="flex flex-col gap-0">
						<h1 class="text-[5.625rem] font-mont font-bold text-transparent bg-clip-text bg-gradient-casheer-invoice-text-center leading-none">Developed</h1>
						<span class="text-white text-4xl font-normal leading-tight font-[Arial]">for a smarter Dashboard</span>
					</div>
					
					<span class="text-white text-2xl font-normal text-[Arial] max-w-[29.4375rem] max-md:hidden">
						<p>Access insights close to the source from your next-gen digital command center, complete with <big>3D Secure 2.0</big> mobile and desktop compatibility.</p>
						<p>Enjoy real-time confirmation and multiple simultaneous payment methods.</p>
					</span>
				</div>
				
				<div class="flex justify-start">
					<div class="relative max-md:ml-[-2.5rem]">
						<img :src="backgroundGraphics" alt="" class="w-[37.125rem] relative select-none z-10 animate-pulse" draggable="false" ref="animateRound1">
						<img :src="backgroundPhone" alt="" class="w-[7.6875rem] absolute select-none top-8 left-10 z-10" draggable="false" ref="animatePhone1">
						<img :src="backgroundMonitor" alt="" class="w-[24.3125rem] absolute select-none top-[13.125rem] right-[-4.375rem] z-10" draggable="false" ref="animateMonit1">
					</div>	
				</div>
				
				<div>
					<span class="text-white text-2xl font-normal text-[Arial] max-w-[29.4375rem] hidden max-md:block">
						<p>Access insights close to the source from your next-gen digital command center, complete with <big>3D Secure 2.0</big> mobile and desktop compatibility.</p>
						<p>Enjoy real-time confirmation and multiple simultaneous payment methods.</p>
					</span>
				</div>

			</div>
		</div>

		<div class="px-[7vw] pl-0 py-[13vw] pb-0 z-0 w-full max-md:pl-[7vw]">
			<div class="grid grid-cols-2  max-md:grid-cols-1">

				<div class="hidden flex-col gap-0 max-md:flex">
					<h1 class="text-[5.625rem] font-mont font-bold leading-normal text-transparent bg-clip-text bg-gradient-casheer-invoice-text-center">Optimised </h1>
					<span class="text-white text-4xl font-normal leading-tight font-[Arial]">for mobile & desktop</span>
				</div>

				<div class="flex justify-start">
					<div class="relative max-md:ml-[-7vw]">
						<img :src="backgroundHend" alt="" class="w-[42.0625rem] select-none left-0" draggable="false" ref="animateHend1">
					</div>	
				</div>


				<div class="flex flex-col gap-20">
					<div class="flex flex-col gap-16">
						<div class="flex flex-col gap-0 max-md:hidden">
							<h1 class="text-[5.625rem] font-mont font-bold leading-normal text-transparent bg-clip-text bg-gradient-casheer-invoice-text-center">Optimised </h1>
							<span class="text-white text-4xl font-normal leading-tight font-[Arial]">for mobile & desktop</span>
						</div>
						
						<span class="text-white text-2xl font-normal text-[Arial] max-w-[35.625rem]">
							<p>Streamline merchant registration and securely open your products to the world, on any device, at any time of day. Manage efficiently using mobile-integrated digital invoicing.</p>
						</span>
					</div>

					<img :src="backgroundMap" alt="" class="select-none left-0 -ml-20" draggable="false" ref="animateMap1">
				</div>

			</div>
		</div>

		<div class="px-[7vw] py-[13vw] flex flex-col gap-20 w-full">
			<div class="grid grid-cols-2 gap-32 max-md:grid-cols-1 pb-32">
				<div class="flex flex-col gap-0">
					<h1 class="text-[5.625rem] font-mont font-bold leading-normal text-transparent bg-clip-text bg-gradient-casheer-invoice-text-center">Customised</h1>
					<span class="text-white text-4xl font-normal leading-tight font-[Arial]">for your business</span>
				</div>

				<div class="mt-10 max-md:hidden">
					<span class="text-white text-2xl font-normal text-[Arial] max-w-[29.375rem]">
						<p>Maintain cashflow and revenues with <strong>unified QR and payment links.</strong></p>
						<p>Open an unrestricted sandbox environment and connect globally with this fully customisable solution.</p>
					</span>
				</div>
			</div>

			<div class="flex justify-center">
				<div class="relative max-md:hidden h-[40.125rem]">
					<img :src="background32" alt="" class="w-[55.5625rem] relative select-none z-10 animate-pulse" draggable="false" refs="itemsListAnim">
					<img :src="background31" alt="" class="w-[51.125rem] absolute select-none z-10 top-[10rem]" draggable="false" refs="itemsListAnim">
					<img :src="background33" alt="" class="w-[7.4375rem] absolute select-none z-10 top-[-6.875rem] right-[-2.6875rem]" draggable="false" refs="itemsListAnim">
					<img :src="background34" alt="" class="w-[8.625rem] absolute select-none z-10 top-[-4.375rem] right-[16.875rem]" draggable="false" refs="itemsListAnim">
					<img :src="background35" alt="" class="w-[16.25rem] absolute select-none z-10 top-[-5.8125rem] left-[-1.9375rem]" draggable="false" refs="itemsListAnim">
					<img :src="background36" alt="" class="w-[6.6875rem] absolute select-none z-10 top-[-2.5rem] left-[10.3125rem]" draggable="false" refs="itemsListAnim">
					<img :src="background37" alt="" class="w-[9.9375rem] absolute select-none z-10 top-[4.6875rem] left-[-6.875rem]" draggable="false" refs="itemsListAnim">
					<img :src="background38" alt="" class="w-[16.375rem] absolute select-none z-10 bottom-0 right-[7.5rem]" draggable="false" refs="itemsListAnim">
				</div>

				<div class="relative hidden max-md:flex">
					<img :src="background31Mob" alt="" class="relative select-none z-10" draggable="false">
				</div>
			</div>

			<div class="hidden mt-10 max-md:flex">
				<span class="text-white text-2xl font-normal text-[Arial] max-w-[29.375rem]">
					<p>Maintain cashflow and revenues with <strong>unified QR and payment links.</strong></p>
					<p>Open an unrestricted sandbox environment and connect globally with this fully customisable solution.</p>
				</span>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import backgroundGraphics from "@/Assets/Images/InvoiceDev/graphics.svg";
import backgroundPhone from "@/Assets/Images/InvoiceDev/casheer graphics 16.png";
import backgroundMonitor from "@/Assets/Images/InvoiceDev/casheer graphics 18.png";
import backgroundHend from "@/Assets/Images/InvoiceDev/casheer graphics 15.png";
import backgroundMap from "@/Assets/Images/InvoiceDev/map.svg";

import background31 from '@/Assets/Images/casheer graphics 23.png';
import background32 from '@/Assets/Images/Group 491.svg'; 
import background33 from '@/Assets/Images/casheer graphics invoce card.svg';
import background34 from '@/Assets/Images/casheer graphics qr.svg';
import background35 from '@/Assets/Images/casheer graphics 20.svg';
import background36 from '@/Assets/Images/Group 183.svg';
import background37 from '@/Assets/Images/casheer graphics 8.svg';
import background38 from '@/Assets/Images/casheer graphics 23 phone.png';

import background31Mob from '@/Assets/Images/Group 378.svg';

import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { onMounted, ref } from "vue";

gsap.registerPlugin(ScrollTrigger);

let elementsAnim: Array<HTMLElement> = [];
let animateHend1 = ref(null);
let animateMap1 = ref(null);

let animatePhone1 = ref(null);
let animateMonit1 = ref(null);
let animateRound1 = ref(null);

function animateItemList() {
	gsap.utils.toArray<HTMLElement>(elementsAnim).forEach((element, i) => {
		gsap.fromTo(element, {
			opacity: 0,
			y: '20%',
		},{
			opacity: 1,
			autoAlpha: 1,
			delay: i * 0.35,
			duration: 3,
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

function animateHend() {
	gsap.fromTo(animateHend1.value, {
		opacity: 0,
		x: '-50%',
		y: '20%'
	},{
		opacity: 1,
		autoAlpha: 1,
		duration: 2,
		x: 0,
		y: 0,
		ease: 'power4.out',
		scrollTrigger: {
			trigger: animateHend1.value,
			start: 'top 100%',
			end: 'bottom bottom',
			toggleActions: "play none none reset",
		},
	});
}

function animateMap() {
	gsap.fromTo(animateMap1.value, {
		opacity: 0,
		y: '20%',
	},{
		opacity: 1,
		autoAlpha: 1,
		duration: 4,
		y: 0,
		ease: 'power4.out',
		scrollTrigger: {
			trigger: animateMap1.value,
			start: 'top 100%',
			end: 'bottom bottom',
			toggleActions: "play none none reset",
		},
	});
}

function animateRound() {
	gsap.fromTo(animateRound1.value, {
		opacity: 0,
		scale: 0
	},{
		opacity: 1,
		autoAlpha: 1,
		duration: 10,
		scale: 1,
		ease: 'power4.out',
		scrollTrigger: {
			trigger: animateRound1.value,
			start: 'top 100%',
			end: 'bottom bottom',
			toggleActions: "play none none reset",
		},
	});
}

function animatePhone() {
	gsap.fromTo(animatePhone1.value, {
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
			trigger: animatePhone1.value,
			start: 'top 100%',
			end: 'bottom bottom',
			toggleActions: "play none none reset",
		},
	});
}
function animateMonit() {
	gsap.fromTo(animateMonit1.value, {
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
			trigger: animateMonit1.value,
			start: 'top 100%',
			end: 'bottom bottom',
			toggleActions: "play none none reset",
		},
	});
}


onMounted(() => {
	elementsAnim = Array.from(document.querySelectorAll<HTMLElement>('[refs="itemsListAnim"]'));
	animateItemList();
	animateHend();
	animateMap();

	animateRound();
	animateMonit();
	animatePhone();
});
</script>

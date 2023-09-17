<template>
	<div class="flex flex-col w-full bg-[var(--color-black1)] relative justify-center items-start overflow-hidden">

		<div class="px-[7vw] py-[13vw] w-full">
			<div class="grid grid-cols-2 gap-14 max-md:grid-cols-1">
	
				<div class="flex flex-col gap-16  max-md:pb-20">
					<div class="flex flex-col gap-0">
						<h1 class="text-[5.625rem] font-mont font-bold leading-normal text-transparent bg-clip-text bg-gradient-casheer-WalletAndCard-text-center">Designed</h1>
						<span class="text-white text-4xl font-normal leading-tight font-[Arial]">for rapid operations</span>
					</div>

					<ul class="flex flex-col gap-5 max-md:hidden">
						<li class="flex items-center gap-3 before:content-normal before:flex before:min-w-[1rem] before:min-h-[1rem] before:rounded-full before:bg-[var(--color-green1)]"
							v-for="text in textList" :key="text"
						>
							<span class="text-white text-2xl font-[Arial] font-normal">{{ text }}</span>
						</li>
					</ul>
				</div>

				<div class="flex justify-start">
					<div class="relative top-[-3.125rem]">
						<img :src="background01" alt="" class="w-[49.4375rem] relative select-none z-10 animate-pulse" draggable="false" ref="waletImage">
						<!-- <img :src="background02" alt="" class="w-[24.3125rem] absolute select-none top-[12.5rem] right-[7.5rem] z-10" draggable="false" ref="waletImage">
						<img :src="background03" alt="" class="w-[17.875rem] absolute select-none top-0 right-0 z-10 " draggable="false" ref="waletImage"> -->
					</div>	
				</div>

				<div class="hidden flex-col gap-16 max-md:flex">
					<ul class="flex flex-col gap-5">
						<li class="flex items-center gap-3 before:content-normal before:flex before:w-4 before:h-4 before:rounded-full before:bg-[var(--color-green1)]"
							v-for="text in textList" :key="text"
						>
							<span class="text-white text-2xl font-[Arial] font-semibold">{{ text }}</span>
						</li>
					</ul>
				</div>

			</div>
		</div>

		<Supported></Supported>

		<div class="px-[7vw] py-[13vw] flex flex-col gap-20 w-full">
			<div class="grid grid-cols-[max-content_auto] gap-32 max-md:grid-cols-1">
				<div class="flex flex-col gap-0">
					<h1 class="text-[5.625rem] font-mont font-bold text-transparent bg-clip-text bg-gradient-casheer-WalletAndCard-text-center leading-none">Client-centric</h1>
					<span class="text-white text-4xl font-normal leading-tight font-[Arial]">and accessible</span>
				</div>

				<div class="mt-10 max-md:hidden">
					<ul class="flex flex-col gap-5 max-md:hidden">
						<li class="flex items-center gap-3 before:content-normal before:flex before:min-w-[1rem] before:min-h-[1rem] before:rounded-full before:bg-[var(--color-green1)]"
							v-for="text in textClientList" :key="text"
						>
							<span class="text-white text-2xl font-[Arial] font-normal">{{ text }}</span>
						</li>
					</ul>
				</div>
			</div>

			<div class="flex">
				<div class="relative max-md:hidden w-full mt-[-3.125rem]">
					<img :src="background24" alt="" class="w-[65.6875rem] relative select-none z-10" draggable="false">
					<img :src="background22" alt="" class="w-[35rem] absolute select-none top-[-18.75rem] left-[-7vw] z-10" draggable="false">
					<img :src="background21" alt="" class="w-[35rem] absolute select-none top-[0.625rem] right-[-7vw] z-10" draggable="false">
				</div>
			</div>

			<div class="hidden mt-10 max-md:flex">
				<span class="text-white text-2xl font-normal text-[Arial] max-w-[29.375rem]">
					<p>Accept digital payments, virtual and <br>physical cards through the fast and <br>intuitive Casheer Tap & Go POS. <br>Leverage any payment option <br>instantly, at any time, on any device.</p>
				</span>
			</div>
		</div>
		
		<div class="px-[7vw] py-[13vw] w-full">
			<div class="grid grid-cols-2 gap-14 max-md:grid-cols-1">
	
				<div class="flex flex-col gap-16  max-md:pb-20">
					<div class="flex flex-col gap-0">
						<h1 class="text-[5.625rem] font-mont font-bold leading-normal text-transparent bg-clip-text bg-gradient-casheer-WalletAndCard-text-center">Empowered</h1>
						<span class="text-white text-4xl font-normal leading-tight font-[Arial]">and ready</span>
					</div>

					<ul class="flex flex-col gap-5 max-md:hidden">
						<li class="flex items-center gap-3 before:content-normal before:flex before:min-w-[1rem] before:min-h-[1rem] before:rounded-full before:bg-[var(--color-green1)]"
							v-for="text in textEmpoweredList" :key="text"
						>
							<span class="text-white text-2xl font-[Arial] font-normal">{{ text }}</span>
						</li>
					</ul>
				</div>

				<div class="flex justify-center">
					<div class="relative">
						<img :src="background41" alt="" class="w-[21.875rem] relative select-none z-10" draggable="false" ref="waletImage">
						<img :src="background42" alt="" class="w-[18.5rem] absolute select-none bottom-0 left-[11.75rem]" draggable="false" ref="waletImage">
						<img :src="background43" alt="" class="w-[17.5rem] absolute select-none z-10 top-[13.125rem] left-[-6.875rem]" draggable="false" ref="waletImage">
					</div>	
				</div>

				<div class="hidden flex-col gap-16 max-md:flex">
					<ul class="flex flex-col gap-5">
						<li class="flex items-center gap-3 before:content-normal before:flex before:min-w-[1rem] before:min-h-[1rem] before:rounded-full before:bg-[var(--color-green1)]"
							v-for="text in textList" :key="text"
						>
							<span class="text-white text-2xl font-[Arial] font-semibold">{{ text }}</span>
						</li>
					</ul>
				</div>

			</div>
		</div>

		<div class="px-[7vw] py-[13vw] w-full">
			<div class="grid grid-cols-2 gap-14 max-md:grid-cols-1">
	
				<div class="flex flex-col gap-16 order-1 max-md:order-none ">
					<div class="flex flex-col gap-0">
						<h1 class="text-4xl font-mont font-bold leading-normal text-white">Apply for your <br>Casheer Card Now</h1>
						
						<span class="text-white text-2xl font-normal leading-tight font-[Arial]">
							<p>Use Casheer Cards to gain complete control over finances, bills, and receivable funds. Begin with a seamless digital onboarding and KYC process.</p>
						</span>
					</div>

					<ul class="flex flex-col gap-5 max-md:hidden">
						<li class="flex items-center gap-3 before:content-normal before:flex before:min-w-[1rem] before:min-h-[1rem] before:rounded-full before:bg-[var(--color-green1)]"
							v-for="text in textEmpoweredList" :key="text"
						>
							<span class="text-white text-2xl font-[Arial] font-normal">{{ text }}</span>
						</li>
					</ul>
				</div>

				<div class="flex justify-start max-md:order-1">
					<div class="relative top-[-3.125rem]">
						<img :src="background3" alt="" class="w-[49.4375rem] relative select-none z-10 animate-pulse" draggable="false" ref="waletImage">
					</div>	
				</div>

				<div class="hidden flex-col gap-16 max-md:flex">
					<ul class="flex flex-col gap-5">
						<li class="flex items-center gap-3 before:content-normal before:flex before:min-w-[1rem] before:min-h-[1rem] before:rounded-full before:bg-[var(--color-green1)]"
							v-for="text in textEmpoweredList" :key="text"
						>
							<span class="text-white text-2xl font-[Arial] font-semibold">{{ text }}</span>
						</li>
					</ul>
				</div>

			</div>
		</div>

	</div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";

import background01 from "@/Assets/Images/casheer wallet graphics.svg";

import background41 from "@/Assets/Images/casheer wallet graphics (2).png";
import background42 from "@/Assets/Images/casheer wallet graphics (3).png";
import background43 from "@/Assets/Images/sign in.svg";

import background3 from "@/Assets/Images/casheer cards.png";

import background21 from "@/Assets/Images/Rectangle 228.png";
import background22 from "@/Assets/Images/coinview-app-h7a6g0ua6LM-unsplash 1.png";
import background24 from "@/Assets/Images/graphics line.svg";

import Supported from './Supported.vue';

import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const phoneImage = ref(null);
const phoneImage2 = ref(null);
const arrowImage = ref(null);
const itemsListAnim = ref([]);

onMounted(() => {
	animatePhone();
	animatePhone2();
	animateArrow();
	animateItemList();
});

const textList = computed<Array<string>>(() => [
	'Join the virtual banking space using your ID and selfie-cam verification. ',
	'Explore a world of cashback benefits and offers. ',
	'Freeze, unfreeze, and suspend cards in an instant.',
	'Fund your account using your existing bank card, Benefit Pay, or Fawri and Fawri+ accounts. '
]);

const textClientList = computed<Array<string>>(() => [
	'At your service 24-7.',
	'Connect bank accounts, execute billings, or issue transfers in one comprehensive solution that’s both transparent and secure.',
	'Casheer grants you control through open, democratized financials in a complete and compliant solution.'
]);

const textEmpoweredList = computed<Array<string>>(() => [
	'Register with ease and simplicity to launch your Casheer virtual card using your connected mobile device.',
	'Your new financial superpower costs no fees or hidden charges. ',
	'Manage your accounts with no minimum salary or balance.'
]);

const textCardList = computed<Array<string>>(() => [
	'Digital Banking App – Virtual IBAN*',
	'Wallet Account',
	'Casheer MasterCard',
	'Virtual & Physical Branded Cards'
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
</script>

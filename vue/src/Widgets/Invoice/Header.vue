<template>
	<div class="w-full bg-[var(--color-black1)] flex items-center relative overflow-hidden">
		<img :src="background" alt="" class="absolute w-full left-0 animate-pulse select-none max-md:bottom-[-2.5rem] max-md:left-[-11.875rem] max-md:min-w-[200%] max-md:object-contain" draggable="false">

		<div class="grid grid-cols-2 gap-10 px-[7vw] py-[15vw] pt-[5vw] pr-0 w-full max-md:grid-cols-1 max-md:pr-[7vw] max-md:pb-[30vw]">

			<div class="flex flex-col justify-center gap-28 z-10 max-md:order-1">
				<div class="flex flex-col gap-9">
					<h1 class="font-mont text-white text-7xl font-bold">Casheer Invoice</h1>

					<div class="text-5xl max-phoneX:text-3xl">
						<span class="text-white text-4xl font-normal leading-tight font-[Arial]">
							<p>Make merchant payment information <br><big>Fast, Organised, Reliable.</big> <br>All in one place.</p>
						</span>
					</div>
				</div>

				<div class="flex gap-10 items-center mb-9">
					<img :src="logo" alt="">

					<Button class="border-[var(--color-violet1)] border-solid border-[5px] bg-transparent !rounded-[6.25rem] !px-16 !py-1">
						<span class="text-white text-base font-bold font-[Arial]">Get insights</span>
					</Button>
				</div>
			</div>

			<div class="flex justify-end">
				<div class="relative max-md:hidden">
					<img :src="backgroundDashboard" alt="" class="w-[40rem] select-none" draggable="false" ref="waletImage">
					<img :src="backgroundMobile" alt="" class="w-[15.4375rem] absolute left-[-0.875rem] top-[10.25rem] select-none" draggable="false" ref="waletImage2">
				</div>

				<div class="relative hidden max-md:block max-md:max-h-[41.5rem]">
					<img :src="backgroundDashboardMob" alt="" class="w-[40rem] select-none max-md:mt-[-9.25rem] max-md:ml-[-7vw] max-md:min-w-[130%]" draggable="false" ref="waletImage">
					<img :src="backgroundMobile" alt="" class="w-[15.4375rem] absolute left-[20.125rem] top-[16.25rem] select-none" draggable="false" ref="waletImage2">
				</div>	
			</div>

		</div>

	</div>
</template>

<script setup lang="ts">
import background from "@/Assets/Images/casheer invoice background.png";
import logo from "@/Assets/Images/casheer invoice icon.png";

import backgroundMobile from "@/Assets/Images/casheer graphics 9.png";
import backgroundDashboard from "@/Assets/Images/dashboard 1.png";
import backgroundDashboardMob from "@/Assets/Images/casheer invoice graphics dash mob.jpg";

import Button from "@/Ui/Button.vue";

import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { onMounted, ref } from "vue";

gsap.registerPlugin(ScrollTrigger);

const waletImage = ref(null);
const waletImage2 = ref(null);

function animateWalet() {
	gsap.fromTo(
		waletImage.value,
		{
			opacity: 0,
			autoAlpha: 0,
			x: '200px',
		},
		{
			opacity: 1,
			autoAlpha: 1,
			duration: 5,
			x: '0px',
			ease: 'power4.out',
			scrollTrigger: {
				trigger: waletImage.value,
				start: 'top 100%',
				end: 'bottom bottom',
				toggleActions: "play none none reset",
			},
		}
	);
}

function animateWalet2() {
	gsap.fromTo(
		waletImage2.value,
		{
			opacity: 0,
			autoAlpha: 0,
			y: '100px',
		},
		{
			opacity: 1,
			autoAlpha: 1,
			delay: 1.5,
			duration: 4,
			y: '0px',
			ease: 'power4.out',
			scrollTrigger: {
				trigger: waletImage2.value,
				start: 'top 80%',
				end: 'bottom bottom',
				toggleActions: "play none none reset",
			},
		}
	);
}

onMounted(() => {
	animateWalet();
	animateWalet2();
});
</script>

<template>
	<div class="w-full bg-[var(--color-black1)] flex items-center relative">
		<img :src="background" alt="" class="absolute w-full left-0 animate-pulse select-none max-md:bottom-[-4.5rem] max-md:left-[-11.875rem] max-md:min-w-[200%] max-md:object-contain z-10" draggable="false">
		
		<div class="grid grid-cols-2 gap-10 px-[7vw] py-[15vw] pt-[5vw] pr-0 w-full max-md:grid-cols-1 max-md:pr-[7vw] max-md:pb-[30vw]">

			<div class="flex flex-col justify-center gap-28 z-10 max-md:order-1">
				<div class="flex flex-col gap-9">
					<h1 class="font-mont text-white text-7xl font-bold">Casheer Wallet</h1>

					<div class="text-5xl max-phoneX:text-3xl">
						<span class="text-white text-4xl font-normal leading-tight font-[Arial]">
							<p><font size="5">Money’s here when need it most</font></p>
							<p>to Fund, Receive, Transfer <br>for better global banking.</p>
						</span>
					</div>
				</div>

				<div class="flex gap-10 items-center mb-9">
					<img :src="logo" alt="">

					<Button class="border-[var(--color-green1)] border-solid border-[5px] bg-transparent !rounded-[6.25rem] !px-16 !py-1">
						<span class="text-white text-base font-bold font-[Arial]">Open yours</span>
					</Button>
				</div>
			</div>

			<div class="flex justify-center z-10">
				<div class="relative h-full">
					<img :src="backgroundMobile" alt="" class="w-[28.25rem] select-none" draggable="false" ref="animElement">
				</div>
			</div>
			
		</div>

	</div>
</template>

<script setup lang="ts">
import background from "@/Assets/Images/casheer wallet background.png";
import logo from "@/Assets/Icons/casheer wallet graphics.png";
import backgroundMobile from "@/Assets/Images/Wallet dasboard black 2.png";
import Button from "@/Ui/Button.vue";

import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { onMounted, ref } from "vue";

gsap.registerPlugin(ScrollTrigger);
const animElement = ref(null);

function animateIn() {
	gsap.fromTo(
		animElement.value,
		{
			opacity: 0,
			autoAlpha: 0,
			y: '100px',
		},
		{
			opacity: 1,
			autoAlpha: 1,
			duration: 4,
			y: '0px',
			ease: 'power4.out',
			scrollTrigger: {
				trigger: animElement.value,
				start: 'top 80%',
				end: 'bottom bottom',
				toggleActions: "play none none reset",
			},
		}
	);
}

onMounted(() => {
	animateIn();
});
</script>

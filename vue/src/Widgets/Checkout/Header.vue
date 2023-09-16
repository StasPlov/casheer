<template>
	<div class="w-full min-h-screen bg-[var(--color-black1)] flex items-center relative">
		<img :src="background" alt="" class="absolute w-full left-0 animate-pulse select-none" draggable="false">
		
		<div class="grid grid-cols-2 pl-[7vw] w-full max-md:grid-cols-1">
			<div class="flex flex-col justify-center gap-28  z-0">
				<div class="flex flex-col gap-9">
					<h1 class="font-mont text-white text-7xl font-bold">Casheer Checkout</h1>

					<div class="text-5xl max-phoneX:text-3xl">
						<span class="text-white text-4xl font-normal leading-tight font-[Arial]">
							<p>Your complete payments hub is ready to use. <br><big>Rapid, Powerful, Intuitive.</big> <br>Process payments quickly.</p>
						</span>
					</div>
				</div>

				<div class="flex gap-10 items-center mb-9">
					<img :src="logo" alt="">

					<Button class="border-[var(--color-blue1)] border-solid border-[5px] bg-transparent !rounded-[6.25rem] !px-16 !py-1">
						<span class="text-white text-base font-bold font-[Arial]">Get insights</span>
					</Button>
				</div>
			</div>

			<div class="flex justify-end">
				<div class="relative h-full">
					<img :src="backgroundDashboard" alt="" class="select-none" draggable="false" ref="waletImage">
					<img :src="backgroundMobile" alt="" class="absolute left-[-6.875rem] top-[11.875rem] select-none jh" draggable="false" ref="waletImage2">
				</div>	
			</div>
		</div>

	</div>
</template>

<script setup lang="ts">
import background from "@/Assets/Images/uhflbtyn 1.png";
import logo from "@/Assets/Icons/checkout.png";
import backgroundMobile from "@/Assets/Images/checkoutreceipt.svg";
import backgroundDashboard from "@/Assets/Images/checkoutDasboard.svg";
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

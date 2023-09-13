<template>
	<div class="flex flex-col bg-[var(--color-black1)] relative">
		<img :src="backgroundGradient" alt="" class="absolute left-0 top-0 z-10 select-none" draggable="false">

		<div class="relative w-full flex text-center">
			<img :src="background" alt="" class="w-full select-none -z-0" draggable="false">

			<div class="w-full max-phoneX:px-[7vw] absolute  max-phoneX:relative bottom-0 z-20">
				<h1 class="text-white text-9xl font-bold font-mont select-none py-4 max-phoneX:text-6xl max-phoneX:text-start">This is Our Story</h1>
			</div>
		</div>

		<div class="px-[7vw] py-[8vw] z-20">
			<span class="text-white text-3xl font-normal font-[Arial]">
				<p>Precise merchant solutions are the true face of the business. Casheer understands that.</p>
				<p>Today, customers demand holistic approaches, greater convenience, and a personalised buying experience. 
					These next-gen commercial instruments reinforce a business’s relationship which grows, 
					develops mutual trust - and above all - reclaims the holistic experience for digitally-centric end users.
				</p>
			</span>
		</div>
	</div>
</template>

<script setup lang="ts">
import background from "@/Assets/Images/casheer image team.jpg";
import backgroundGradient from "@/Assets/Icons/casheer about us gradient.svg";
</script>

<template>
	<div class="flex flex-col bg-[var(--color-black1)] relative">
		<img :src="backgroundGradient" alt="" class="absolute right-0 top-[-70%] select-none -z-0" draggable="false">

		<div class="px-[7vw] py-[52vh]">
			<div class="flex flex-col gap-10">
				<h2 class="text-white text-6xl font-bold font-mont text-center">We Will  Take You There</h2>

				<span class="text-white text-4xl font-normal font-[Arial] text-center">
					<p>Casheer shares vital payment knowhow with you.</p>
					<p>Our objective is to lead the industry in simplifying B2B and B2C transactions, 
						conquering barriers to entry, and to be an advocate for positive change in the industry.
					</p>
				</span>
			</div>
		</div>

		<img :src="backgroundGif" alt="" class="select-none -z-0" draggable="false">
	</div>
</template>

<script setup lang="ts">
import backgroundGradient from "@/Assets/Icons/casheer about us gradient2.svg";
import backgroundGif from "@/Assets/Images/644f2b16487d2196638996432083498e.gif";
</script>

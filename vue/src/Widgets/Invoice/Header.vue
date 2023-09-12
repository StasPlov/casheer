<template>
	<div class="flex flex-col w-full min-h-screen bg-[var(--color-black1)] relative justify-center items-start">
		<img :src="background" alt="" class="absolute w-full left-0 animate-pulse select-none" draggable="false">
		<img :src="backgroundDashboadrd" alt="" class="absolute right-0 select-none" draggable="false">
		<img :src="backgroundMobile" alt="" class="absolute right-[26%] top-[19%] select-none" draggable="false">

		<div class="flex flex-col gap-28 px-[7vw] z-0">
			<div class="flex flex-col gap-9">
				<h1 class="font-mont text-white text-7xl font-bold">Casheer Invoice</h1>

				<div class="max-w-[43.125rem] text-5xl max-phoneX:text-3xl">
					<span class="text-white text-4xl font-normal leading-tight font-[Arial]">Make merchant payment information <br><big>Fast, Organised, Reliable.</big> <br>All in one place.</span>
				</div>
			</div>

			<div class="flex gap-10 mb-9">
				<img :src="logoInvoce" alt="">

				<Button class="border-[var(--color-violet1)] border-solid border-[5px] bg-transparent !rounded-[6.25rem] !px-16 !py-1">
					<span class="text-white text-base font-bold font-[Arial]">Get insights</span>
				</Button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import background from "@/Assets/Images/casheer invoice background.png";
import logoInvoce from "@/Assets/Images/casheer invoice icon.png";
import backgroundMobile from "@/Assets/Images/casheer graphics 9.png";
import backgroundDashboadrd from "@/Assets/Images/dashboard 1.png";
import Button from "@/Ui/Button.vue";
</script>

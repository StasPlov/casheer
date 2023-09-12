<template>
	<div class="flex flex-col bg-[var(--color-black1)] relative overflow-hidden">
		<img :src="background" alt="" class="w-full select-none -z-0" draggable="false">

		<div class="w-full flex items-center justify-center absolute -right-[10%] top-28">
			<div class="flex flex-col gap-4">
				<span class="text-white text-6xl font-mont font-bold leading-tight">Technology that brings <br> <span class="text-[var(--color-violet1)] font-black uppercase">your customers</span> <br>closer than ever</span>
				<span class="text-white text-xl font-[Arial] font-semibold max-w-[25rem]">Collect and compile global B2B payments with simplicity and instant reporting thanks to the most advanced merchant solution of its class.</span>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import background from "@/Assets/Images/casheer image 7.png";
</script>

<template>
	<div class="flex flex-col bg-[var(--color-black1)] relative overflow-hidden">
		<img :src="background" alt="" class="w-full select-none -z-0" draggable="false">

		<div class="flex items-center justify-center absolute left-[7vw] top-28">
			<div class="flex flex-col gap-4">
				<span class="text-white text-6xl font-mont font-bold leading-tight">Merchant solutions <br>with the brains<br> <span class="text-[var(--color-blue1)] font-black uppercase">designed to facilitate</span> <br>your modern business</span>
				<span class="text-white text-xl font-[Arial] font-semibold max-w-[25rem]">Process payments with confidence, knowhow, and in delivering a better tomorrow.</span>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import background from "@/Assets/Images/casheer image.png";
</script>

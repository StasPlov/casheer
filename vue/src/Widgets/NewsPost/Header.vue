<template>
	<div class="flex flex-col bg-[var(--color-black1)] relative">
		<img :src="backgroundGradient" alt="" class="absolute left-0 top-0 z-10 select-none" draggable="false">

		<div class="relative w-full flex text-center max-phoneX:flex-col">
			<img :src="background" alt="" class="w-full select-none -z-0" draggable="false">
		</div>
	</div>
</template>

<script setup lang="ts">
import background from "@/Assets/Images/casheer image team.jpg";
import backgroundGradient from "@/Assets/Icons/casheer about us gradient.svg";
</script>

<template>
	<div class="w-full min-h-screen bg-[var(--color-black1)] rounded-[2.875rem]">
		<div class="px-[7vw] py-[15vh] grid grid-rows-2 h-full">
			<div>
				<h2 class="font-mont text-[3.375rem] text-white font-semibold leading-tight select-none">
					Welcome to a world of <br>
					<strong> <span class="bg-clip-text bg-gradient-casheer-title-to-b text-transparent uppercase">better insights and <br>business performance.</span></strong>
				</h2>
			</div>
			
			<div class="relative">
				<div class="absolute">
					<img :src="backgroundDashboard" alt="" draggable="false" class="select-none">
					<img :src="backgroundPhone" alt="" draggable="false" class="select-none absolute bottom-0 left-16">
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import backgroundDashboard from "@/Assets/Images/dashboardBackground.png";
import backgroundPhone from "@/Assets/Images/phoneBackground.png";
</script>

<template>
	<div class="w-full min-h-screen bg-[var(--color-black1)] rounded-[2.875rem] max-phoneX:overflow-hidden">
		<div class="px-[7vw] py-[7vw] max-phoneX:py-[15vw] flex flex-col max-phoneX:gap-12">
			
			<div class="hidden max-phoneX:flex justify-center">
				<img :src="backgroundPhone" alt="" draggable="false" class="w-[17.125rem] select-none">
			</div>
			
			<div class="flex flex-col gap-4 items-start">
				<h2 class="font-mont text-[3.375rem] text-white font-semibold leading-tight select-none">
					Welcome to a world of <br>
					<strong> <span class="bg-clip-text bg-gradient-casheer-title-to-b text-transparent uppercase">better insights and <br>business performance.</span></strong>
				</h2>

				<Button class="!bg-transparent btn relative !py-4 hover:scale-105 duration-500">
					<span class="text-white text-base font-[Arial] font-semibold">Get Started Now</span>
				</Button>
			</div>
			
			<div class="flex justify-end">
				<div class="relative max-phoneX:flex max-phoneX:justify-end">
					<img :src="backgroundDashboard" alt="" draggable="false" class="w-[61.8125rem] select-none max-phoneX:min-w-[250%] max-phoneX:mr-[-6.6875rem]">
					<img :src="backgroundPhone" alt="" draggable="false" class="w-[16.125rem] select-none absolute bottom-0 left-16 max-phoneX:hidden">
				</div>
			</div>

		</div>
	</div>
</template>

<script setup lang="ts">
import backgroundDashboard from "@/Assets/Images/dashboardBackground.png";
import backgroundPhone from "@/Assets/Images/phoneBackground.png";
import Button from "@/Ui/Button";
</script>

<style scoped>
.btn::before {
	content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50px;
    border: 5px solid transparent;
    background: radial-gradient(var(--color-green1), transparent) border-box;
    mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
}
</style>

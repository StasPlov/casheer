<template>
	<div class="flex flex-col w-full min-h-screen bg-[var(--color-black1)] relative justify-center items-start">
		<img :src="background" alt="" class="absolute w-full max-phoneX:hidden animate-pulse select-none" draggable="false">
		<img :src="backgroundMob" alt="" class="absolute w-full hidden max-phoneX:block select-none" draggable="false">

		<div class="flex flex-col gap-28 px-[7vw] z-0 max-phoneX:justify-between max-phoneX:h-full max-phoneX:pt-[25vh] max-phoneX:pb-[5vh]">
			<div class="flex flex-col gap-9">
				<img :src="logo" alt="" class="w-[23.125rem] select-none" draggable="false">

				<div class="max-w-[43.125rem] text-5xl max-phoneX:text-3xl">
					<span class="text-white font-bold leading-tight font-mont"><b>Smarter</b> payment solutions for the enterprise of <big>now.</big></span>
				</div>
			</div>

			<div class="flex flex-col gap-5">
				<div class="flex gap-10 mb-9">
					<Button class="!bg-transparent btn relative !py-4 hover:scale-105 duration-500">
						<span class="text-white text-base font-[Arial] font-semibold">Get Started Now</span>
					</Button>

					<Button class="bg-transparent underline underline-offset-4 hover:text-opacity-80">
						<span class="text-white text-base font-[Arial] font-bold">Explore ></span>
					</Button>
				</div>

				<hr class="max-w-[70%] max-phoneX:max-w-full">

				<div class="flex flex-col gap-1">
					<span class="text-white text-sm font-normal">Proudly Licensed by the Bank of Kuwait</span>
					<span class="text-white text-sm font-normal">Proudly Licensed by Central Bank of Bahrain</span>
				</div>
			</div>
		</div>

	</div>
</template>

<script setup lang="ts">
import logo from "@/Assets/Images/logo.png";
import background from "@/Assets/Images/casheer_s1_background.png";
import backgroundMob from "@/Assets/Images/casheer_background_mobile.png";
import Button from "../../Ui/Button.vue";
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

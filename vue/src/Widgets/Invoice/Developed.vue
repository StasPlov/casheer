<template>
	<div class="flex flex-col w-full bg-[var(--color-black1)] relative justify-center items-start">
		<div class="px-[7vw] py-[25vh] z-0 w-full">
			<div class="grid grid-cols-2">
	
				<div class="flex flex-col gap-16">
					<div class="flex flex-col gap-0">
						<h1 class="text-[5.625rem] font-mont font-bold leading-normal text-transparent bg-clip-text bg-gradient-casheer-invoice-text-center">Casheer Invoice</h1>
						<span class="text-white text-4xl font-normal leading-tight font-[Arial]">for a smarter Dashboard</span>
					</div>
					
					<span class="text-white text-2xl font-normal text-[Arial] max-w-[29.4375rem]">
						<p>Access insights close to the source from your next-gen digital command center, complete with <big>3D Secure 2.0</big> mobile and desktop compatibility.</p>
						<p>Enjoy real-time confirmation and multiple simultaneous payment methods.</p>
					</span>
				</div>

				<div class="relative flex items-center justify-center">
					<img :src="backgroundGraphics" alt="" class="absolute elect-none animate-pulse" draggable="false">
					<img :src="backgroundPhone" alt="" class="absolute select-none left-[20%] top-0" draggable="false">
					<img :src="backgroundMonitor" alt="" class="absolute elect-none right-[10%] bottom-[-30%]" draggable="false">
				</div>

			</div>
		</div>

		<div class="px-[7vw] pl-0 py-[25vh] z-0 w-full">
			<div class="grid grid-cols-2">
				<img :src="backgroundHend" alt="" class="select-none left-0 w-[80%]" draggable="false">

				<div class="flex flex-col gap-20">
					<div class="flex flex-col gap-16">
						<div class="flex flex-col gap-0">
							<h1 class="text-[5.625rem] font-mont font-bold leading-normal text-transparent bg-clip-text bg-gradient-casheer-invoice-text-center">Optimised </h1>
							<span class="text-white text-4xl font-normal leading-tight font-[Arial]">for mobile & desktop</span>
						</div>
						
						<span class="text-white text-2xl font-normal text-[Arial] max-w-[35.625rem]">
							<p>Streamline merchant registration and securely open your products to the world, on any device, at any time of day. Manage efficiently using mobile-integrated digital invoicing.</p>
						</span>
					</div>

					<img :src="backgroundMap" alt="" class="select-none left-0 -ml-20" draggable="false">
				</div>

			</div>
		</div>

		<div class="px-[7vw] py-[25vh] z-0 w-full">
			<div class="grid grid-cols-2 gap-32">
				<div class="flex flex-col gap-0">
					<h1 class="text-[5.625rem] font-mont font-bold leading-normal text-transparent bg-clip-text bg-gradient-casheer-invoice-text-center">Customised</h1>
					<span class="text-white text-4xl font-normal leading-tight font-[Arial]">for your business</span>
				</div>

				<div class="mt-10">
					<span class="text-white text-2xl font-normal text-[Arial] max-w-[29.375rem]">
						<p>Maintain cashflow and revenues with <strong>unified QR and payment links.</strong></p>
						<p>Open an unrestricted sandbox environment and connect globally with this fully customisable solution.</p>
					</span>
				</div>
			</div>

			<div class="flex">
				<!-- Тут надо экспортнуть картинку в svg -->
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import backgroundGraphics from "@/Assets/Images/InvoiceDev/graphics.svg";
import backgroundPhone from "@/Assets/Images/InvoiceDev/casheer graphics 16.png";
import backgroundMonitor from "@/Assets/Images/InvoiceDev/casheer graphics 18.png";
import backgroundHend from "@/Assets/Images/InvoiceDev/casheer graphics 15.png";
import backgroundMap from "@/Assets/Images/InvoiceDev/map.svg";
</script>

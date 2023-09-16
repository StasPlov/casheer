<template>
	<div class="flex flex-col w-full bg-[var(--color-black1)] relative justify-center items-start overflow-hidden">
		
		<div class="px-[7vw] py-[13vw] z-0 w-full">
			<div class="grid grid-cols-2 max-md:grid-cols-1 max-md:gap-28">

				<div class="flex flex-col gap-16">
					<div class="flex flex-col gap-0">
						<h1 class="text-[5.625rem] font-mont font-bold text-transparent bg-clip-text bg-gradient-casheer-invoice-text-center leading-none">Developed</h1>
						<span class="text-white text-4xl font-normal leading-tight font-[Arial]">for a smarter Dashboard</span>
					</div>
					
					<span class="text-white text-2xl font-normal text-[Arial] max-w-[29.4375rem] max-md:hidden">
						<p>Access insights close to the source from your next-gen digital command center, complete with <big>3D Secure 2.0</big> mobile and desktop compatibility.</p>
						<p>Enjoy real-time confirmation and multiple simultaneous payment methods.</p>
					</span>
				</div>
				
				<div class="flex justify-start">
					<div class="relative max-md:ml-[-2.5rem]">
						<img :src="backgroundGraphics" alt="" class="w-[37.125rem] relative select-none z-10 animate-pulse" draggable="false" ref="waletImage">
						<img :src="backgroundPhone" alt="" class="w-[7.6875rem] absolute select-none top-8 left-10 z-10" draggable="false" ref="waletImage">
						<img :src="backgroundMonitor" alt="" class="w-[24.3125rem] absolute select-none top-[13.125rem] right-[-4.375rem] z-10" draggable="false" ref="waletImage">
					</div>	
				</div>

				<span class="text-white text-2xl font-normal text-[Arial] max-w-[29.4375rem] hidden max-md:block">
					<p>Access insights close to the source from your next-gen digital command center, complete with <big>3D Secure 2.0</big> mobile and desktop compatibility.</p>
					<p>Enjoy real-time confirmation and multiple simultaneous payment methods.</p>
				</span>

			</div>
		</div>

		<div class="px-[7vw] pl-0 py-[13vw] z-0 w-full max-md:pl-[7vw]">
			<div class="grid grid-cols-2  max-md:grid-cols-1">

				<div class="hidden flex-col gap-0 max-md:flex">
					<h1 class="text-[5.625rem] font-mont font-bold leading-normal text-transparent bg-clip-text bg-gradient-casheer-invoice-text-center">Optimised </h1>
					<span class="text-white text-4xl font-normal leading-tight font-[Arial]">for mobile & desktop</span>
				</div>

				<div class="flex justify-start">
					<div class="relative max-md:ml-[-7vw]">
						<img :src="backgroundHend" alt="" class="w-[42.0625rem] select-none left-0" draggable="false">
					</div>	
				</div>


				<div class="flex flex-col gap-20">
					<div class="flex flex-col gap-16">
						<div class="flex flex-col gap-0 max-md:hidden">
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

		<div class="px-[7vw] py-[13vw] z-0 w-full">
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

<template>
	<div class="w-full bg-white relative overflow-hidden min-h-screen flex items-center justify-center">
		<img :src="background" alt="" class="absolute w-full h-full z-0 max-md:w-[300%] max-md:max-w-none" draggable="false">

		<div class="px-[7vw] py-[10vw]">
			<div class="flex flex-col items-center">
				<div class="flex flex-col z-10">
					<span class="font-mont text-center text-5xl font-bold text-black max-md:text-white max-md:translate-y-[-8vh]">
						Casheer makes currency payments instant.
					</span>
					<span class="font-mont text-center font-bold text-[9.1875rem] text-black">
						Always.
					</span>
				</div>

				<span class="text-black text-[Arial] text-2xl font-normal text-center max-w-[40rem] z-10 max-md:font-bold max-md:translate-y-[10vh]">
					Casheer merchant solutions and payment services work in multiple international currencies. 
					Expect rapid transaction clearances with global & multilingual instruments.
				</span>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import background from "@/Assets/Images/casheer_background2.png";
</script>

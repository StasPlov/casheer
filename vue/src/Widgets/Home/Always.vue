<template>
	<div class="flex flex-col w-full bg-white relative justify-center items-center overflow-hidden">
		<img :src="background" alt="" class="w-full" draggable="false">

		<div class="absolute px-[7vw] flex flex-col z-0 items-center mt-[10.625rem]">
			<div class="flex flex-col">
				<span class="font-mont text-center text-5xl font-bold text-black">
					Casheer makes currency payments instant.
				</span>
				<span class="font-mont text-center font-bold text-[9.1875rem] text-black">
					Always.
				</span>
			</div>

			<span class="text-black text-[Arial] text-2xl font-normal text-center max-w-[40rem]">
				Casheer merchant solutions and payment services work in multiple international currencies. 
				Expect rapid transaction clearances with global & multilingual instruments.
			</span>
		</div>
	</div>
</template>

<script setup lang="ts">
import background from "@/Assets/Images/casheer_background2.png";
</script>

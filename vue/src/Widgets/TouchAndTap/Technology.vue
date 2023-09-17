<template>
	<div class="bg-[var(--color-black1)] relative overflow-hidden">
		<div class="flex max-md:flex-col-reverse">
			<img :src="background" alt="" class="w-full select-none -z-0" draggable="false">

			<div class="flex items-center justify-center absolute right-[7vw] top-28 max-md:top-0 max-md:relative max-md:right-0 max-md:justify-start max-md:px-[7vw] max-md:py-[2vw]">
				<div class="flex flex-col gap-4">
					<span class="text-white text-5xl font-mont font-bold leading-tight text-right max-md:text-start">
						<p>
							<big>Connect securely</big> 
							<br>with the world‘s 
							<br> <font class="text-[var(--color-arctic1)]">MAJOR PAYMENT CARDS</font> 
							<br>cost-effective & 
							<br>convenient
						</p>
					</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import background from "@/Assets/Images/casheer touch & tap image.png";
</script>

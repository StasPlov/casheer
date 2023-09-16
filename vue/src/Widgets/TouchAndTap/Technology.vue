<template>
	<div class="flex flex-col bg-[var(--color-black1)] relative overflow-hidden">
		<img :src="background" alt="" class="w-full select-none -z-0" draggable="false">

		<div class="flex items-center justify-center absolute right-[7vw] top-28">
			<div class="flex flex-col gap-4">
				<span class="text-white text-5xl font-mont font-bold leading-tight text-right">
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
</template>

<script setup lang="ts">
import background from "@/Assets/Images/casheer touch & tap image.png";
</script>

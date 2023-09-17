<template>
	<!-- <div class="flex flex-col bg-[var(--color-black1)] relative overflow-hidden">
		<img :src="background" alt="" class="w-full select-none -z-0" draggable="false">

		<div class="flex items-center justify-center absolute left-[7vw] top-28">
			<div class="flex flex-col gap-4">
				<span class="text-white text-6xl font-mont font-bold leading-tight">Merchant solutions <br>with the brains<br> <span class="text-[var(--color-blue1)] font-black uppercase">designed to facilitate</span> <br>your modern business</span>
				<span class="text-white text-xl font-[Arial] font-semibold max-w-[25rem]">Process payments with confidence, knowhow, and in delivering a better tomorrow.</span>
			</div>
		</div>
	</div> -->

	<div class="bg-[var(--color-black1)] relative overflow-hidden">
		<div class="flex max-md:flex-col-reverse">
			<div class="bg-white hidden max-md:flex px-[7vw] py-[10vw] pb-0">
				<span class="text-[var(--color-black1)] text-xl font-[Arial] font-semibold">
					<p>Process payments with confidence, knowhow, and in delivering a better tomorrow.</p>
				</span>
			</div>

			<img :src="background" alt="" class="w-full select-none -z-0" draggable="false">

			<div class="flex items-center justify-center absolute left-[7vw] top-28 max-md:top-0 max-md:relative max-md:left-0 max-md:justify-start max-md:px-[7vw] max-md:py-[2vw]">
				<div class="flex flex-col gap-4">
					<span class="text-white text-5xl font-mont font-bold leading-tight text-left max-md:text-start">
						<p>
							Merchant solutions <br>with the brains<br> <span class="text-[var(--color-blue1)] font-black uppercase">designed to facilitate</span> <br>your modern business
						</p>
					</span>

					<span class="text-white text-xl font-[Arial] font-semibold max-w-[25rem] max-md:hidden">
						<p>Process payments with confidence, knowhow, and in delivering a better tomorrow.</p>
					</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import background from "@/Assets/Images/casheer image.png";
</script>

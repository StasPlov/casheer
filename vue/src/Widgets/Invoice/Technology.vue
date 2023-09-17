<template>
	<div class="bg-[var(--color-black1)] relative overflow-hidden">
		<div class="flex max-md:flex-col-reverse">
			<div class="bg-white hidden max-md:flex px-[7vw] py-[10vw] pb-0">
				<span class="text-[var(--color-black1)] text-xl font-[Arial] font-semibold">
					<p>Collect and compile global B2B payments with simplicity and instant reporting thanks to the most advanced merchant solution of its class.</p>
				</span>
			</div>

			<img :src="background" alt="" class="w-full select-none -z-0" draggable="false">

			<div class="flex items-center justify-center absolute right-[7vw] top-28 max-md:top-0 max-md:relative max-md:right-0 max-md:justify-start max-md:px-[7vw] max-md:py-[2vw]">
				<div class="flex flex-col gap-4">
					<span class="text-white text-5xl font-mont font-bold leading-tight text-left max-md:text-start">
						<p>
							Technology that brings <br> <span class="text-[var(--color-violet1)] font-black uppercase">your customers</span> <br>closer than ever
						</p>
					</span>

					<span class="text-white text-xl font-[Arial] font-semibold max-w-[25rem] max-md:hidden">
						<p>Collect and compile global B2B payments with simplicity and instant reporting thanks to the most advanced merchant solution of its class.</p>
					</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import background from "@/Assets/Images/casheer image 7.png";
</script>

<template>
	<!-- <div class="bg-[var(--color-black1)] relative overflow-hidden">
		<div class="flex max-md:flex-col-reverse">
			<img :src="background" alt="" class="w-full select-none -z-0" draggable="false">

			<div class="flex items-center justify-center absolute left-[7vw] top-28 max-md:top-0 max-md:relative max-md:right-0 max-md:justify-start max-md:px-[7vw] max-md:py-[2vw]">
				<div class="flex flex-col gap-4">
					<span class="text-white text-5xl font-mont font-bold leading-tight text-left max-md:text-start">
						<p>
							<big>Open finance & control</big>
							<br><font class="text-[var(--color-green1)] uppercase">24/7 complete access</font> 
							<br>One-stop funding solution
						</p>
					</span>
					<span class="text-white text-xl font-[Arial] font-semibold max-w-[25rem]">
						<p>Fund, transfer, and accept payments with an intuitive financial toolkit at your disposal. <br>
							Keep Casheer Cards in one place, and execute transactions anywhere in the world, at any time, virtually or face-to-face.
						</p>
					</span>
				</div>
			</div>
		</div>
	</div> -->


	<div class="bg-[var(--color-black1)] relative overflow-hidden">
		<div class="flex max-md:flex-col-reverse">
			<div class="bg-white hidden max-md:flex px-[7vw] py-[10vw] pb-0">
				<span class="text-[var(--color-black1)] text-xl font-[Arial] font-semibold">
					<p>Fund, transfer, and accept payments with an intuitive financial toolkit at your disposal. <br>
						Keep Casheer Cards in one place, and execute transactions anywhere in the world, at any time, virtually or face-to-face.
					</p>
				</span>
			</div>

			<img :src="background" alt="" class="w-full select-none -z-0" draggable="false">

			<div class="flex items-center justify-center absolute left-[7vw] top-28 max-md:top-0 max-md:relative max-md:left-0 max-md:justify-start max-md:px-[7vw] max-md:py-[2vw]">
				<div class="flex flex-col gap-4">
					<span class="text-white text-5xl font-mont font-bold leading-tight text-left max-md:text-start">
						<p>
							<big>Open finance & control</big>
							<br><font class="text-[var(--color-green1)] uppercase">24/7 complete access</font> 
							<br>One-stop funding solution
						</p>
					</span>

					<span class="text-white text-xl font-[Arial] font-semibold max-w-[25rem] max-md:hidden">
						<p>Fund, transfer, and accept payments with an intuitive financial toolkit at your disposal. <br>
							Keep Casheer Cards in one place, and execute transactions anywhere in the world, at any time, virtually or face-to-face.
						</p>
					</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import background from "@/Assets/Images/casheer wallet image.png";
</script>

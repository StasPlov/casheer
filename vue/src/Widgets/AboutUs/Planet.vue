<template>
	<div class="flex items-center justify-around bg-[var(--color-black1)] relative overflow-hidden max-phoneX:flex-col ">
		<img :src="planetGif" alt="" height="618" width="618">
		
		<div class="flex flex-col gap-10 z-10 max-phoneX:px-[7vw]">
			<h2 class="text-white text-5xl font-bold font-mont max-phoneX:text-start leading-tight">A World You <br>Deserve to Experience</h2>

			<span class="text-white text-2xl font-normal font-[Arial] max-w-[33.8125rem] max-phoneX:text-start">
				<p>We’re the ecosystem where businesses and customers alike grow and engage digital audiences with confidence and ease.</p>
				<p>Enjoy access to powerful financial instruments that are more simplified, convenient, and personalised than ever before.</p>
			</span>
		</div>
	</div>
</template>

<script setup lang="ts">
import planetGif from "@/Assets/Images/Planet/planet.gif";
import rocketSvg from "@/Assets/Images/Planet/rocket.svg";
</script>

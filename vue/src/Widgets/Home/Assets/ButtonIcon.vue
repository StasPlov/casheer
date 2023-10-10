<template>
  <!-- <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
		<circle cx="20" cy="20" r="17.5" stroke="url(#paint0_angular_378_233)" stroke-width="5"/>
		<circle cx="20.5" cy="37.5" r="2.5" :fill="colorCode"/>
		<path d="M17 26.8633L23 19.8365L17 12.8097" stroke="white" stroke-width="2.89231" stroke-linecap="round"/>
		<defs>
			<radialGradient id="paint0_angular_378_233" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(20 20) rotate(90) scale(20)">
			<stop :stop-color="colorCode"/>
			<stop offset="1" :stop-color="colorCode" stop-opacity="0.1"/>
			</radialGradient>
		</defs>
	</svg> -->

	<div class="percent">
		<div class="percent__wrapper">
			<svg xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 10 18" fill="none" class="absolute w-[0.625rem]">
				<path d="M2 15.8633L8 8.8365L2 1.80971" stroke="white" stroke-width="2.89231" stroke-linecap="round"/>
			</svg>

			<svg viewBox="0 0 150 150" class="rotate-[99deg]">
				<clipPath id="text-mask">
					<circle cx="70" cy="70" r="60"></circle>
				</clipPath>

				<slot name="circle-center"></slot>

				<circle cx="70" cy="70" r="60" ></circle>
				<circle cx="70" cy="70" r="60" :style="`stroke-dashoffset: calc(440 - (440 * ${percent}) / 100); --color-svg-circle-button: ${colorCode};`"></circle>
			</svg>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

const props = defineProps<{
  color?: string;
}>();

const colorCode = computed(() => props?.color || "#18FE6A");
const percent = ref(80);
</script>

<style scoped>
.percent {
	align-self: center;
}

.percent__wrapper {
	align-items: center;
	display: flex;
	justify-content: center;
	position: relative;
	width: 3.375rem;
	height: 3.8125rem;
}

svg {
	cursor: pointer;
}

svg clipPath circle {
	width: 100%;
	height: 100%;
	fill: none;
	stroke: #e9e9e9;
	stroke-width: 16;
	stroke-linecap: round;
	transform: translate(5px, 5px);
}
svg circle {
	width: 100%;
	height: 100%;
	fill: none;
	stroke: #e9e9e9;
	stroke-width: 16;
	stroke-linecap: round;
	transform: translate(5px, 5px);

	stroke-dasharray: 440;
	stroke-dashoffset: 440;
	stroke: var(--color-svg-circle-button); /* colof for style var */
	transition-duration: 500ms;
}

svg circle:first-child {
   width: 100%;
	height: 100%;
	fill: none;
	stroke: #e9e9e9;
	stroke-width: 16;
	stroke-linecap: round;
	transform: translate(5px, 5px);
}
</style>
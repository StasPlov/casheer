<template>
	<div>
		<component :is="sliderTag" :class="sliderClass" ref="slider" class="flex overflow-hidden overflow-x-auto slider_ py-3 px-[7vw]"
			@mousedown="mousedown"
			@mouseleave="mouseleave"
			@mousemove="mousemove"
			@mouseup="mouseup"
		>
			<slot>Нет элементов</slot>
		</component>
	</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const props = defineProps({
	/**	
	 * @description HTML тег слайдера
	 */
	sliderTag: {
		type: String,
		default: 'div',
		require: false,
	},
	/**	
	 * @description CSS Классы слайдера
	 */
	sliderClass: {
		type: String,
		default: '',
		require: false,
	}
});

const slider = ref(null);
let isDown = ref(false);
let startX = ref(0);
let scrollLeft = ref(0);
let walk = ref(0);

function mousedown(e: MouseEvent) {
	isDown.value = true;
	slider.value.classList.add('active');
	startX.value = e.pageX - slider.value.offsetLeft;
	scrollLeft.value = slider.value.scrollLeft;

	if(walk.value > 0 && isDown.value) {
		return;
		}

	const target = (e.target as HTMLElement);
	if(Array.from(slider.value.children).find((i: HTMLElement) => i === target)) {
		target.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
	}
}

function mouseleave(e: MouseEvent) {
	isDown.value = false;
	slider.value.classList.remove('active');
}

function mouseup(e: MouseEvent) {
	isDown.value = false;
	slider.value.classList.remove('active');
}

function mousemove(e: MouseEvent) {
	if(!isDown.value) {
		return;
	}

	e.preventDefault();
	const x = e.pageX - slider.value.offsetLeft;
	walk.value = (x - startX.value) * 1; //scroll-fast
	slider.value.scrollLeft = scrollLeft.value - walk.value;
	console.log(walk.value);
}
</script>

<style>
.slider_::-webkit-scrollbar {
	display: none;
}
.slider_ div {
	min-width: max-content;
}
</style>
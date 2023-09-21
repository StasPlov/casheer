<template>
	<div class="flex flex-col">
		<div @click="open" ref="parent">
			<slot name="text">text</slot>
		</div>
		
		<div ref="contentDropAnim">
			<slot name="content">content</slot>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import ItemInterface from "./Type/ItemInterface";

import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const emit = defineEmits(['selectItem'])

interface PropsInterface {
	classIsOpen?: string;
	marginTop?: string;
	useOpenClose: boolean;
	item: ItemInterface,
}

const props = withDefaults(defineProps<PropsInterface>(), {
	classIsOpen: '',
	marginTop: '0.5rem',
	useOpenClose: false,
	item: null,
});

const isOpen = ref(false);
const parent = ref(null);
const contentDropAnim = ref(null);

onMounted(() => {
	init();
});

watch(props, () => {
	init();
});

function open() {
	if(props.useOpenClose) {
		isOpen.value = !isOpen.value;
		
		if(isOpen.value) {
			animateContentDrop();
		} else {
			animateContentDropClose();
		}
		emit('selectItem', props.item);
		return;
	}

	if(isOpen.value) {
		return;
	}

	isOpen.value = true;
	animateContentDrop();
	emit('selectItem', props.item);
}

function init() {
	isOpen.value = props.item.isActive;
	if(!isOpen.value) {
		animateContentDropClose();
	}
	const childNodes = parent.value.childNodes;

	if(props.classIsOpen.length) {
		childNodes.forEach((child: any) => {
			if (child.nodeType === 1 && isOpen.value) {
				const classStr = props.classIsOpen.split(' ');
				classStr.forEach((cls:string) => child.classList.add(cls));
			}
			if (child.nodeType === 1 && !isOpen.value) {
				const classStr = props.classIsOpen.split(' ');
				classStr.forEach((cls:string) => child.classList.remove(cls));
			}
		});
	}
}

function animateContentDropClose() {
	gsap.to(
		contentDropAnim.value,
		{
			opacity: 0,
			autoAlpha: 1,
			ease: 'power4.out',
			duration: 1,
			height: 0,
			marginTop: 0
			/* opacity: 1,
			autoAlpha: 1,
			delay: 0.5,
			duration: 3,
			scale: 1,
			ease: 'power4.out',
			scrollTrigger: {
				trigger: phoneImage.value,
				start: 'top 50%',
				end: 'bottom bottom',
				toggleActions: "play none none reset",
			}, */
		}
	);
}

function animateContentDrop() {
	gsap.to(
		contentDropAnim.value,
		{
			opacity: 1,
			ease: 'power4.out',
			height: 'auto',
			marginTop: props.marginTop
			/* opacity: 1,
			autoAlpha: 1,
			delay: 0.5,
			duration: 3,
			scale: 1,
			ease: 'power4.out',
			scrollTrigger: {
				trigger: phoneImage.value,
				start: 'top 50%',
				end: 'bottom bottom',
				toggleActions: "play none none reset",
			}, */
		}
	);
}
</script>
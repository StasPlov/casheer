<template>
	<div class="bg-[var(--color-black1)] z-10">
		<div class="px-[8.1rem] py-[5.4rem] bg-white rounded-b-[2.5rem] max-phoneX:py-[3.25rem] max-phoneX:px-[1.125rem]">
			<ul class="grid grid-cols-[repeat(2,_auto)] justify-around gap-14 gap-x-32 max-phoneX:grid-cols-[repeat(1,_auto)]">
				<li v-for="item in list" :key="item" class="flex gap-11 items-center" ref="itemsListAnim">
					<img v-if="item.image" :src="item.image.url" alt="" class="w-12 select-none" draggable="false">
					<span class="text-black text-3xl font-normal font-[Arial] max-w-[23.75rem]" v-html="item.description"></span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watchEffect } from "vue";
import InfoInterface from "./Type/InfoInterface";

import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const itemsListAnim = ref([]);

const props = defineProps<{
	list: Array<InfoInterface>
}>();

const list = computed<typeof props.list>(() => props.list);

watchEffect(() => {
	animateItemList();
}, { flush: "post" });

function animateItemList() {
	gsap.utils.toArray<any>(itemsListAnim.value).forEach((element, i) => {
		gsap.fromTo(element, {
			opacity: 0,
			y: '20%',
		},{
			opacity: 1,
			autoAlpha: 1,
			delay: i * 0.25,
			duration: 2,
			y: 0,
			ease: 'power4.out',
			scrollTrigger: {
				trigger: element,
				start: 'top 100%',
				end: 'bottom bottom',
				toggleActions: "play none none reset",
			},
		});
	});
}
</script>

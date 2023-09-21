<template>
	<div class="bg-[var(--color-black1)]">
		<div class="px-[9vw] py-[6vw] bgf rounded-b-[2.5rem] max-phoneX:py-[14vw]">
			<div class="flex flex-col gap-24">
				<h2 class="text-white text-4xl font-mont font-bold text-center leading-tight" v-html="title"></h2>

				<ul class="grid grid-cols-[repeat(2,_auto)] justify-around gap-14 gap-x-32 max-md:grid-cols-[repeat(1,_auto)]">
					<li v-for="item in list" :key="item" ref="itemsListAnim" class="flex gap-11 items-center">
						<img v-if="item.image" :src="item.image.url" alt="" class="w-12">
						<span class="text-white text-3xl font-normal font-[Arial] max-w-[23.75rem]" v-html="item.description"></span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watchEffect } from "vue";
import InfoInterface from "./Type/InfoInterface";

import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const props = defineProps<{
	title: string;
	list: Array<InfoInterface>;
}>();

const list = computed<typeof props.list>(() => props.list);
const itemsListAnim = ref([]);

watchEffect(() => {
	animateItemList();
}, { flush: "post" });

function animateItemList() {
	gsap.utils.toArray<any>(itemsListAnim.value).forEach((element, i) => {
		gsap.fromTo(element, {
			opacity: 0,
			x: '-50%',
		},{
			opacity: 1,
			autoAlpha: 1,
			delay: i * 0.25,
			duration: 2,
			x: '0',
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

<style scoped>
.bgf {
	background: linear-gradient(145deg, var(--color-arctic1) -1.21%, rgba(47, 128, 237, 0.00) 100%);
}
</style>

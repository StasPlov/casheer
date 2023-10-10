<template>
	<div class="w-full bg-[var(--color-black1)] flex items-center relative">
		<img v-if="background" :src="background.url" alt="" class="top-[11rem] absolute w-full left-0 animate-pulse select-none max-phoneX:top-auto max-phoneX:bottom-[-16.5rem] max-phoneX:left-[-11.875rem] max-phoneX:min-w-[200%] max-phoneX:object-contain z-10" draggable="false">
		
		<div class="grid grid-cols-2 gap-10 px-[8.375rem] py-[13.5rem] pt-[4.5rem] pr-0 rtl:pr-[6.3rem] rtl:pl-0 w-full max-phoneX:grid-cols-1 max-phoneX:pr-[6.3rem] max-phoneX:pb-[27rem]">
			<div class="flex flex-col justify-center gap-12 z-10 max-phoneX:order-1">
				<div class="flex flex-col gap-9">
					<h1 class="font-mont text-white text-7xl font-bold" v-html="title"></h1>

					<div class="text-5xl max-phoneX:text-3xl">
						<span class="text-white text-4xl font-normal leading-tight font-[Arial]" v-html="description"></span>
					</div>
				</div>

				<div class="flex gap-10 items-center mb-9">
					<img v-if="logo" :src="logo.url" alt="" class="select-none" draggable="false">
					
					<a :href="button.link?.url ?? ''" v-if="button && button?.is_active">
						<Button class="!bg-transparent btn relative hover:scale-105 duration-500 !px-12 !py-4">
							<span class="text-white text-base font-bold font-[Arial]">{{ button.text }}</span>
						</Button>
					</a>
				</div>
			</div>

			<div class="flex justify-center z-10">
				<div class="relative top-[-3.125rem] max-phoneX:right-[-4.375rem]">
					<img v-if="image" :src="image.url"  alt="" class=" w-[16.5rem] select-none" draggable="false" ref="waletImage">
					<img v-if="imageTwo" :src="imageTwo.url" alt="" class="absolute left-[-14.5rem] top-[23.75rem] max-w-none w-[25.625rem] select-none" draggable="false" ref="waletImage2">
				</div>
			</div>
		</div>

	</div>
</template>

<script setup lang="ts">
import Button from "@/Ui/Button.vue";

import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { computed, nextTick, onMounted, ref, watchEffect } from "vue";
import { useStore } from "vuex";
import { RootStateInterface } from "../../Store";
import ImageInterface from "../../Entity/ImageInterface";
import ButtonInterface from "../../Entity/ButtonInterface";
import PageDataStateInterface from "../../Store/Modules/PageData/StateInterface";

gsap.registerPlugin(ScrollTrigger);
const waletImage = ref(null);
const waletImage2 = ref(null);

const store = useStore<RootStateInterface>();
const pageData = computed<PageDataStateInterface>(() => store.state.pageData);
const header = computed(() => pageData.value.data?.header);

const background = computed<ImageInterface>(() => header.value?.background);
const button = computed<ButtonInterface>(() => header.value?.button);
const description = computed<string>(() => header.value?.description);
const title = computed<string>(() => header.value?.title);
const logo = computed<ImageInterface>(() => header.value?.logo);
const image = computed<ImageInterface>(() => header.value?.image);
const imageTwo = computed<ImageInterface>(() => header.value?.image_two);

watchEffect(() => {
	animateWalet();
	animateWalet2();
}, { flush: "post" });

function animateWalet() {
	gsap.fromTo(
		waletImage.value,
		{
			opacity: 0,
			autoAlpha: 0,
			x: '200px',
		},
		{
			opacity: 1,
			autoAlpha: 1,
			duration: 5,
			x: '0px',
			ease: 'power4.out',
			scrollTrigger: {
				trigger: waletImage.value,
				start: 'top 100%',
				end: 'bottom bottom',
				toggleActions: "play none none reset",
			},
		}
	);
}

function animateWalet2() {
	gsap.fromTo(
		waletImage2.value,
		{
			opacity: 0,
			autoAlpha: 0,
			y: '100px',
		},
		{
			opacity: 1,
			autoAlpha: 1,
			delay: 1.5,
			duration: 4,
			y: '0px',
			ease: 'power4.out',
			scrollTrigger: {
				trigger: waletImage2.value,
				start: 'top 80%',
				end: 'bottom bottom',
				toggleActions: "play none none reset",
			},
		}
	);
}
</script>

<style scoped>
.btn::before {
	content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50px;
    border: 5px solid transparent;
    background: radial-gradient(var(--color-arctic1), transparent) border-box;
    mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
}
</style>
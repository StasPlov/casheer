<template>
	<div class="w-full bg-[var(--color-black1)] flex items-center relative overflow-hidden">
		<img v-if="background" :src="background.url" alt="" class="absolute w-full left-0 animate-pulse select-none max-md:bottom-[-2.5rem] max-md:left-[-11.875rem] max-md:min-w-[200%] max-md:object-contain" draggable="false">

		<div class="grid grid-cols-2 gap-10 px-[7vw] py-[15vw] pt-[5vw] pr-0 w-full max-md:grid-cols-1 max-md:pr-[7vw] max-md:pb-[30vw]">

			<div class="flex flex-col justify-center gap-28 z-10 max-md:order-1">
				<div class="flex flex-col gap-9">
					<h1 class="font-mont text-white text-7xl font-bold" v-html="title"></h1>

					<div class="text-5xl max-phoneX:text-3xl">
						<span class="text-white text-4xl font-normal leading-tight font-[Arial]" v-html="description"></span>
					</div>
				</div>

				<div class="flex gap-10 items-center mb-9">
					<img v-if="logo" :src="logo.url" alt="" class="select-none" draggable="false">

					<a :href="button.link" v-if="button && button?.is_active">
						<Button class="border-[var(--color-violet1)] border-solid border-[5px] bg-transparent !rounded-[6.25rem] !px-16 !py-1">
							<span class="text-white text-base font-bold font-[Arial]">{{ button.text }}</span>
						</Button>
					</a>
				</div>
			</div>

			<div class="flex justify-end z-10">
				<div class="relative max-md:hidden">
					<img v-if="image" :src="image.url" alt="" class="w-[40rem] select-none" draggable="false" ref="waletImage">
					<img v-if="imageTwo" :src="imageTwo.url" alt="" class="w-[15.4375rem] absolute left-[-0.875rem] top-[10.25rem] select-none" draggable="false" ref="waletImage2">
				</div>

				<div class="relative hidden max-md:block max-md:max-h-[41.5rem]">
					<img v-if="imageMobile" :src="imageMobile.url" alt="" class="w-[40rem] select-none max-md:mt-[-9.25rem] max-md:ml-[-7vw] max-md:min-w-[130%]" draggable="false" ref="waletImage">
					<img v-if="imageTwo" :src="imageTwo.url" alt="" class="w-[15.4375rem] absolute left-[20.125rem] top-[16.25rem] select-none" draggable="false" ref="waletImage2">
				</div>	
			</div>

		</div>

	</div>
</template>

<script setup lang="ts">
import Button from "@/Ui/Button.vue";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
import { RootStateInterface } from "../../Store";
import PageDataStateInterface from "../../Store/Modules/PageData/StateInterface";
import ImageInterface from "../../Entity/ImageInterface";
import ButtonInterface from "../../Entity/ButtonInterface";

gsap.registerPlugin(ScrollTrigger);

const waletImage = ref(null);
const waletImage2 = ref(null);

const store = useStore<RootStateInterface>();
const pageData = computed<PageDataStateInterface>(() => store.state.pageData);
const data = computed(() => pageData.value.data?.header);

const background = computed<ImageInterface>(() => data.value?.background);
const button = computed<ButtonInterface>(() => data.value?.button);
const description = computed<string>(() => data.value?.description);
const title = computed<string>(() => data.value?.title);
const logo = computed<ImageInterface>(() => data.value?.logo);
const image = computed<ImageInterface>(() => data.value?.image);
const imageMobile = computed<ImageInterface>(() => data.value?.image_mobile);
const imageTwo = computed<ImageInterface>(() => data.value?.image_two);

onMounted(() => {
	animateWalet();
	animateWalet2();
});

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

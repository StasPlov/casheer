<template>
	<div class="w-full bg-[var(--color-black1)] flex items-center relative">
		<img v-if="background" :src="background.url" alt="" class="absolute w-full left-0 top-[3.3125rem] animate-pulse select-none max-phoneX:bottom-[-16.5rem] max-phoneX:left-[-11.875rem] max-phoneX:min-w-[200%] max-phoneX:object-contain z-10" draggable="false">
		
		<div class="grid grid-cols-[repeat(2,_auto)] gap-10 px-[8.375rem] py-[13.5rem] pt-[4.5rem] pr-0 rtl:pr-[6.3rem] rtl:pl-0 w-full max-phoneX:grid-cols-1 max-phoneX:pr-[6.3rem] max-phoneX:pb-[27rem]">

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

			<div class="flex justify-end z-10">
				<div class="relative h-full max-phoneX:hidden">
					<img v-if="image" :src="image.url" alt="" class=" select-none w-[32.875rem]" draggable="false" ref="waletImage">
					<img v-if="imageTwo" :src="imageTwo.url" alt="" class="absolute left-[-6.875rem] w-[14.375rem] max-phoneX:left-[-1.875rem] rtl:left-auto rtl:right-[-6.875rem] top-[13.875rem] select-none" draggable="false" ref="waletImage2">
				</div>

				<div class="relative h-full hidden max-phoneX:block">
					<img v-if="imageMobile" :src="imageMobile.url" alt="" class=" relative select-none" draggable="false" ref="waletImage">
					<img v-if="imageTwo" :src="imageTwo.url" alt="" class="w-[11.625rem] absolute left-[19.5rem] rtl:left-auto rtl:right-[19.5rem] top-[11.875rem] select-none" draggable="false">
				</div>	
			</div>
			
		</div>

	</div>
</template>

<script setup lang="ts">
import Button from "@/Ui/Button.vue";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { computed, onMounted, ref, watchEffect } from "vue";
import { useStore } from "vuex";
import ImageInterface from "../../Entity/ImageInterface";
import ButtonInterface from "../../Entity/ButtonInterface";
import { RootStateInterface } from "../../Store";
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
const imageMobile = computed<ImageInterface>(() => header.value?.image_mobile);
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
    background: radial-gradient(var(--color-blue1), transparent) border-box;
    mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
}
</style>
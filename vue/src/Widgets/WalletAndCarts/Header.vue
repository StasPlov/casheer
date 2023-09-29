<template>
	<div class="w-full bg-[var(--color-black1)] flex items-center relative">
		<img v-if="background" :src="background.url" alt="" class="absolute w-full left-0 animate-pulse select-none max-md:bottom-[-4.5rem] max-md:left-[-11.875rem] max-md:min-w-[200%] max-md:object-contain z-10" draggable="false">
		
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

					<a :href="button.link?.url ?? ''" v-if="button && button?.is_active">
						<Button class="border-[var(--color-green1)] border-solid border-[5px] bg-transparent !rounded-[6.25rem] !px-16 !py-1">
							<span class="text-white text-base font-bold font-[Arial]">{{ button.text }}</span>
						</Button>
					</a>
				</div>
			</div>

			<div class="flex justify-center z-10">
				<div class="relative h-full">
					<img v-if="image" :src="image.url" alt="" class="animation-levitate-one w-[28.25rem] select-none" draggable="false" ref="animElement">
				</div>
			</div>
			
		</div>

	</div>
</template>

<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { computed, onMounted, ref } from "vue";
import { RootStateInterface } from "../../Store";
import PageDataStateInterface from "../../Store/Modules/PageData/StateInterface";
import { useStore } from "vuex";
import ImageInterface from "../../Entity/ImageInterface";
import ButtonInterface from "../../Entity/ButtonInterface";

gsap.registerPlugin(ScrollTrigger);
const animElement = ref(null);

const store = useStore<RootStateInterface>();
const pageData = computed<PageDataStateInterface>(() => store.state.pageData);
const header = computed(() => pageData.value.data?.header);

const background = computed<ImageInterface>(() => header.value?.background);
const button = computed<ButtonInterface>(() => header.value?.button);
const description = computed<string>(() => header.value?.description);
const title = computed<string>(() => header.value?.title);
const logo = computed<ImageInterface>(() => header.value?.logo);
const image = computed<ImageInterface>(() => header.value?.image);

onMounted(() => {
	animateIn();
});

function animateIn() {
	gsap.fromTo(
		animElement.value,
		{
			opacity: 0,
			autoAlpha: 0,
			y: '100px',
		},
		{
			opacity: 1,
			autoAlpha: 1,
			duration: 4,
			y: '0px',
			ease: 'power4.out',
			scrollTrigger: {
				trigger: animElement.value,
				start: 'top 80%',
				end: 'bottom bottom',
				toggleActions: "play none none reset",
			},
		}
	);
}
</script>

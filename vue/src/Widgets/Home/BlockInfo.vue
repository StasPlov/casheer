<template>
	<div class="w-full bg-[var(--color-black1)] relative justify-center items-start">
		<div class="flex py-[5vw] max-phoneX:flex-col max-phoneX:gap-8" :class="{ 'flex-row-reverse':isReverse }">

			<div class="flex-[2] flex items-center max-phoneX:block" :class="{ 'justify-center text-center':!image }">
				<div class="flex flex-col gap-8 px-[7vw]">
					<h2 class="text-8xl font-semibold text-transparent bg-clip-text bg-gradient-casheer-title-to-b font-mont" v-html="title"></h2>

					<span class="text-xl font-normal text-white max-w-[27.3125rem] font-[Arial] max-phoneX:hidden" v-html="description"></span>
				</div>
			</div>

			<div class="flex-[3]" v-if="image">
				<img :src="image.url" alt="" class="w-full h-full select-none" draggable="false">
			</div>

			<!-- mobile -->
			<div class="hidden flex-col gap-8 px-[7vw] max-phoneX:flex">
				<span class="text-xl font-normal text-white max-w-[27.3125rem] font-[Arial]" v-html="description"></span>
			</div>
		</div>
	</div>
</template>


<script setup lang="ts">
import logo from "@/Assets/Images/logo.png";
import background from "@/Assets/Images/casheer_s1_background.png";
import backgroundMob from "@/Assets/Images/casheer_background_mobile.png";
import Button from "../../Ui/Button.vue";
import ImageInterface from "../../Entity/ImageInterface";

interface PropsInterface {
	image: ImageInterface;
	title: string;
	description: string;
	isReverse: boolean;
}

const props = withDefaults(defineProps<PropsInterface>(), {
	title: '',
	description: '',
	isReverse: false
});
</script>

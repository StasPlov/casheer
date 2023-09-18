<template>
	<div class="flex flex-col gap-[2em]">
		<div class="flex flex-col gap-[1em]">
			<img :src="image" alt="" v-if="image" class="object-cover w-full select-none" draggable="false">

			<div class="flex flex-col gap-[1.5em]">
				<h1 class="text-[2.25em] text-white font-mont font-bold leading-tight">{{ title }}</h1>

				<span class="text-[1.5em] text-white font-[Arial] font-normal leading-tight" v-html="description"> </span>
			</div>
		</div>

		<Button class="bg-transparent self-start p-0 gap-6">
			<span class="text-white text-3xl font-bold font-mont underline text-center">Read more</span>

			<div class="flex gap-0 animate-pulse">
				<img :src="icon1" alt="">
				<img :src="icon2" alt="">
			</div>
		</Button>
	</div>
</template>

<script setup lang="ts">
import Button from "@/Ui/Button.vue";
import { computed } from "vue";
import NewsInterface from "./Type/NewsInterface";

import icon1 from '@/Assets/Icons/Polygon 15.svg';
import icon2 from '@/Assets/Icons/Polygon 14.svg';

const props = defineProps<{
	item: NewsInterface
}>();

const image = computed<string>(() => props.item.image);
const title = computed<string>(() => props.item.title);
const link = computed<string>(() => props.item.link);
const description = computed<string>(() => props.item.description);

</script>
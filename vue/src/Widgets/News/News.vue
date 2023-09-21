<template>
	<div class="flex flex-col gap-[2em]" v-if="item">
		<div class="flex flex-col gap-[1em]">
			<img v-if="image" :src="image.url" alt="" class="object-cover w-full select-none" draggable="false">

			<div class="flex flex-col gap-[1.5em]">
				<h1 class="text-[2.25em] text-white font-mont font-bold leading-tight" v-html="post.post_title"></h1>
				<span class="text-[1.5em] text-white font-[Arial] font-normal leading-tight" v-html="post.post_excerpt"></span>
			</div>
		</div>

		<template v-if="button && link">
			<a :href="link" v-if="button.is_active">
				<Button class="bg-transparent self-start !p-0 gap-6">
					<span class="text-white text-3xl font-bold font-mont underline text-center">{{ button.text }}</span>
					<ArrowIcon></ArrowIcon>
				</Button>
			</a>
		</template>
	</div>
</template>

<script setup lang="ts">
import ArrowIcon from "./Assets/ArrowIcon.vue";
import Button from "@/Ui/Button.vue";
import { computed } from "vue";

import icon1 from '@/Assets/Icons/Polygon 15.svg';
import icon2 from '@/Assets/Icons/Polygon 14.svg';
import ImageInterface from "../../Entity/ImageInterface";
import ButtonInterface from "../../Entity/ButtonInterface";
import NewsPageDataInterface from "../../Entity/NewsPageDataInterface";

const props = defineProps<{
	item: NewsPageDataInterface;
}>();

const post = computed(() => props.item?.post);
const link = computed(() => props.item?.link);
const button = computed(() => props.item?.data?.button);
const image = computed(() => props.item?.data?.image);
</script>
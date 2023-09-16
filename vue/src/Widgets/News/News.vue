<template>
	<div class="flex flex-col gap-[1em]">
		<img :src="image" alt="" v-if="image" class="object-cover w-full select-none" draggable="false">

		<div class="flex flex-col gap-[1.5em]">
			<h1 class="text-[2.25em] text-white font-mont font-bold leading-tight">{{ title }}</h1>

			<span class="text-[1.5em] text-white font-[Arial] font-normal leading-tight" v-html="description"> </span>
		</div>
	</div>
</template>

<script setup lang="ts">
import Button from "@/Ui/Button.vue";
import { computed } from "vue";
import NewsInterface from "./Type/NewsInterface";

const props = defineProps<{
	item: NewsInterface
}>();

const image = computed<string>(() => props.item.image);
const title = computed<string>(() => props.item.title);
const link = computed<string>(() => props.item.link);
const description = computed<string>(() => props.item.description);

</script>
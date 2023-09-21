<template>
	<div class="flex flex-col bg-[var(--color-black1)] relative" v-if="image">
		<Light class="absolute"></Light>
		<!-- <Light :src="backgroundGradient" alt="" class="absolute left-0 top-0 z-10 select-none" draggable="false"> -->

		<div class="relative w-full flex text-center max-phoneX:flex-col">
			<img :src="image.url" alt="" class="w-full select-none -z-0" draggable="false">
		</div>
	</div>
</template>

<script setup lang="ts">
import ImageInterface from "../../Entity/ImageInterface";
import Light from "./Assets/Light.vue";

const props = defineProps<{
	image: ImageInterface
}>();
</script>

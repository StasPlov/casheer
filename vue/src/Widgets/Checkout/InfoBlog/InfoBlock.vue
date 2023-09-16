<template>
	<div class="block-g rounded-[1.6875rem] cursor-default">
		<div class="px-7 py-6 flex gap-8">
			<div class="flex flex-col gap-9">
				<h3 class="text-white text-2xl font-mont font-bold select-none">{{ title }}</h3>
				<span class="text-white text-xl font-[Arial] font-normal select-none">{{ description }}</span>
			</div>

			<div class="flex items-center" v-if="image">
				<img :src="image" alt="" class="max-w-[6.25rem] h-max select-none" draggable="false">
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import InfoBlockInterface from "./Type/InfoBlockInterface";

const props = defineProps<{
	title: string,
	description: string,
	image: string
}>();

</script>

<style scoped>
.block-g {
	background: linear-gradient(145deg, #5066F6 -1.21%, rgba(47, 128, 237, 0.00) 100%);
}
</style>

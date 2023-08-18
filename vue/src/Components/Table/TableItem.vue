<template>
	<div class="grid bg-white min-h-[5.625rem] px-4 py-4 rounded-2xl items-center transition cursor-pointer hover:bg-gray-50" :class="{ '!bg-[#6f4ff2] !text-white opacity-100':isActive }">
		<slot>Контент элемента</slot>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
	isActive: boolean
}>();
</script>
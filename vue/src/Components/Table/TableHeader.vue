<template>
	<div class="w-full bg-gray-50 text-gray-700 px-4 py-3 tracking-wide rounded-2xl">
		<div class="grid items-center" :class="class_">
			<slot>Контент хедера</slot>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
	class?: string
}>();

const class_ = ref(props.class);
</script>
<template>
	<div class="px-4 py-1 rounded-2xl bg-[#6097ea]">
		<span class="transition text-sm text-white" :class="subClass">{{ text }}</span>		
	</div>
</template>

<script setup lang="ts">
const props = defineProps<{
	text: string,
	subClass: string
}>();
</script>
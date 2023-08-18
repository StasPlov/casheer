<template>
	<div class="flex gap-2 items-center justify-center">
		<i v-if="icon" :class="icon" class="text-[1.1875rem] w-[1.1875rem] text-[#65646A] transition hover:text-[#6F4FF2] cursor-pointer"></i>
		<span v-if="text">{{ text }}</span>
	</div>
</template>

<script setup lang="ts">
const props = defineProps<{
	text: string,
	icon: string
}>();
</script>
<template>
	<div class="flex gap-3 py-2 px-3 w-full rounded-xl bg-white transition items-center">
		<slot name="content-before"></slot>
		<input class="text-base font-nunito focus-visible:outline-none w-full h-full bg-inherit" type="text" :placeholder="placeholder" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
		<slot name="content-after"></slot>
	</div>
</template>

<script setup lang="ts">
const props = defineProps<{
	placeholder?: string,
	modelValue: any
}>();
defineEmits(['update:modelValue']);
</script>
<template>
	<div class="flex gap-3 py-2 px-3 w-full rounded-xl bg-white transition items-center">
		<slot name="content-before"></slot>
		<input class="text-base font-nunito focus-visible:outline-none w-full h-full bg-inherit" :type="type" :placeholder="placeholder" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
		<slot name="content-after"></slot>
	</div>
</template>

<script setup lang="ts">
interface PropsInterface {
	placeholder?: string,
	type?: string,
	modelValue: any
}

const props = withDefaults(defineProps<PropsInterface>(), {
	placeholder: '',
	type: 'text'
});

defineEmits(['update:modelValue']);
</script>
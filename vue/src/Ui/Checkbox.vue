<template>
	<div class="text-xl transition cursor-pointer" :class="{ 'checkbox-active':isCheked }" @click.stop="isCheked = !modelValue">
		<i class="fa-regular fa-circle-check text-black" v-if="isCheked"></i>
		<i class="fa-regular fa-circle text-black" v-else></i>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const emit = defineEmits(['update:modelValue']);
const props = defineProps<{
	modelValue: boolean,
	isLock: boolean
}>();

let isCheked = computed({
	get() {
		return props.modelValue;
	},
	set(value: any) {
		if(props.isLock) {
			return;
		}
		
		emit('update:modelValue', value);
	}
});
</script>

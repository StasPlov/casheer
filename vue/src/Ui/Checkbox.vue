<template>
	<div class="text-xl transition cursor-pointer" :class="{ 'checkbox-active':isCheked }" @click.stop="isCheked = !value">
		<div class="min-w-[1.8125rem] w-[1.8125rem] min-h-[1.8125rem] h-[1.8125rem] border border-solid border-[var(--color-violet1)] rounded-md p-1" v-if="!isCheked"></div>

		<div class="min-w-[1.8125rem] w-[1.8125rem] min-h-[1.8125rem] h-[1.8125rem] border border-solid border-[var(--color-violet1)] rounded-md p-1 flex items-center justify-center" v-else>
			<div class="w-full h-full bg-[var(--color-violet1)] rounded-full"></div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed, ref, watch, watchEffect } from 'vue';

const emit = defineEmits(['update:modelValue']);

export interface UiChecboxInterface {
	modelValue: boolean,
	isLock?: boolean
}
const props = withDefaults(defineProps<UiChecboxInterface>(), {
	isLock: false,
});

const value = ref(props.modelValue);

let isCheked = computed({
	get() {
		return value.value;
	},
	set(value_: boolean) {
		if(props.isLock) {
			return;
		}
		
		value.value = value_;
	}
});

watchEffect(() => {
	emit('update:modelValue', value.value);
});
</script>

<template>
	<Button class="bg-[var(--color-blue1)] !py-1 gap-2 hover:brightness-[104%] rounded-r-3xl rounded-l-3xl relative" :class="[{ 'pr-4':useArrow }, { '!bg-[#6F4FF2]':isActive }]" @click="click">
		<div class="flex flex-row gap-2">
			<span class="font-sans font-semibold tracking-wide text-base">{{ text }}</span>
			<span class="font-sans font-semibold text-base text-[#263238] opacity-70" v-if="selectCount">{{ selectCount }}</span>
		</div>
		<div v-if="useArrow">
			<img :src="chevronDownIcon" alt="" class="h-4 filter invert">
		</div>
	</Button>
</template>

<script setup lang="ts">
import Button from '@/Ui/Button.vue';
/* icons */
import ChevronDownIcon from '@/Assets/Icons/chevronDown.svg';
import { ref } from 'vue';

interface Props {
	text: string,
	useArrow: boolean,
	selectCount: number
}

const props = withDefaults(defineProps<Props>(), {
	selectCount: 0,
	text: 'Фильтр',
	useArrow: false
});

let isActive = ref(false);

function click() {
	if(props.useArrow) {
		return;
	}

	isActive.value = !isActive.value;
}
</script>
<template>
	<Input class="h-12 text-[#263238] text-sm tracking-wide font-montserrat font-medium text-left" :placeholder="'Поиск тут'" v-model="value" @input="emit('update:modelValue', value)">
		<template #content-before>
			<img :src="SearchIcon" alt="" class="max-h-6">
		</template>
	</Input>
</template>

<script setup lang="ts">
import SearchIcon from '@/Assets/Icons/search.svg';
import Input from '@/Ui/Input.vue';
import { ref, Ref } from 'vue';

const emit = defineEmits(['update:modelValue']);

let value: string = ''; // use v-model="" or @update:modelValue event
</script>
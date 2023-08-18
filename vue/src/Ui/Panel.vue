<template>
	<div class="flex gap-6 bg-white p-5 rounded-[1.125rem] cursor-pointer transition hover:bg-slate-50" :class="{ 'min-w-[18.125rem]':useInfo }">
		<div class="flex items-center justify-center w-[3.4375rem] h-[3.4375rem] rounded-full" :class="iconClass">
			<slot name="icon"></slot>
		</div>

		<div class="flex flex-col justify-around" v-if="useInfo">
			<slot name="title">
				<span class="text-lg text-[#263238] font-semibold">{{ title }}</span>
			</slot>

			<slot name="description">
				<span class="text-sm text-[#68676E] font-normal">{{ description }}</span>
			</slot>
		</div>
	</div>
</template>

<script setup lang="ts">
interface Props {
	title?: string,
	description?: string,
	iconClass?: string,
	useInfo: boolean
}

const props = withDefaults(defineProps<Props>(), {
	title: '',
	description: '',
	iconClass: '',
	useInfo: true
})
</script>
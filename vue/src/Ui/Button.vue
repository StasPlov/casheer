<template>
	<button class="bg-[var(--color-violet1)] flex items-center justify-center p-5 pt-[0.625rem] pb-[0.625rem] rounded-xl text-white hover:filter hover:brightness-[115%] transition" 
		:class="[{ 
			'bg-opacity-100':(!isActive && !isLock)
		}, {
			'!bg-[var(--color-silver3)] !opacity-30 hover:!brightness-100':isLock
		}]">
		<slot>Кнопка</slot>
	</button>
</template>

<script setup lang="ts">
const props = defineProps<{
	isActive: boolean,
	isLock: boolean
}>();
</script>
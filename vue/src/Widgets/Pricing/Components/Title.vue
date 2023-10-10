<template>
	<div class="w-full">
        <div class="px-[8.375rem] flex flex-col gap-9 max-phoneX:px-[1.125rem]">
            <h2 class="text-[2.5rem] font-bold font-mont text-transparent bg-clip-text bg-gradient-casheer-pricing-to-r z-10 select-none" v-html="title"></h2>
            <span class="text-white text-4xl font-[Arial] font-normal z-10 select-none" v-html="description"></span>
        </div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps<{
    title: string;
    description: string
}>();
</script>
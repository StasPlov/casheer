<template>
	<div class="w-full">
        <div class="px-[7vw] flex flex-col gap-9">
            <h2 class="text-[2.5rem] font-bold font-mont text-transparent bg-clip-text bg-gradient-casheer-pricing-to-r" v-html="title"></h2>
            <span class="text-white text-4xl font-[Arial] font-normal" v-html="description"></span>
        </div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps<{
    title: string;
    description: string
}>();
</script>
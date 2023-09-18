<template>
	<div class="flex gap-5 items-center">
        <img :src="img" alt="" class="select-none min-w-[6.75rem] min-h-[6.75rem] rounded-full" draggable="false">
        
        <div class="flex flex-col gap-2 items-start">
            <span class="text-white text-3xl font-semibold font-[Arial] text-center">{{ title }}</span>
            <span class="text-white text-sm font-normal font-[Arial] text-center">{{ title }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import img from '@/Assets/Images/Team/casheer team.png';
import { ref } from 'vue';

const title = ref('Lorem Ipsum ');
const subTitle = ref('Lorem Ipsum ');
</script>

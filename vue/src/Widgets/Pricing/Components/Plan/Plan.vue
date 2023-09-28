<template>
	<div class="bg-white rounded-[2.5rem] z-10 scale-[0.8]">
        <div class="px-[4.25rem] py-[4.9375rem] flex flex-col gap-16">
            <div class="flex flex-col gap-5">
                <h2 class="text-[var(--color-black1)] text-4xl font-bold font-mont" v-html="item.title"></h2>
                <span class="text-[var(--color-black1)] text-2xl font-normal font-[Arial]" v-html="item.description"></span>
            </div>

            <span class="text-[var(--color-black1)] text-3xl font-mont" v-html="item.info"></span>

            <ul class="flex flex-col gap-4">
                <li v-for="item_ in item.list" :key="item_">
                    <div class="flex gap-3">
                        <CheckTryIcon v-if="item_.is_active"></CheckTryIcon>
                        <CheckNoneIcon v-else></CheckNoneIcon>

                        <span class="text-[var(--color-black1)] text-xl font-[Arial]" v-html="item_.description"></span>
                    </div>
                </li>
            </ul>
        </div>
	</div>
</template>

<script setup lang="ts">
import CheckNoneIcon from './Assets/CheckNoneIcon.vue';
import CheckTryIcon from './Assets/CheckTryIcon.vue';
import CheckInterface from './Type/CheckInterface';
import PlanInterface from './Type/PlanInterface';

const props = defineProps<{
    item: PlanInterface
}>();
</script>

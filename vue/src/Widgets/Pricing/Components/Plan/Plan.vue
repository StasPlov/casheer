<template>
	<div class="bg-white rounded-[2.5rem] z-10 text-center w-full">
        <div class="px-[3.25rem] py-[4.9375rem] pb-[2.9375rem] flex flex-col gap-12 rtl:[direction:rtl]">
            <div class="flex flex-col gap-5">
                <h2 class="text-[var(--color-black1)] text-4xl font-bold font-mont" v-html="item.title"></h2>
                <span class="text-[var(--color-black1)] text-2xl font-normal font-[Arial]" v-html="item.description"></span>
            </div>

            <span class="text-[var(--color-black1)] text-3xl font-mont" v-html="item.info"></span>

            <ul class="flex flex-col gap-2">
                <li v-for="item_ in item.list" :key="item_">
                    <div class="flex gap-3">
                        <CheckTryIcon v-if="item_.is_active" class="min-w-[1.875rem] min-h-[1.875rem] max-w-[1.875rem] max-h-[1.875rem]"></CheckTryIcon>
                        <CheckNoneIcon v-else class="min-w-[1.875rem] min-h-[1.875rem] max-w-[1.875rem] max-h-[1.875rem]"></CheckNoneIcon>

                        <span class="text-[var(--color-black1)] text-xl font-[Arial] text-start" v-html="item_.description"></span>
                    </div>
                </li>
            </ul>

            <template v-if="item.button">
                <Button class="!bg-transparent btn relative !py-4 hover:scale-105 duration-500 !px-20 self-center" v-if="!item.button.link && item.button.is_active">
                    <span class="text-black text-base font-[Arial] font-semibold">{{ item.button.text }}</span>
                </Button>

                <a :href="item.button?.link?.url" v-else-if="item.button.is_active">
                    <Button class="!bg-transparent btn relative !py-4 hover:scale-105 duration-500 !px-20 self-center">
                        <span class="text-black text-base font-[Arial] font-semibold">{{ item.button.text }}</span>
                    </Button>
                </a>
            </template>
        </div>
	</div>
</template>

<script setup lang="ts">
import Button from '@/Ui/Button.vue'
import CheckNoneIcon from './Assets/CheckNoneIcon.vue';
import CheckTryIcon from './Assets/CheckTryIcon.vue';
import CheckInterface from './Type/CheckInterface';
import PlanInterface from './Type/PlanInterface';

const props = defineProps<{
    item: PlanInterface
}>();
</script>

<style scoped>
.btn::before {
	content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50px;
    border: 5px solid transparent;
    background: radial-gradient(var(--color-blue1), transparent) border-box;
    mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
}
</style>

<template>
	<div class="relative">
        <div class="flex justify-between items-center gap-5 border-[3px] border-white !rounded-[6.25rem] !bg-transparent max-w-[48.125rem] py-2 pl-7 pr-[0.625rem] min-w-[12.5rem]">
            <span class="text-white text-xl font-[Arial] font-normal" v-if="selectItem">{{ selectItem.item.name }}</span>
            <span class="text-white/40 text-xl font-[Arial] font-normal" v-else>—</span>

            <Button class="!rounded-full h-10 w-10 !p-2 self-end bg-gradient-casheer-title-to-b" @click="isOpen = !isOpen">
                <ArrowIcon class="transition duration-500 rotate-90" :class="{ 'rotate-0':isOpen }"></ArrowIcon>
            </Button>
        </div>
        
        <Transition name="fade-top">
        <div class="absolute z-[51] px-5 py-3 bg-white rounded-2xl right-0 mt-3 w-full" v-if="isOpen" v-click-outside="clickOutside">
            <ul class="flex flex-col gap-3">
                <li v-for="item in list" :key="item" class="max-w-max transition duration-300 hover:scale-105" @click="selectedItem(item)">
                    <div class="flex gap-3">
                        <span class="text-[var(--color-black1)] text-xl font-normal font-[Arial] cursor-default">{{ item.item.name }}</span>
                    </div>
                </li>
            </ul>
        </div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
import vClickOutside from "@/Service/ClickOutside";
import ArrowIcon from "./Assets/ArrowIcon.vue";
import Button from "@/Ui/Button.vue";
import SelectInterface from './Type/SelectInterface';
import TaxonomyInterface from '@/Entity/TaxonomyInterface';
import { ref } from "vue";

const props = defineProps<{
    list?: Array<SelectInterface<TaxonomyInterface>>
}>();

let isOpen = ref(false);
let selectItem = ref<SelectInterface>(null);

function clickOutside() {
    isOpen.value = false;
}

function selectedItem(item: SelectInterface) {
    selectItem.value = item;
    clickOutside();
}
</script>
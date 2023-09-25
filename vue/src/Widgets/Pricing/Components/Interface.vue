<template>
	<div class="w-full">
        <div class="px-[7vw] pb-24 flex gap-9">
            <div class="flex flex-col gap-3 z-10">
                <span class="text-white text-xl font-[Arial] text-center select-none">Select Product</span>

                <Select
                    :list="list"
                ></Select>
            </div>

            <div class="flex flex-col gap-3 z-10">
                <span class="text-white text-xl font-[Arial] text-center select-none">Choose Package</span>

                <Select class="z-50"
                    :list="list"
                ></Select>
            </div>
        </div>
	</div>
</template>

<script setup lang="ts">
import SelectInterface from './Select/Type/SelectInterface'
import Select from './Select/Select.vue'
import { computed, onMounted, ref } from "vue";
import { useStore } from 'vuex';
import { RootStateInterface } from '../../../Store';
import TaxonomyInterface from '@/Entity/TaxonomyInterface';

const props = defineProps<{
    title: string;
    description: string
}>();

const list = computed<Array<SelectInterface<TaxonomyInterface>>>(() => [
    {
        isActive: false,
        item: {
            term_id: 20,
            name: "Plan-1",
            slug: "plan-1",
            term_group: 0,
            term_taxonomy_id: 20,
            taxonomy: "package",
            description: "",
            parent: 0,
            count: 1,
            filter: "raw"
        }
    },
    {
        isActive: false,
        item: {
            term_id: 22,
            name: "Plan-3",
            slug: "plan-3",
            term_group: 0,
            term_taxonomy_id: 22,
            taxonomy: "package",
            description: "",
            parent: 0,
            count: 0,
            filter: "raw"
        }
    }
]);

/* const store = useStore<RootStateInterface>();

let isInitData = ref(false);

onMounted(() => {
	if(!isInitData.value) {
		store.dispatch('filter/getFilterList', {
			// eslint-disable-next-line
			'action': 'getData',
			'page-name': 'pricing-filter',
		});

		isInitData.value = true;
	}
}); */

</script>
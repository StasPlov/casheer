<template>
	<div class="w-full">
        <div class="px-[7vw] pb-24 flex gap-9 max-md:flex-col max-md:items-start">
            <div class="flex flex-col gap-3 z-10">
                <span class="text-white text-xl font-[Arial] text-center select-none" v-html="productTitle"></span>

                <Select
                    :list="listProd"
					@selectItem="setSelectItemProduct"
                ></Select>
            </div>

            <div class="flex flex-col gap-3 z-10 transition duration-500" :class="{ 'opacity-20':!selectProduct }">
                <span class="text-white text-xl font-[Arial] text-center select-none"  v-html="packageTitle"></span>

                <Select class="z-50"
                    :list="listPack"
					@selectItem="setSelectItemPackage"
                ></Select>
            </div>
        </div>
	</div>
</template>

<script setup lang="ts">
import SelectInterface from './Select/Type/SelectInterface'
import Select from './Select/Select.vue'
import { computed, onMounted, ref, watch, watchEffect } from "vue";
import { useStore } from 'vuex';
import { RootStateInterface } from '../../../Store';
import TaxonomyInterface from '@/Entity/TaxonomyInterface';
import FilterInterface from '../../../Entity/FilterInterface';

const props = defineProps<{
    filter: {
		package_title?: string;
		product_title?: string;
		filter_relationship?: Array<FilterInterface>
	};
}>();

const store = useStore<RootStateInterface>();

let selectProduct = ref<TaxonomyInterface>();
let selectPackage = ref<TaxonomyInterface>();
let isInitList = ref(false);
const productTitle = computed(() => props.filter?.product_title);
const packageTitle = computed(() => props.filter?.package_title);
const productList = computed(() => props.filter?.filter_relationship.map(i => i.parent) ?? []);
const packageList = computed(() => {
	const filterList = props.filter?.filter_relationship.filter(i => i.parent === selectProduct?.value);
	const result: Array<TaxonomyInterface> = [];
	filterList.forEach(filter => {
		filter.child.forEach(element => {
			result.push(element.item);
		});
	});
	return result;
});

let listProd = ref<Array<SelectInterface<TaxonomyInterface>>>([]);
let listPack = ref<Array<SelectInterface<TaxonomyInterface>>>([]);

watch(productList, () => {
	if(!isInitList.value) {
		listProd.value = initList(productList.value);
		isInitList.value = true;
	}
});

watch(selectProduct, () => {
	listPack.value = initList(packageList.value);
});

watch(selectPackage, () => {
	getPlan();
});

function setSelectItemProduct(item: TaxonomyInterface | null) {
	selectProduct.value = item;
}

function setSelectItemPackage(item: TaxonomyInterface | null) {
	selectPackage.value = item;
}

function initList(list: Array<TaxonomyInterface>): Array<SelectInterface<TaxonomyInterface>> {
	return list.map(element => {
		return {
			isActive: false,
			item: element
		} as SelectInterface<TaxonomyInterface>;
	});
}

function getPlan() {
	const params = {
		// eslint-disable-next-line
		'action': 'getPostList',
		'post-type': 'pricing-plan',
		'post-count': 'all',
		// eslint-disable-next-line
		'taxonomy': [
			{
				// eslint-disable-next-line
				'taxonomy': selectProduct.value.taxonomy,
				// eslint-disable-next-line
				'term': selectProduct.value.slug,
			},
			{
				// eslint-disable-next-line
				'taxonomy': selectPackage.value.taxonomy,
				// eslint-disable-next-line
				'term': selectPackage.value.slug,
			}
		]
	};

	store.dispatch('plane/getPlaneList', params);

	console.log(params);
}
</script>
<template>
	<div class="flex flex-col w-full">
		<div class="relative" :class="{ 'z-30':inputIsActive }" v-click-outside="clickOutside">
			<SearchInput
				v-model="search"
				@focus.capture="focused"
			></SearchInput>

			<Transition name="popup">
				<SearchPopup class="absolute mt-2 w-full" v-if="inputIsActive && searchListIsNotEmpty"
					:search="searchList"
					@select:category="select"
				></SearchPopup>
			</Transition>
		</div>

		<Transition>
			<div class="fixed top-0 left-0 w-full h-full bg-black/40" :class="{ 'z-20':inputIsActive }" v-if="inputIsActive"></div>
		</Transition>
	</div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import { computed, ref, WritableComputedRef } from 'vue';
import SearchPopup from "./Components/SearchPopup.vue";
import SearchInput from "@/Ui/SearchInput.vue";
import { SearchType } from './Type/SearchType';
import { RootStateInterface } from '@/Store';

const store = useStore<RootStateInterface>();
console.log(store);
let inputIsActive = ref(false);

let search: WritableComputedRef<SearchType> = computed({
	get() {
		return store.state.adminPanelSearch.search;
	},
	set(value: any) {
		store.dispatch('adminPanelSearch/getSearch', { q: value });
	}
});

const searchIsNotEmpty = computed(() => !!search.value?.user?.length || !!search.value?.module?.length);

function focused() {
	inputIsActive.value = true;
}
function clickOutside() {
	inputIsActive.value = false;
}
function select(value: any) {
	search.value = value.name;
}
</script>
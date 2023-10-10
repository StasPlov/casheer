<template>
	<div class="bg-[var(--color-black1)] relative overflow-hidden">
		<div class="flex max-phoneX:flex-col-reverse">
			<div class="bg-white hidden max-phoneX:flex px-[8.375rem] max-phoneX:px-[1.125rem] py-[12rem] max-phoneX:py-[3.1rem] pb-0"> 
				<span class="text-[var(--color-black1)] text-xl font-[Arial] font-semibold" v-html="description"></span>
			</div>

			<img v-if="image" :src="image.url" alt="" class="w-full select-none -z-0" draggable="false">

			<div class="flex items-center justify-center absolute right-[18.9rem] max-phoneX:right-0 top-12 max-phoneX:top-0 max-phoneX:relative max-phoneX:justify-start max-phoneX:px-[1.125rem] max-phoneX:py-[1.8rem]">
				<div class="flex flex-col gap-4">
					<span class="text-white text-5xl font-mont font-bold leading-tight text-left max-phoneX:text-start" v-html="title"></span>
					<span class="text-white text-xl font-[Arial] font-semibold max-w-[25rem] max-phoneX:hidden" v-html="description"></span>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
import { RootStateInterface } from "../../Store";
import PageDataStateInterface from "../../Store/Modules/PageData/StateInterface";
import ImageInterface from "../../Entity/ImageInterface";

const store = useStore<RootStateInterface>();
const pageData = computed<PageDataStateInterface>(() => store.state.pageData);
const data = computed(() => pageData.value.data?.technology_block);

const image = computed<ImageInterface>(() => data.value?.image);
const description = computed<string>(() => data.value?.description);
const title = computed<string>(() => data.value?.title);
</script>

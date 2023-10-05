<template>
	<div class="bg-[var(--color-black1)] relative overflow-hidden">
		<div class="flex max-md:flex-col-reverse">
			<div class="bg-white hidden max-md:flex px-[7vw] py-[10vw] pb-0">
				<span class="text-[var(--color-black1)] text-xl font-[Arial] font-semibold" v-html="description"></span>
			</div>

			<img v-if="image" :src="image.url" alt="" class="w-full select-none -z-0" draggable="false">

			<div class="flex items-center justify-center absolute right-[21vw] top-24 max-md:top-0 max-md:relative max-md:right-0 max-md:justify-start max-md:px-[7vw] max-md:py-[2vw]">
				<div class="flex flex-col gap-4">
					<span class="text-white text-5xl font-mont font-bold leading-tight text-left max-md:text-start" v-html="title"></span>

					<span class="text-white text-xl font-[Arial] font-semibold max-w-[25rem] max-md:hidden" v-html="description"></span>
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

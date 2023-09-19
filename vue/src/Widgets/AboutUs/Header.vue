<template>
	<div class="flex flex-col bg-[var(--color-black1)] relative">
		<img :src="backgroundGradient" alt="" class="absolute left-0 top-0 z-10 select-none" draggable="false">

		<div class="relative w-full flex text-center max-phoneX:flex-col">
			<img v-if="background" :src="background.url" alt="" class="w-full select-none -z-0" draggable="false">

			<div class="w-full max-phoneX:px-[7vw] absolute  max-phoneX:relative bottom-0 z-20">
				<h1 class="text-white text-9xl font-bold font-mont select-none py-4 max-phoneX:text-6xl max-phoneX:text-start" v-html="title"></h1>
			</div>
		</div>

		<div class="px-[7vw] py-[17vw] z-20">
			<span class="text-white text-3xl font-normal font-[Arial]" v-html="description">
			</span>
		</div>
	</div>
</template>

<script setup lang="ts">
import backgroundGradient from "@/Assets/Icons/casheer about us gradient.svg";
import { useStore } from "vuex";
import { RootStateInterface } from "../../Store";
import PageDataStateInterface from "../../Store/Modules/PageData/StateInterface";
import { computed } from "vue";
import ImageInterface from "../../Entity/ImageInterface";

const store = useStore<RootStateInterface>();
const pageData = computed<PageDataStateInterface>(() => store.state.pageData);
const data = computed(() => pageData.value.data?.header);

const background = computed<ImageInterface>(() => data.value?.background);
const description = computed<string>(() => data.value?.description);
const title = computed<string>(() => data.value?.title);
</script>

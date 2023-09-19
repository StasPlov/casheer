<template>
	<div class="flex flex-col bg-[var(--color-black1)] relative">
		<img :src="backgroundGradient" alt="" class="absolute right-0 top-[-70%] select-none" draggable="false">

		<div class="px-[7vw] py-[18vw]">
			<div class="flex flex-col gap-10">
				<h2 class="text-white text-6xl font-bold font-mont text-center max-phoneX:text-start leading-tight z-0" v-html="title"></h2>

				<span class="text-white text-4xl font-normal font-[Arial] text-center max-phoneX:text-start max-phoneX:text-2xl z-0" v-html="description"></span>
			</div>
		</div>

		<img v-if="image" :src="image.url" alt="" class="select-none" draggable="false">
	</div>
</template>

<script setup lang="ts">
import backgroundGradient from "@/Assets/Icons/casheer about us gradient2.svg";

import { RootStateInterface } from "../../Store";
import PageDataStateInterface from "../../Store/Modules/PageData/StateInterface";
import { computed } from "vue";
import { useStore } from "vuex";
import ImageInterface from "../../Entity/ImageInterface";

const store = useStore<RootStateInterface>();
const pageData = computed<PageDataStateInterface>(() => store.state.pageData);
const data = computed(() => pageData.value.data?.take);

const image = computed<ImageInterface>(() => data.value?.image);
const description = computed<string>(() => data.value?.description);
const title = computed<string>(() => data.value?.title);
</script>

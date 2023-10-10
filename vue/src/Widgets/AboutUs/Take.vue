<template>
	<div class="flex flex-col bg-[var(--color-black1)] relative">
		<!-- <img :src="backgroundGradient" alt="" class="absolute right-0 top-[-70%] select-none" draggable="false"> -->
		<Light2 class="absolute right-0 top-[-45.25rem] select-none w-[76.4375rem] max-phoneX:top-[-83rem]" draggable="false"></Light2>

		<div class="px-[10.6875rem] py-[17.4375rem] pt-[16.5625rem] max-phoneX:px-[1.375rem] max-phoneX:pt-[11.34rem] max-phoneX:pb-[13.58rem]">
			<div class="flex flex-col gap-10">
				<h2 class="text-white text-6xl font-bold font-mont text-center max-phoneX:text-start leading-tight z-10 rtl:font-normal max-phoneX:text-[3.8125rem] max-phoneX:max-w-[29.7125rem]" v-html="title"></h2>
				<span class="text-white text-4xl text-[2.5rem] font-normal font-[Arial] text-center max-phoneX:text-start max-phoneX:text-2xl z-10 max-w-[68.625rem] max-phoneX:text-[1.5rem]" v-html="description"></span>
			</div>
		</div>

		<img v-if="image" :src="image.url" alt="" class="select-none z-10 max-phoneX:h-[32.78rem] max-phoneX:object-cover" draggable="false">
	</div>
</template>

<script setup lang="ts">
import Light2 from "./Assets/Light2.vue";

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

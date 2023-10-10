<template>
	<div class="flex flex-col bg-[var(--color-black1)] relative">
		<Light1 class="absolute left-0 top-0 z-10 select-none" draggable="false"></Light1>

		<div class="relative w-full flex text-center max-phoneX:flex-col z-10">
			<img v-if="background" :src="background.url" alt="" class="w-full select-none -z-0" draggable="false">

			<div class="w-full max-phoneX:px-[1.375rem] absolute  max-phoneX:relative bottom-0 z-20 max-phoneX:top-[3.225rem]">
				<h1 class="text-white text-9xl text-[7.19rem] font-bold font-mont select-none py-4 max-phoneX:text-6xl max-phoneX:text-start max-phoneX:text-[6rem] rtl:font-normal" v-html="title"></h1>
			</div>
		</div>

		<div class="px-[15.4375rem] py-[9.5rem] pt-[6.6875rem] z-20 max-phoneX:px-[1.375rem] max-phoneX:pt-[9.6875rem]">
			<span class="text-white text-3xl text-[2rem] font-normal font-[Arial] leading-tight max-phoneX:text-[2.43rem]" v-html="description"></span>
		</div>
	</div>
</template>

<script setup lang="ts">
import Light1 from "./Assets/Light1.vue";
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

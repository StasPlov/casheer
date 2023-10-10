<template>
	<div class="w-full bg-white relative overflow-hidden h-[72.875rem] flex items-center justify-center" v-if="always">
		<img v-if="always?.background" :src="always.background.url" alt="" class="absolute w-full h-full z-0 max-phoneX:w-[300%] max-phoneX:max-w-none" draggable="false">

		<div class="px-[8.375rem] pt-[16rem] max-phoneX:px-[1.125rem]">
			<div class="flex flex-col items-center">
				<div class="flex flex-col z-10">
					<span class="font-mont text-center text-5xl font-bold text-black max-phoneX:text-white rtl:font-normal max-phoneX:text-[3.95rem] max-phoneX:mt-[-19.375rem] max-phoneX:pb-[5rem]" v-html="always?.title"></span>
					<span class="font-mont text-center font-bold text-[9.1875rem] text-black max-phoneX:text-[7.5rem]" v-html="always?.title_two"></span>
				</div>

				<span class="text-black font-[Arial] text-2xl font-normal text-center max-w-[40rem] z-10 max-phoneX:font-bold max-phoneX:translate-y-[10vh] rtl:font-normal" v-html="always?.description"></span>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import ImageInterface from "../../Entity/ImageInterface";
import { RootStateInterface } from "../../Store";
import PageDataStateInterface from "../../Store/Modules/PageData/StateInterface";

const store = useStore<RootStateInterface>();
const pageData = computed<PageDataStateInterface>(() => store.state.pageData);
const always = computed<{
	background?: ImageInterface;
	title?: string;
	title_two?: string;
	description?: string;
}>(() => pageData.value.data?.always);
</script>

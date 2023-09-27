<template>
	<div class="w-full bg-white relative overflow-hidden min-h-screen flex items-center justify-center">
		<img v-if="always.background" :src="always.background.url" alt="" class="absolute w-full h-full z-0 max-md:w-[300%] max-md:max-w-none" draggable="false">

		<div class="px-[7vw] py-[10vw]">
			<div class="flex flex-col items-center">
				<div class="flex flex-col z-10">
					<span class="font-mont text-center text-5xl font-bold text-black max-md:text-white max-md:translate-y-[-8vh]" v-html="always.title"></span>
					<span class="font-mont text-center font-bold text-[9.1875rem] text-black" v-html="always.title_two"></span>
				</div>

				<span class="text-black text-[Arial] text-2xl font-normal text-center max-w-[40rem] z-10 max-md:font-bold max-md:translate-y-[10vh]" v-html="always.description"></span>
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
	background: ImageInterface;
	title: string;
	title_two: string;
	description: string;
}>(() => pageData.value.data?.always);
</script>

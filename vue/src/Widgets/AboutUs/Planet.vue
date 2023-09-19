<template>
	<div class="flex items-center justify-around bg-[var(--color-black1)] relative overflow-hidden max-md:flex-col ">
		<img v-if="image" :src="image.url" alt="" height="618" width="618">
		
		<div class="flex flex-col gap-10 z-10 max-phoneX:px-[7vw]">
			<h2 class="text-white text-5xl font-bold font-mont max-phoneX:text-start leading-tight" v-html="title"></h2>

			<span class="text-white text-2xl font-normal font-[Arial] max-w-[33.8125rem] max-phoneX:text-start" v-html="description">
			</span>
		</div>
	</div>
</template>

<script setup lang="ts">
import { RootStateInterface } from "../../Store";
import PageDataStateInterface from "../../Store/Modules/PageData/StateInterface";
import { computed } from "vue";
import { useStore } from "vuex";
import ImageInterface from "../../Entity/ImageInterface";

const store = useStore<RootStateInterface>();
const pageData = computed<PageDataStateInterface>(() => store.state.pageData);
const data = computed(() => pageData.value.data?.planet);

const image = computed<ImageInterface>(() => data.value?.image);
const description = computed<string>(() => data.value?.description);
const title = computed<string>(() => data.value?.title);
</script>

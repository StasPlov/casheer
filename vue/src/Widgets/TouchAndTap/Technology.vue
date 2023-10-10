<template>
	<div class="bg-[var(--color-black1)] relative overflow-hidden z-10">
		<div class="flex max-phoneX:flex-col-reverse">
			<img v-if="image" :src="image.url" alt="" class="w-full select-none -z-0 brightness-90" draggable="false">

			<div class="flex items-center justify-center absolute right-[6.3rem] top-8 max-phoneX:top-0 max-phoneX:relative max-phoneX:right-0 max-phoneX:justify-start max-phoneX:px-[8.375rem] max-phoneX:py-[1.8rem]">
				<div class="flex flex-col gap-4">
					<span class="text-white text-5xl font-mont font-bold leading-tight text-right max-phoneX:text-start" v-html="title"></span>
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
const title = computed<string>(() => data.value?.title);
</script>

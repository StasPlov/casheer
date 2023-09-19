<template>
	<div class="bg-white">
		<div class="px-[7vw] py-[8vw] max-phoneX:py-[20vw]">
			<div class="flex flex-col gap-14 max-phoneX:gap-20">
				<h2 class="text-black text-2xl font-bold font-mont text-center max-phoneX:text-5xl" v-html="title"></h2>
			
				<div class="self-center">
					<ul class="grid grid-cols-3 grid-flow-row gap-14 gap-x-32 max-phoneX:grid-cols-1">
						<li v-for="item in teamList" :key="item" class="flex flex-col gap-1 min-w-min max-phoneX:items-center">
							<span class="text-black text-xl font-semibold font-[Arial] text-start flex-nowrap max-phoneX:text-3xl">{{ item.title }}</span>
							<a :href="`mailto:${item.mail}`" class="text-black text-sm font-normal font-[Arial] underline text-start max-phoneX:text-lg">{{ item.mail }}</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import { RootStateInterface } from "../../Store";
import PageDataStateInterface from "../../Store/Modules/PageData/StateInterface";
import ImageInterface from "../../Entity/ImageInterface";

const store = useStore<RootStateInterface>();
const pageData = computed<PageDataStateInterface>(() => store.state.pageData);
const data = computed(() => pageData.value.data?.talk);

const title = computed<string>(() => data.value?.title);
const teamList = computed<Array<{
	title: string;
	mail: string;
}>>(() => data.value?.info ?? []);
</script>

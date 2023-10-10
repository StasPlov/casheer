<template>
	<div class="bg-white">
		<div class="px-[8.375rem] py-[7.125rem] pb-[11.1875rem]">
			<div class="flex flex-col gap-14 max-phoneX:gap-20">
				<h2 class="text-black text-3xl text-[2rem] font-bold font-mont text-center max-phoneX:text-5xl max-phoneX:text-[3.75rem] z-10" v-html="title"></h2>
			
				<div class="self-center z-10 w-full">
					<ul class="grid grid-cols-3 grid-flow-row gap-14 gap-x-[11.9375rem] max-phoneX:flex max-phoneX:flex-col max-phoneX:gap-[8.62rem] max-phoneX:items-center">
						<li v-for="item in teamList" :key="item" class="flex flex-col gap-1 min-w-max max-phoneX:items-center">
							<span class="text-black text-2xl text-[1.75rem] font-semibold font-[Arial] text-start flex-nowrap max-phoneX:text-3xl max-phoneX:text-[2.44rem] max-phoneX:leading-tight">{{ item.title }}</span>
							<a :href="`mailto:${item.mail}`" class="text-black text-xl font-normal font-[Arial] underline text-start max-phoneX:text-[1.5rem]">{{ item.mail }}</a>
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

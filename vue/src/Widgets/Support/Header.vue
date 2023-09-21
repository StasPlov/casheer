<template>
	<div class="bg-[var(--color-black1)]">
		<Light1 class="absolute left-0 select-none max-w-full" draggable="false"></Light1>
		<Light2 class="absolute right-0 select-none max-w-full" draggable="false"></Light2>

		<div class="px-[7vw] py-[12vw] pb-[5vw] flex flex-col items-start gap-10">

			<div class="flex flex-col items-start gap-4 z-10">
				
				<a :href="button.link?.url ?? ''" v-if="button && button.is_active">
					<Button class="!p-0 bg-transparent gap-3">
						<span class="text-white text-base font-[Arial] font-normal underline">{{ button.text }}</span>
						<ArrowIcon></ArrowIcon>
					</Button>
				</a>

				<h1 class="text-white text-4xl font-[Arial] font-normal" v-html="title"></h1>
			</div>
			

			<div class="flex flex-col gap-14 z-10">
				<Input class="border-[0.1875rem] border-white !rounded-[6.25rem] !bg-transparent max-w-[48.125rem] py-2 pl-8 text-[var(--color-silver1)] text-xl font-[Arial]" :placeholder="searchPlaceholder">
					<template #content-after>
						<Button class="!rounded-full h-10 w-10 !p-2">
							<SearchIcon></SearchIcon>
						</Button>
					</template>
				</Input>

				<h3 class="text-white text-base font-[Arial] font-normal underline transition duration-700 hover:scale-105 hover:translate-x-3 cursor-default" v-html="subTitle"></h3>
			</div>

		</div>
	</div>
</template>

<script setup lang="ts">
import Button from "@/Ui/Button";
import Input from "@/Ui/Input";
import ArrowIcon from "./Assets/ArrowIcon.vue";
import SearchIcon from "./Assets/SearchIcon.vue";
import Light1 from "./Assets/Light1.vue";
import Light2 from "./Assets/Light2.vue";
import { useStore } from "vuex";
import { computed } from "vue";
import { RootStateInterface } from "../../Store";
import PageDataStateInterface from "../../Store/Modules/PageData/StateInterface";
import ButtonInterface from "../../Entity/ButtonInterface";

const store = useStore<RootStateInterface>();
const pageData = computed<PageDataStateInterface>(() => store.state.pageData);
const dataHeader = computed(() => pageData.value.data?.header);

const button = computed<ButtonInterface>(() => dataHeader.value?.button);
const title = computed<string>(() => dataHeader.value?.title);
const searchPlaceholder = computed<string>(() => dataHeader.value?.search_placeholder);
const subTitle = computed<string>(() => dataHeader.value?.sub_title);

const infoList = computed(() => dataHeader.value?.infoList);
</script>
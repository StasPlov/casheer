<template>
	<div class="w-full bg-[var(--color-black1)] rounded-[2.875rem] max-phoneX:overflow-hidden" v-if="dataWelcome">
		<div class="px-[8.375rem] py-[6.3rem] max-phoneX:py-[13.5rem] max-phoneX:px-[1.125rem] flex flex-col max-phoneX:gap-12">
			
			<div class="hidden max-phoneX:flex justify-center">
				<img v-if="image" :src="image.url" alt="" draggable="false" class="w-[24.125rem] shadow select-none">
			</div>
			
			<div class="flex flex-col gap-4 items-start">
				<h2 class="font-mont text-[3.375rem] text-white font-semibold leading-tight select-none rtl:font-normal max-phoneX:w-min max-phoneX:text-[3.75rem]" v-html="title"></h2>

				<a :href="button.link?.url ?? ''" v-if="button.is_active">
					<Button class="!bg-transparent btn relative !py-4 hover:scale-105 duration-500 rtl:!px-20 max-phoneX:!px-[2rem]">
						<span class="text-white text-base font-[Arial] font-semibold rtl:font-normal max-phoneX:text-[1.5rem]">{{ button.text }}</span>
					</Button>
				</a>
			</div>
			
			<div class="flex justify-center">
				<div class="relative max-phoneX:flex max-phoneX:justify-end top-[-1.625rem]">
					<img v-if="imageTwo" :src="imageTwo.url" alt="" draggable="false" class="w-[61.8125rem] select-none max-phoneX:min-w-[250%] max-phoneX:mr-[-6.6875rem] shadow">
					<img v-if="image" :src="image.url" alt="" draggable="false" class="w-[16.125rem] select-none absolute bottom-0 left-16 max-phoneX:hidden shadow">
				</div>
			</div>

		</div>
	</div>
</template>

<script setup lang="ts">
import Button from "@/Ui/Button";
import { useStore } from "vuex";
import { RootStateInterface } from "../../Store";
import PageDataStateInterface from "../../Store/Modules/PageData/StateInterface";
import { computed } from "vue";
import ImageInterface from "../../Entity/ImageInterface";

const store = useStore<RootStateInterface>();
const pageData = computed<PageDataStateInterface>(() => store.state.pageData);
const dataWelcome = computed(() => pageData.value.data?.welcome);

const title = computed(() => dataWelcome.value?.title);
const button = computed(() => dataWelcome.value?.button); 
const image = computed<ImageInterface>(() => dataWelcome.value?.image); 
const imageTwo = computed<ImageInterface>(() => dataWelcome.value?.image_two);
</script>

<style scoped>
.btn::before {
	content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50px;
    border: 5px solid transparent;
    background: radial-gradient(var(--color-green1), transparent) border-box;
    mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
}

.shadow {
	filter: drop-shadow(-11px -52px 18px #344287);
}
</style>

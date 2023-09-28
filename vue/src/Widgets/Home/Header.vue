<template>
	<div class="flex flex-col w-full bg-[var(--color-black1)] relative justify-center items-start">
		<img v-if="background" :src="background?.url" alt="" class="absolute w-full max-phoneX:hidden animate-pulse select-none" draggable="false">
		<img v-if="backgroundMob" :src="backgroundMob?.url" alt="" class="absolute w-full hidden max-phoneX:block select-none" draggable="false">

		<div class="flex flex-col gap-28 px-[7vw] py-[10vw] z-0 max-phoneX:justify-between max-phoneX:h-full max-phoneX:pt-[25vh] max-phoneX:pb-[5vh]">
			<div class="flex flex-col gap-9">
				<img v-if="logo" :src="logo.url" alt="" class="w-[23.125rem] select-none" draggable="false">

				<div class="max-w-[43.125rem] text-5xl max-phoneX:text-3xl">
					<span class="text-white font-bold leading-tight font-mont" v-html="title"></span>
				</div>
			</div>

			<div class="flex flex-col gap-5">
				<div class="flex gap-10 mb-9">
					<a :href="button.link?.url ?? ''" v-if="button && button.is_active">
						<Button class="!bg-transparent btn relative !py-4 hover:scale-105 duration-500">
							<span class="text-white text-base font-[Arial] font-semibold">{{ button.text }}</span>
						</Button>
					</a>

					<a :href="buttonTwo.link" v-if="buttonTwo && buttonTwo.is_active">
						<Button class="bg-transparent underline underline-offset-4 hover:text-opacity-80">
							<span class="text-white text-base font-[Arial] font-bold">{{ buttonTwo.text }}</span>
						</Button>
					</a>
				</div>

				<hr class="max-w-[70%] max-phoneX:max-w-full">

				<div class="flex flex-col gap-1">
					<span class="text-white text-sm font-normal" v-for="item in infoList" :key="item">{{ item.text }}</span>
				</div>
			</div>
		</div>

	</div>
</template>

<script setup lang="ts">
import Button from "../../Ui/Button.vue";
import ImageInterface from "../../Entity/ImageInterface";
import { useStore } from "vuex";
import { RootStateInterface } from "../../Store";
import PageDataStateInterface from "../../Store/Modules/PageData/StateInterface";
import { computed } from "vue";

const store = useStore<RootStateInterface>();
const pageData = computed<PageDataStateInterface>(() => store.state.pageData);
const dataHeader = computed(() => pageData.value.data?.header);

const button = computed(() => dataHeader.value?.button);
const buttonTwo = computed(() => dataHeader.value?.button_two);
const background = computed(() => dataHeader.value?.background);
const backgroundMob = computed(() => dataHeader.value?.background_mobile);
const logo = computed(() => dataHeader.value?.logo);
const title = computed(() => dataHeader.value?.title);
const infoList = computed(() => dataHeader.value?.infoList);
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
</style>

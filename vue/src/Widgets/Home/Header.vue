<template>
	<div class="flex flex-col w-full bg-[var(--color-black1)] relative justify-center items-start">
		<img v-if="background" :src="background?.url" alt="" class="absolute w-full top-[-3rem] max-phoneX:hidden animate-pulse select-none z-10 mix-blend-lighten" draggable="false">
		<img v-if="backgroundMob" :src="backgroundMob?.url" alt="" class="absolute w-full hidden max-phoneX:block select-none" draggable="false">

		<div class="flex flex-col gap-28 px-[8.375rem] py-[9rem] pt-[4.5rem] z-0 max-phoneX:px-[1.125rem] max-phoneX:justify-between max-phoneX:h-full max-phoneX:pt-[11.25rem] max-phoneX:pb-0 max-phoneX:gap-[13.3125rem]">
			<div class="flex flex-col gap-9 max-phoneX:gap-[3.75rem]">
				<img v-if="logo" :src="logo.url" alt="" class="w-[23.125rem] select-none" draggable="false">

				<div class="max-w-[43.125rem] text-5xl max-phoneX:text-4xl max-phoneX:max-w-none">
					<span class="text-white font-bold leading-tight font-mont rtl:font-normal rtl:text-[4rem] max-phoneX:text-[3.2rem]" v-html="title"></span>
				</div>
			</div>

			<div class="flex flex-col gap-5">
				<div class="flex gap-10 mb-9 max-phoneX:items-center">
					<a :href="button.link?.url ?? ''" v-if="button && button.is_active">
						<Button class="!bg-transparent btn relative !py-4 hover:scale-105 duration-500 rtl:!px-20 max-phoneX:!px-8 max-phoneX:!py-6">
							<span class="text-white text-base font-[Arial] font-semibold max-phoneX:text-[1.56rem]">{{ button.text }}</span>
						</Button>
					</a>

					<a :href="buttonTwo.link" v-if="buttonTwo && buttonTwo.is_active">
						<Button class="bg-transparent underline underline-offset-4 hover:text-opacity-80">
							<span class="text-white text-base font-[Arial] font-bold max-phoneX:text-[1.56rem]">{{ buttonTwo.text }}</span>
						</Button>
					</a>
				</div>

				<hr class="max-w-[70%] max-phoneX:max-w-full">

				<div class="flex flex-col gap-1 max-phoneX:gap-4">
					<span class="text-white text-sm font-normal max-phoneX:text-[1.37rem]" v-for="item in infoList" :key="item">{{ item.text }}</span>
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
const infoList = computed(() => dataHeader.value?.info);
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

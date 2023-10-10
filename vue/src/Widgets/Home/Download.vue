<template>
	<div class="w-full bg-gradient-casheer-dowload-to-b relative max-phoneX:overflow-hidden">
		<div class="px-[8.375rem] pt-[5.4375rem] pb-[2.0625rem] max-phoneX:pb-[15.625rem] max-phoneX:px-[1.4375rem]">
			<div class="flex flex-col gap-7 z-10">
				<h2 class="text-white font-mont text-[3.375rem] font-bold max-phoneX:text-center rtl:font-normal max-phoneX:text-[2.55rem] max-phoneX:self-center" v-html="title"></h2>

				<ul class="flex gap-[3.1875rem] max-phoneX:flex-col items-start">
					<li v-for="item in downloadList" :key="item" class="flex flex-col gap-8">
						<img :src="item.image_qr.url" alt="" class="w-[9.3125rem] select-none" draggable="false">

						<a :href="item.button.link?.url ?? ''" v-if="item.button.is_active">
						<Button class="border-2 border-white border-solid bg-transparent !rounded-[6.25rem]">
							<img :src="item.button.image.url" alt="" draggable="false" class="max-w-[5.9375rem] object-contain">
						</Button>
						</a>
					</li>
				</ul>
			</div>

			<img v-if="background" :src="background.url" alt="" class="w-[65.875rem] absolute right-0 rtl:right-auto rtl:left-0 bottom-0 z-0 max-phoneX:min-w-[68.3125rem] max-phoneX:right-[-12.5rem] select-none" draggable="false">
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import Button from "@/Ui/Button.vue";
import { useStore } from "vuex";
import { RootStateInterface } from "../../Store";
import PageDataStateInterface from "../../Store/Modules/PageData/StateInterface";
import ImageInterface from "../../Entity/ImageInterface";

const store = useStore<RootStateInterface>();
const pageData = computed<PageDataStateInterface>(() => store.state.pageData);
const data = computed(() => pageData.value.data?.download);

const title = computed<string>(() => data.value?.title);
const background = computed<ImageInterface>(() => data.value?.background);
const downloadList = computed<Array<{
	button: {
		image: ImageInterface;
		link: string;
		is_active: boolean;
	},
	image_qr: ImageInterface
}>>(() => data.value?.app ?? []);
</script>

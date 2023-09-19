<template>
	<div class="w-full bg-gradient-casheer-dowload-to-b relative max-md:overflow-hidden">
		<div class="px-[7vw] py-[5vh] max-md:pb-[15.625rem]">
			<div class="flex flex-col gap-7 z-10">
				<h2 class="text-white font-mont text-[3.375rem] font-bold max-phoneX:text-center" v-html="title"></h2>

				<ul class="flex gap-8 max-md:flex-col items-start">
					<li v-for="item in downloadList" :key="item" class="flex flex-col gap-8">
						<img :src="item.image_qr.url" alt="" class=" select-none" draggable="false">

						<a :href="item.button.link" v-if="item.button.is_active">
						<Button class="border-2 border-white border-solid bg-transparent !rounded-[6.25rem]">
							<img :src="item.button.image.url" alt="">
						</Button>
						</a>
					</li>
				</ul>
			</div>

			<img v-if="background" :src="background.url" alt="" class="max-w-[65.875rem] w-[70%] absolute right-0 bottom-0 z-0 max-md:min-w-full max-phoneX:min-w-[150%] max-phoneX:right-[-12.5rem]">
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

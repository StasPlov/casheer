<template>
	<div class="flex flex-col bg-white relative">
		<img :src="backgroundGradient" alt="" class="absolute left-0 top-0 select-none z-0" draggable="false">

		<div class="px-[7vw] py-[20vw] pb-0 z-10">
			<div class="flex gap-32 pb-[15vw] justify-around max-phoneX:flex-col">
				<div class="hidden max-phoneX:block pb-[20vw]">
					<h2 class="text-black text-6xl font-bold font-mont text-center leading-tight">Our promise <br> to you</h2>
				</div>

				<div class="box-graident rounded-[1.4375rem] relative h-[32rem]  max-w-[29rem] w-full">
					<img v-if="image" :src="image.url" alt="" class="absolute bottom-0 -right-16 select-none z-10 rounded-br-[1.4375rem]" draggable="false">	
				</div>

				<div class="flex flex-col gap-10">
					<h2 class="text-black text-5xl font-bold font-mont max-phoneX:hidden" v-html="title"></h2>

					<span class="text-black text-xl font-normal font-[Arial] max-w-[35.625rem]" v-html="description"></span>
				</div>
			</div>

			<div class="flex flex-col gap-16">
				<h2 class="text-black text-2xl font-bold font-mont text-center" v-html="teamTitle"></h2>
				
				<div class="self-center">
					<ul class="grid grid-cols-3 grid-flow-row gap-8 gap-x-32 max-phoneX:grid-cols-1 max-phoneX:gap-10">
						<li v-for="item in teamList" :key="item" class="flex flex-col gap-5 items-center">
							<img v-if="item.image" :src="item.image.url" alt="" class="select-none min-w-[12.5rem] min-h-[12.5rem] rounded-full" draggable="false">
							
							<div class="flex flex-col gap-2">
								<span class="text-black text-xl font-semibold font-[Arial] text-center">{{ item.title }}</span>
								<span class="text-black text-sm font-normal font-[Arial] text-center">{{ item.sub_title }}</span>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import backgroundGradient from "@/Assets/Icons/bg-gradient222.svg"; 

import { RootStateInterface } from "../../Store";
import PageDataStateInterface from "../../Store/Modules/PageData/StateInterface";
import { computed } from "vue";
import { useStore } from "vuex";
import ImageInterface from "../../Entity/ImageInterface";

const store = useStore<RootStateInterface>();
const pageData = computed<PageDataStateInterface>(() => store.state.pageData);
const data = computed(() => pageData.value.data?.promise);
const dataTeam = computed(() => pageData.value.data?.team);

const image = computed<ImageInterface>(() => data.value?.image);
const description = computed<string>(() => data.value?.description);
const title = computed<string>(() => data.value?.title);

const teamTitle = computed<string>(() => dataTeam.value?.title);
const teamList = computed<Array<{
	image: ImageInterface;
	title: string;
	sub_title: string;
}>>(() => dataTeam.value?.list ?? []);
</script>

<style scoped>
.box-graident {
	background: radial-gradient(61% 76.25% at 50.8% 41.31%, rgba(125, 0, 226, 0.45) 0%, rgba(125, 0, 226, 0.15) 100%);
}
</style>

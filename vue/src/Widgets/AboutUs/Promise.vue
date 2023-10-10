<template>
	<div class="flex flex-col bg-white relative">
		<Light3 class="absolute left-0 top-0 select-none z-0 max-phoneX:top-[-10rem] max-phoneX:left-[-30rem]" draggable="false"></Light3>
		<Light4 class="absolute right-0 top-[30vh] select-none z-0 max-phoneX:top-[75rem]" draggable="false"></Light4>
		<Light5 class="absolute right-0 top-[100vh] select-none z-0 max-phoneX:top-[105rem]" draggable="false"></Light5>


		<Light4 class="hidden absolute right-0 bottom-0 select-none z-0 max-phoneX:block max-phoneX:top-[160rem]" draggable="false"></Light4>
		<Light5 class="hidden absolute right-0 bottom-[-40vh] select-none z-0 max-phoneX:block max-phoneX:top-[180rem] mix-blend-color" draggable="false"></Light5>

		<div class="px-[8.375rem] py-[18rem] pb-0 z-10 max-phoneX:px-[1.375rem] max-phoneX:py-[9.46rem]">

			<div class="flex gap-60 pb-[13.5rem] justify-around max-phoneX:flex-col rtl:[direction:ltr] max-phoneX:gap-[18rem]">
				<div class="hidden max-phoneX:flex self-center max-phoneX:max-w-[27.4375rem]">
					<h2 class="text-black text-6xl font-bold font-mont text-center leading-tight" v-html="title"></h2>
				</div>

				<div class="flex max-phoneX:flex-col gap-24 w-full max-phoneX:w-auto justify-around rtl:[direction:rtl]">				
					<div class="box-graident rounded-[1.4375rem] relative h-[32rem]  max-w-[29rem] w-full">
						<img v-if="image" :src="image.url" alt="" class="absolute bottom-0 -right-16 select-none z-10 rounded-br-[1.4375rem]" draggable="false">	
					</div>

					<div class="flex flex-col gap-10">
						<h2 class="text-black text-5xl font-bold font-mont max-phoneX:hidden" v-html="title"></h2>
						<span class="text-black text-xl font-normal font-[Arial] max-w-[35.625rem] max-phoneX:text-[1.5rem] max-phoneX:leading-tight" v-html="description"></span>
					</div>
				</div>
			</div>

			<div class="flex flex-col gap-16 rtl:[direction:ltr] max-phoneX:gap-[7.275rem]">
				<h2 class="text-black text-2xl text-[2rem] font-bold font-mont text-center max-phoneX:text-[3.75rem]" v-html="teamTitle"></h2>
				
				<div class="self-center">
					<ul class="grid grid-cols-3 grid-flow-row gap-24 gap-x-32 max-phoneX:grid-cols-1 max-phoneX:gap-[3.75rem]">
						<li v-for="item in teamList" :key="item" class="flex flex-col gap-5 items-center">
							<img v-if="item.image" :src="item.image.url" alt="" class="select-none w-[12rem] rounded-full" draggable="false">
							
							<div class="flex flex-col gap-2">
								<span class="text-black text-xl font-semibold font-[Arial] text-center max-phoneX:text-[1.9rem] max-phoneX:leading-relaxed">{{ item.title }}</span>
								<span class="text-black text-sm text-[0.9375rem] font-normal font-[Arial] text-center max-phoneX:text-[1.43rem] max-phoneX:leading-tight">{{ item.sub_title }}</span>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import Light3 from "./Assets/Light3.vue";
import Light4 from "./Assets/Light4.vue";
import Light5 from "./Assets/Light5.vue";
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

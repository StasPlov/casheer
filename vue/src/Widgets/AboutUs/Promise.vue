<template>
	<div class="flex flex-col bg-white relative">
		<Light3 class="absolute left-0 top-0 select-none z-0" draggable="false"></Light3>
		<Light4 class="absolute right-0 top-[30vh] select-none z-0" draggable="false"></Light4>
		<Light5 class="absolute right-0 top-[100vh] select-none z-0" draggable="false"></Light5>


		<Light4 class="hidden absolute right-0 bottom-0 select-none z-0 max-phoneX:block" draggable="false"></Light4>
		<Light5 class="hidden absolute right-0 bottom-[-40vh] select-none z-0 max-phoneX:block" draggable="false"></Light5>

		<div class="px-[7vw] py-[20vw] pb-0 z-10">
			<div class="flex gap-60 pb-[15vw] justify-around max-phoneX:flex-col max-md:">
				<div class="hidden max-phoneX:block">
					<h2 class="text-black text-6xl font-bold font-mont text-center leading-tight">Our promise <br> to you</h2>
				</div>

				<div class="flex max-md:flex-col gap-24 w-full max-md:w-auto">				
					<div class="box-graident rounded-[1.4375rem] relative h-[32rem]  max-w-[29rem] w-full">
						<img v-if="image" :src="image.url" alt="" class="absolute bottom-0 -right-16 select-none z-10 rounded-br-[1.4375rem]" draggable="false">	
					</div>

					<div class="flex flex-col gap-10">
						<h2 class="text-black text-5xl font-bold font-mont max-phoneX:hidden" v-html="title"></h2>
						<span class="text-black text-xl font-normal font-[Arial] max-w-[35.625rem] max-phoneX:text-[16px] max-phoneX:leading-tight" v-html="description"></span>
					</div>
				</div>
			</div>

			<div class="flex flex-col gap-16">
				<h2 class="text-black text-2xl font-bold font-mont text-center max-phoneX:text-[40px]" v-html="teamTitle"></h2>
				
				<div class="self-center">
					<ul class="grid grid-cols-3 grid-flow-row gap-24 gap-x-32 max-phoneX:grid-cols-1 max-phoneX:gap-10">
						<li v-for="item in teamList" :key="item" class="flex flex-col gap-5 items-center">
							<img v-if="item.image" :src="item.image.url" alt="" class="select-none min-w-[12.5rem] min-h-[12.5rem] rounded-full" draggable="false">
							
							<div class="flex flex-col gap-2">
								<span class="text-black text-xl font-semibold font-[Arial] text-center max-phoneX:text-[20px] max-phoneX:leading-relaxed">{{ item.title }}</span>
								<span class="text-black text-sm font-normal font-[Arial] text-center max-phoneX:text-[15px] max-phoneX:leading-tight">{{ item.sub_title }}</span>
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

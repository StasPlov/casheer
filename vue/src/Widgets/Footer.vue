<template>
	<footer class="flex flex-col bg-[var(--color-black1)] overflow-hidden" v-if="data">
		<slot>
			<div class="px-[7vw] py-[2vw] pb-[3vw] border-t-[3px] border-white flex flex-col gap-5 items-center">
				<div class="flex flex-col gap-7">
					<h2 class="text-white text-3xl font-bold font-mont text-center" v-html="contactData.title"></h2>
				
					<Button class="gap-5">
						<img :src="iconCollIcon" alt="" class="h-5">
						<span class="text-base text-white font-semibold font-[Arial] tracking-wide" v-html="contactData.phone"></span>
					</Button>
				</div>
				

				<div class="flex flex-col gap-7 items-center w-full">
					<h3 class="text-xl text-white font-normal font-[Arial]" v-html="contactData.input_title"></h3>

					<!-- <div ref="ninjaForm"></div> -->

					<Input class="border-[0.1875rem] border-white !rounded-[6.25rem] !bg-transparent max-w-[48.125rem] py-2 pl-8 text-[var(--color-silver1)] text-xl font-[Arial]" placeholder="Your email address">
						<template #content-after>
							<Button class="!rounded-full h-10 w-10 !p-2">
								<img :src="sendIcon" alt="" class="h-5">
							</Button>
						</template>
					</Input>
				</div>
			</div>

			<div class="px-[7vw] py-[2vw] pb-[4vw] border-t-[3px] border-white w-full flex flex-col gap-20">
				<div class="flex flex-col gap-8">
					<a href="/">
						<img v-if="logo" :src="logo.url" alt="" class="w-[10rem] select-none" draggable="false">
					</a>

					<div class="grid grid-cols-3">
						<div class="flex flex-col gap-4" v-for="menu in menuList" :key="menu">
							<h2 class="text-white text-base font-[Arial] font-semibold cursor-default" v-if="menu.title">{{ menu.title }}</h2>

							<ul class="flex flex-col gap-4">
								<li v-for="item in menu.list" :key="item">
									<a :href="item.link" v-if="item.link" class=" text-white text-base font-normal font-[Arial] cursor-default">{{ item.text }}</a>
									<span class="text-white text-base font-normal font-[Arial] cursor-default" v-else>{{ item.text }}</span>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div class="flex justify-center">
					<ul class="flex gap-16">
						<li v-for="item in socialList" :key="item">
							<template v-if="item.link">
								<a :href="item.link">
									<img v-if="item.image" :src="item.image.url" alt="" class="select-none" draggable="false">
								</a>
							</template>

							<img v-else-if="item.image" :src="item.image.url" alt="" class="select-none" draggable="false">
						</li>
					</ul>
				</div>
			</div>
		</slot>
	</footer>
</template>

<script setup lang="ts">
import Button from "@/Ui/Button.vue";
import Input from "@/Ui/Input.vue";
import iconCollIcon from "@/Assets/Icons/icon_coll.svg";
import sendIcon from "@/Assets/Icons/send.svg";
import sendFacebookIcon from "@/Assets/Icons/icon_facebook.svg";
import socialIcon from "../Assets/Icons/icon_facebook.svg";
import MenuInterface from "../Widgets/Footer/Type/MenuInterface";
import { computed, onMounted, ref, watch, watchEffect } from "vue";
import ImageInterface from "../Entity/ImageInterface";
import { useStore } from "vuex";
import { RootStateInterface } from "../Store";
import StateInterface from "../Store/Modules/Footer/StateInterface";
import PageInfoStateInterface from "../Store/Modules/PageInfo/StateInterface";
import NinjaFormScriptInterface from "../Service/NinjaFormDinamicLoader/NinjaFormScriptInterface";

const store = useStore<RootStateInterface>();

const data = computed<{
	logo: ImageInterface,
	menu: Array<MenuInterface>,
	social: Array<ImageInterface>
}>(() => (store.state.footer as StateInterface).data?.footer);

const contactData = computed<{
	title: string
	input_title: string,
	phone: string,
}>(() => (store.state.footer as StateInterface).data?.contact_us);

const socialList = computed(() => data.value?.social ?? []);
const menuList = computed(() => data.value?.menu ?? []);
const logo = computed(() => data.value?.logo);

/* const formTemplate = computed<string>(() => atob((store.state.pageInfo as PageInfoStateInterface)?.formHtml ?? '')); */

let isInitData = ref(false);
/* let ninjaForm = ref(null); */

/* watch(ninjaForm, () => { // init Form
	const form = document.getElementById('ninjaForm1');
	form.removeAttribute('hidden');
	(ninjaForm.value as HTMLElement).append(form);
}); */

onMounted(() => {
	if(!isInitData.value) {
		store.dispatch('footer/getData', {
			// eslint-disable-next-line
			'action': 'getData',
			'page-name': 'footer-setup',
		});

		isInitData.value = true;
	}
});
</script>

<style>
input.ninja-forms-field[type='email'] {
	border: 3px solid white;
	max-width: 48.125rem/* 770px */;
	border-radius: 6.25rem/* 100px */ !important;
	padding-top: 0.5rem; /* 8px */
    padding-bottom: 0.5rem; /* 8px */
	padding-left: 2rem; /* 32px */
	color: var(--color-silver1);
	font-size: 1.25rem/* 20px */;
    line-height: 1.75rem/* 28px */;
	font-family: Arial;
}

.nf-form-content nf-fields-wrap {
	display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.625rem;
}
</style>

<template>
	<footer class="flex flex-col bg-[var(--color-black1)] overflow-hidden" v-if="data">
		<slot>
			<div class="px-[7vw] py-[2vw] pb-[3vw] max-phoneX:pt-[5vw] border-t-[3px] border-white flex flex-col gap-16 items-center">
				<div class="flex flex-col gap-7">
					<h2 class="text-white text-3xl font-bold font-mont text-center max-phoneX:text-[26px]" v-html="contactData.title"></h2>
				
					<Button class="gap-5">
						<img :src="iconCollIcon" alt="" class="h-5">
						<span class="text-base text-white font-semibold font-[Arial] tracking-wide max-phoneX:text-[10px]" v-html="contactData.phone"></span>
					</Button>
				</div>
				

				<div class="flex flex-col gap-7 items-center w-full">
					<h3 class="text-xl text-white font-normal font-[Arial] max-phoneX:text-[13px]" v-html="contactData.input_title"></h3>

					<div ref="ninjaForm" class="max-w-[48.125rem] w-full relative"></div>
				</div>
			</div>

			<div class="px-[7vw] py-[2vw] pb-[4vw] max-phoneX:py-[5vw] border-t-[3px] border-white w-full flex flex-col gap-20">
				<div class="flex flex-col gap-8">
					<a href="/">
						<img v-if="logo" :src="logo.url" alt="" class="w-[10rem] select-none" draggable="false">
					</a>

					<div class="grid grid-cols-3">
						<div class="flex flex-col gap-4" v-for="menu in menuList" :key="menu">
							<h2 class="text-white text-base font-[Arial] font-semibold cursor-default" v-if="menu.title">{{ menu.title }}</h2>

							<ul class="flex flex-col gap-4">
								<li v-for="item in menu.list" :key="item">
									<a :href="item.link.url" v-if="item.link" class=" text-white text-base font-normal font-[Arial] cursor-default">{{ item.text }}</a>
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
								<a :href="item.link.url">
									<img v-if="item.image" :src="item.image.url" alt="" class="select-none max-w-[2.875rem] object-contain" draggable="false">
								</a>
							</template>

							<img v-else-if="item.image" :src="item.image.url" alt="" class="select-none max-w-[2.875rem] object-contain" draggable="false">
						</li>
					</ul>
				</div>

				<div class="flex justify-center items-center px-11" v-if="info">
					<span class="text-white text-base font-[Arial] font-normal text-center" v-html="info"></span>
				</div>
			</div>
		</slot>
	</footer>
</template>

<script setup lang="ts">
import Button from "@/Ui/Button.vue";
import Input from "@/Ui/Input.vue";
import iconCollIcon from "@/Assets/Icons/icon_coll.svg";
import SendIcon from "../Widgets/Footer/Assets/SendIcon.vue";
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
	info: string,
	social: Array<ImageInterface>
}>(() => (store.state.footer as StateInterface).data?.footer);

const contactData = computed<{
	title: string
	input_title: string,
	phone: string,
}>(() => (store.state.footer as StateInterface).data?.contact_us);

const socialList = computed(() => data.value?.social ?? []);
const menuList = computed(() => data.value?.menu ?? []);
const info = computed(() => data.value?.info);
const logo = computed(() => data.value?.logo);

/* const formTemplate = computed<string>(() => atob((store.state.pageInfo as PageInfoStateInterface)?.formHtml ?? '')); */

let isInitData = ref(false);
let ninjaForm = ref(null);

watch(ninjaForm, () => { // init Form
	const form = document.getElementById('ninjaForm1');
	if(form === null) {
		return;
	}
	form.removeAttribute('hidden');
	(ninjaForm.value as HTMLElement).append(form);
});

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
	max-width: 48.125rem;
	border-radius: 6.25rem!important;
	padding-top: 0.8rem;
    padding-bottom: 0.9rem;
	padding-left: 2rem;
	padding-right: 6.875rem;
	color: var(--color-silver1);
	font-size: 1rem;
    line-height: 1.75rem;
	font-family: Arial;
	background: transparent;
}

html[dir="rtl"] input.ninja-forms-field[type='email'] {
	padding-right: 2rem;
	padding-left: 6.875rem;
}

input.ninja-forms-field[type='submit'] {
	width: 1.875rem;
	height: 1.875rem;
	display: flex;
	align-items: center;
	justify-content: center;
	background: var(--color-violet1);
	color: white;
	height: auto;
	padding: 0.625rem;
	padding-left: 1.25rem;
	padding-right: 1.25rem;
	border-radius: 1.875rem;
	transition: 500ms;
}

input.ninja-forms-field[type='submit']:hover {
	filter: brightness(115%);
}

.nf-form-fields-required {
	display: none;
}

.nf-field-container.submit-container {
	position: absolute;
    margin: 0;
    right: 0.625rem;
    display: flex;
    align-items: center;
    justify-content: end;
    height: 3.75rem;
	max-height: 3.75rem;
}

html[dir="rtl"] .nf-field-container.submit-container {
	right: auto;
	left: -0.75rem
}

.nf-field-container.email-container {
	width: 100%!important;
}

.nf-response-msg {
    text-align: center;
    color: white;
}
</style>

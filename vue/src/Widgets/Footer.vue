<template>
	<footer class="flex flex-col bg-[var(--color-black1)] overflow-hidden" v-if="data" :style="`--form-send-icon-url: url(${sendIcon});`">
		<slot>
			<div class="px-[8.375rem] py-[1.8rem] pb-[2.7rem] max-phoneX:px-0 border-t-[3px] max-phoneX:mx-[1.88rem] border-white flex flex-col gap-16 items-center">
				<div class="flex flex-col gap-7 max-phoneX:gap-12">
					<h2 class="text-white text-3xl font-bold font-mont text-center max-phoneX:text-[26px] rtl:font-normal" v-html="contactData.title"></h2>
				
					<Button class="gap-5">
						<a :href="`tel:${contactData.phone}`" class="flex gap-5 max-phoneX:py-[1.1875rem] max-phoneX:px-[1.1875rem] max-phoneX:pl-[1rem]">
							<img :src="iconCollIcon" alt="" class="h-5 max-phoneX:h-[1.96rem]">
							<span class="text-base text-white font-semibold font-[Arial] tracking-wide max-phoneX:text-[1.5rem]" v-html="contactData.phone"></span>
						</a>
					</Button>
				</div>
				

				<div class="flex flex-col gap-7 items-center w-full">
					<h3 class="text-xl text-white font-normal font-[Arial] max-phoneX:text-[1.5rem]" v-html="contactData.input_title"></h3>
					<div ref="ninjaForm" class="max-w-[48.125rem] w-full relative"></div>
				</div>
			</div>

			<div class="px-[8.375rem] py-[1.8rem] pb-[3.6rem] max-phoneX:py-[4.5rem] max-phoneX:w-auto max-phoneX:px-0 max-phoneX:mx-[1.88rem] border-t-[3px] border-white w-full flex flex-col gap-20">
				<div class="flex flex-col gap-8">
					<a href="/" class="max-phoneX:self-center">
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

const sendIcon = computed(() => SendIcon);

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
	height: 3.4375rem!important;
	border: 3px solid white!important;
	max-width: 48.125rem!important;
	border-radius: 6.25rem!important;
	padding-top: 0.8rem!important;
    padding-bottom: 0.9rem!important;
	padding-left: 2rem!important;
	padding-right: 6.875rem!important;
	color: var(--color-silver1);
	font-size: 1rem!important;
    line-height: 1.75rem!important;
	font-family: Arial!important;
	background: transparent!important;
}

html[dir="rtl"] input.ninja-forms-field[type='email'] {
	padding-right: 2rem!important;
	padding-left: 6.875rem!important;
}

input.ninja-forms-field[type='submit'] {
	/* width: 1.875rem!important; */
	height: 1.875rem!important;
	display: flex!important;
	align-items: center!important;
	justify-content: center!important;
	background: var(--color-violet1)!important;
	color: white!important;
	height: auto!important;
	padding: 0.525rem!important;
	padding-left: 1.25rem!important;
	padding-right: 1.25rem!important;
	border-radius: 1.875rem!important;
	transition: 500ms!important;
	font-size: 1rem!important;
}

input.ninja-forms-field[type='submit']:hover {
	filter: brightness(115%)!important;
}

.nf-error.field-wrap .nf-field-element:after {
	background: #e80000!important;
    color: #fff!important;
    font-family: 'FontAwesome'!important;
    font-size: 1.25rem!important;
    content: "\f12a"!important;
    position: absolute!important;
    top: 0.25rem!important;
    right: -2.75rem!important;
    bottom: 1px!important;
    height: 2.5rem!important;
    width: 2.5rem!important;
    line-height: 3.125rem!important;
    text-align: center;
    transition: all .5s;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* 
	background: #e80000;
    color: #fff;
    font-family: FontAwesome;
    font-size: 20px;
    content: "\f1d8";
    position: absolute;
    top: 1px;
    right: -65px;
    bottom: 1px;
    height: 40px;
    width: 40px;
    line-height: 50px;
    text-align: center;
    transition: all .5s;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
*/

.nf-form-fields-required {
	display: none!important;
}

.nf-field-container.submit-container {
	position: absolute!important;
    margin: 0!important;
    right: 0.7625rem!important;
	top: 0.7625rem!important;
    display: flex!important;
    align-items: center!important;
    justify-content: end!important;
}

html[dir="rtl"] .nf-field-container.submit-container {
	right: auto!important;
	left: 0.75rem!important;
}

.nf-field-container.email-container {
	width: 100%!important;
}

.nf-response-msg {
    text-align: center!important;
    color: white!important;
}

.nf-field-label {
	display: none!important;
}
</style>

<template>
	<header class="flex justify-between bg-[var(--color-black1)] sticky top-0 z-50">
		<div class="min-h-[5.6875rem] w-full flex justify-between px-[4vw]">
			<a href="/" class="self-center">
				<img :src="logo.url" v-if="logo" alt="" class=" max-w-[12.5rem] object-contain max-phoneX:max-w-[9.125rem]" draggable="false">
			</a>

			<div class="flex items-center justify-end">

				<div v-if="ButtonCountry && ButtonCountry.is_active" class="relative">
					<Button class="bg-transparent gap-2" @click="countryMenuIsOpen = !countryMenuIsOpen">
						<span class="text-white text-base font-[Arial] font-normal underline">{{ ButtonCountry.text }}</span>
						<ArrowIcon class="trasition duration-500 rotate-90" :class="{ '!rotate-0':countryMenuIsOpen }"></ArrowIcon>
					</Button>

					<Transition name="fade-top">
					<div class="absolute z-[51] px-5 py-3 bg-[var(--color-black1)] rounded-2xl right-0 min-w-max" v-if="countryMenuIsOpen" v-click-outside="clickOutsideCountry">
						<ul class="flex flex-col gap-2">
							<li v-for="item in countryList" :key="item" class="max-w-max transition duration-300 hover:scale-105">
								<a :href="item.link.url" class="flex gap-3 cursor-default">
									<img v-if="item.image" :src="item.image.url" alt="" class="h-5 object-contain">
									<span class="text-white text-base font-normal font-[Arial] ">{{ item.title }}</span>
								</a>
							</li>
						</ul>
					</div>
					</Transition>
				</div>

				<a :href="ButtonLogin.link.url" v-if="ButtonLogin && ButtonLogin.is_active">
					<Button class="bg-transparent">
						<span class="text-white text-base font-[Arial] font-normal underline">{{ ButtonLogin.text }}</span>
					</Button>
				</a>

				<a :href="buttonSignUp.link.url" v-if="buttonSignUp && buttonSignUp.is_active">
					<Button class="bg-transparent">
						<span class="text-white text-base font-[Arial] font-normal underline">{{ buttonSignUp.text }}</span>
					</Button>
				</a>

				<Button class="bg-transparent max-w-[4.0625rem]" @click="menuIsOpen = !menuIsOpen">
					<MenuIcon v-if="!menuIsOpen"></MenuIcon>
					<MenuIconClose v-else></MenuIconClose>
				</Button>

				<div v-if="curentLang" class="relative">
					<Button class="bg-transparent gap-2" @click="langMenuIsOpen = !langMenuIsOpen">
						<span class="text-white text-base font-[Arial] font-normal underline uppercase">{{ curentLang.slug }}</span>
						<ArrowIcon class="trasition duration-500 rotate-90" :class="{ '!rotate-0':langMenuIsOpen }"></ArrowIcon>
					</Button>

					<Transition name="fade-top">
					<div class="absolute z-[51] px-5 py-3 bg-[var(--color-black1)] rounded-2xl right-0 min-w-max left-0" v-if="langMenuIsOpen" v-click-outside="clickOutsideLang">
						<ul class="flex flex-col gap-2">
							<li v-for="item in langListFiltered" :key="item" class="max-w-max transition duration-300 hover:scale-105">
								<div class="flex gap-3">
									<!-- <img :src="item.flag" alt="" class="h-5 object-contain"> -->
									<a :href="item.url" class="text-white text-base font-normal font-[Arial] cursor-default uppercase" :class="{ 'font-medium':item.current_lang }">{{ item.slug }}</a>
								</div>
							</li>
						</ul>
					</div>
					</Transition>
				</div>
			</div>
		</div>

		<Teleport to="body">
		<Transition name="fade-top">
			<div class="fixed bg-black/70 w-full h-[calc(100%_-_5.6875rem)] bottom-0 z-50" v-if="menuIsOpen">
				<div class="w-full h-full flex items-center justify-center gap-28 px-[7vw] py-[10vw] max-md:items-start max-md:flex-col max-md:justify-start" v-click-outside="clickOutside">
					<ul class="flex flex-col gap-8"  v-if="menu" v-click-outside="clickOutside">
						<TransitionGroup name="popup">
						<li v-for="item in menu" :key="item" class="transition duration-500 hover:translate-x-3 group">
							<a :href="item.link.url" class="text-white text-4xl font-medium font-mont uppercase transition duration-500 group-hover:text-gray-200 cursor-default">{{ item.title }}</a>
						</li>
						</TransitionGroup>
					</ul>

					<ul class="flex flex-col gap-8" v-if="menuTwo" v-click-outside="clickOutside">
						<TransitionGroup name="popup">
						<li v-for="item in menuTwo" :key="item" class="transition duration-500 hover:translate-x-3 group">
							<a :href="item.link.url" class="text-white text-4xl font-bold font-mont uppercase transition duration-500 group-hover:text-gray-200 cursor-default">{{ item.title }}</a>
						</li>
						</TransitionGroup>
					</ul>
				</div>
			</div>
		</Transition>
		</Teleport>
	</header>
</template>

<script setup lang="ts">
/* eslint-disable */
import vClickOutside from "../Service/ClickOutside";
import ArrowIcon from "../Widgets/Header/Assets/ArrowIcon.vue";
import MenuIcon from "../Widgets/Header/Assets/MenuIcon.vue";
import MenuIconClose from "../Widgets/Header/Assets/MenuIconClose.vue";
import Button from "@/Ui/Button.vue";
import { computed, onMounted, ref, watch } from "vue";
import { useStore } from "vuex";
import { RootStateInterface } from "../Store";
import StateInterface from "../Store/Modules/Header/StateInterface";
import PageInfoStateInterface from "../Store/Modules/PageInfo/StateInterface";
import LinkInterface from "../Entity/LinkInterface";
import ImageInterface from "../Entity/ImageInterface";
import LangInterface from "../Entity/LangInterface";
import ButtonInterface from "../Entity/ButtonInterface";

const store = useStore<RootStateInterface>();
const data = computed<{
	button_country: ButtonInterface,
	button_login: ButtonInterface,
	button_sign_up: ButtonInterface,
	button_lang: ButtonInterface,
	lang: {
		ar: LangInterface,
		en: LangInterface
	},
	logo: ImageInterface,
	menu: Array<{
		title: string,
		link: LinkInterface
	}>,
	menu_two: Array<{
		title: string,
		link: LinkInterface
	}>,
	country_list: Array<{
		title: string,
		link: LinkInterface,
		image: ImageInterface
	}>
}>(() => (store.state.header as StateInterface).data);
const pageId = computed(() => (store.state.pageInfo as PageInfoStateInterface).pageId);
const logo = computed(() => data.value?.logo);
const ButtonCountry = computed(() => data.value?.button_country);
//const ButtonLang = computed(() => data.value?.button_lang);
const ButtonLogin = computed(() => data.value?.button_login);
const buttonSignUp = computed(() => data.value?.button_sign_up);
const menu = computed(() => data.value?.menu ?? []);
const menuTwo = computed(() => data.value?.menu_two ?? []);
const countryList = computed(() => data.value?.country_list ?? []);
const langList = computed(() => data?.value?.lang);
const curentLang = computed(() => Object.values(langList?.value ?? {}).find((i: LangInterface) => i?.current_lang));
const langListFiltered = computed(() => Object.values(langList?.value ?? {}).filter(i => !i.current_lang));

let menuIsOpen = ref(false);
let langMenuIsOpen = ref(false);
let countryMenuIsOpen = ref(false);
let isInitData = ref(false);

watch(menuIsOpen, () => {
	const main = document.querySelector('main');
	const footer = document.querySelector('footer');

	if(menuIsOpen.value) {
		main.classList.add('body-blur');
		footer.classList.add('body-blur');
		return;
	}

	main.classList.remove('body-blur');
	footer.classList.remove('body-blur');
})

watch(pageId, () => {
	if(!isInitData.value) {
		store.dispatch('header/getData', {
			// eslint-disable-next-line
			'action': 'getData',
			'page-name': 'header-setup',
			'page-id': pageId.value
		});

		isInitData.value = true;
	}
}, { flush: "post" }); 


function clickOutside() {
	menuIsOpen.value = false;
}

function clickOutsideLang() {
	langMenuIsOpen.value = false;
}

function clickOutsideCountry() {
	countryMenuIsOpen.value = false;
}
</script>

<style>
.body-blur {
	transition: 300ms;
	filter: blur(10px);
}
</style>
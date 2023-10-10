<template>
	<div class="bg-[var(--color-black1)] min-h-screen relative" v-if="pageInfo">
		<Light1 class="absolute top-0 left-0 animate-pulse"></Light1>
		<Light2 class="absolute top-0 left-0 animate-pulse"></Light2>
		<Light3 class="absolute bottom-[-26.75rem] right-0 animate-pulse"></Light3>

		<div class="px-[8.375rem] py-[4.5rem] flex flex-col gap-11 max-phoneX:gap-11">

			<div class="flex flex-col gap-14 max-phoneX:gap-11" v-show="newsList">
				<div class="grid grid-cols-[auto_23.125rem] gap-6 w-full max-phoneX:grid-cols-1 max-phoneX:gap-11">
					<div>
						<NewsItem class="image-max"
							:item="newsFirst"
						></NewsItem>
					</div>

					<div class="flex flex-col gap-10 max-phoneX:gap-11 text-[13px] relative pl-6 max-phoneX:!p-0 max-phoneX:!pt-11
						before:content-normal before:w-[3px] before:absolute before:bg-white before:rounded-lg before:h-[92%] before:left-0
						max-phoneX:before:h-[3px] max-phoneX:before:top-0 max-phoneX:before:w-full
						rtl:pl-[unset] rtl:pr-6 rtl:before:left-auto rtl:before:right-0
					">
						<NewsItem 
							:item="newsTwo"
						></NewsItem>

						<NewsItem
							:item="newsThree"
						></NewsItem>
					</div>
				</div>

				<ul class="grid grid-cols-3 grid-flow-row gap-10 gap-y-14 max-phoneX:grid-cols-2 max-phoneX:flex max-phoneX:flex-col max-phoneX:gap-11 relative pt-14
					before:content-normal before:h-[3px] before:absolute before:bg-white before:rounded-lg before:w-full before:left-0
				">
					<TransitionGroup>
						<li v-for="item in list" :key="item" refs="itemsListAnim" class="max-phoneX:first:pt-7">
							<NewsItem class="text-[0.8125rem]"
								:item="item"
							></NewsItem>
						</li>
					</TransitionGroup>
				</ul>
			</div>

			<Button class="bg-transparent self-center !p-0 z-10" v-if="button?.is_active" @click="loadMore" :class="{ 'opacity-20':isMaxPostLoad}">
				<span class="text-white text-3xl font-bold font-mont underline text-center">{{ button.text }}</span>
			</Button>
		</div>
	</div>
</template>

<script setup lang="ts">
import Light1 from "@/Widgets/News/Assets/Light1.vue";
import Light2 from "@/Widgets/News/Assets/Light2.vue";
import Light3 from "@/Widgets/News/Assets/Light3.vue";

import Button from "@/Ui/Button.vue";
import { computed, onMounted, ref, watch, watchEffect } from "vue";
import NewsItem from "@/Widgets/News/News.vue";
import NewsPageDataInterface from "../Entity/NewsPageDataInterface";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useStore } from "vuex";
import { RootStateInterface } from "../Store";
import StateInterface from "../Store/Modules/PageInfo/StateInterface";
import PostStateInterface from "../Store/Modules/Post/StateInterface";
import PageDataStateInterface from "../Store/Modules/PageData/StateInterface";
import ImageInterface from "../Entity/ImageInterface";
import ButtonInterface from "../Entity/ButtonInterface";
gsap.registerPlugin(ScrollTrigger);

const store = useStore<RootStateInterface>();
const pageInfo = computed<StateInterface>(() => store.state.pageInfo);

const pageData = computed<PageDataStateInterface>(() => store.state.pageData);
const newsList = computed<Array<NewsPageDataInterface>>(() => (store.state.post as PostStateInterface<NewsPageDataInterface>).postList);
const newsTotalCount = computed<number>(() => (store.state.post as PostStateInterface).totalCount);
const list = computed(() => newsList.value.filter(i => i !== newsFirst.value && i !== newsTwo.value && i !== newsThree.value));
const isMaxPostLoad = computed(() => newsList.value.length === newsTotalCount.value);

const button = computed<ButtonInterface>(() => pageData.value.data?.button);

const newsFirst = computed<NewsPageDataInterface>(() => newsList?.value[0] || null);
const newsTwo = computed<NewsPageDataInterface>(() => newsList?.value[1] || null);
const newsThree = computed<NewsPageDataInterface>(() => newsList?.value[2] || null);

let isInitData = ref(false);
let curentPageNum = ref(1);
let postCount = ref(6);

watch(pageInfo.value, () => {
	if(!isInitData.value) {
		store.dispatch('pageData/getPageData', {
			// eslint-disable-next-line
			'action': 'getData',
			'page-name': pageInfo.value.pageName,
			'page-id': pageInfo.value.pageId
		});

		store.dispatch('post/getPostList', {
			// eslint-disable-next-line
			'action': 'getPostList',
			'post-type': 'news-post',
			'post-count': postCount.value,
			'page-num': curentPageNum.value,
		});

		isInitData.value = true;
	}
});

watchEffect(() => {
	animateItemList();
}, { flush: "post" });

function loadMore() {
	if(isMaxPostLoad.value) {
		return;
	}
	
	curentPageNum.value++;

	store.dispatch('post/addPostList', {
		// eslint-disable-next-line
		'action': 'getPostList',
		'post-type': 'news-post',
		'post-count': postCount.value,
		'page-num': curentPageNum.value,
	});
}

function animateItemList() {
	const elem = Array.from(document.querySelectorAll<HTMLElement>('[refs="itemsListAnim"]'));

	gsap.utils.toArray<HTMLElement>(elem).forEach((element, i) => {
		gsap.fromTo(element, {
			opacity: 0,
			y: '50px',
		},{
			opacity: 1,
			autoAlpha: 1,
			delay: i * 0.25,
			duration: 2,
			y: '0',
			ease: 'power4.out',
			scrollTrigger: {
				trigger: element,
				start: 'top 100%',
				end: 'bottom bottom',
				toggleActions: "play none none reset",
			},
		});
	});
}
</script>

<style>
.image-max .news-image {
	max-height: none;
    height: auto;
}
</style>
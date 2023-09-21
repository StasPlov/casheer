<template>
    <Header v-if="post"
		:image="postImage"
	></Header>

    <Content v-if="post"
		:post="post"
		:button="button"
	></Content>
</template>

<script setup lang="ts">
import Header from "../Widgets/NewsPost/Header.vue";
import Content from "../Widgets/NewsPost/Content.vue";
import { RootStateInterface } from "../Store";
import StateInterface from "../Store/Modules/PageInfo/StateInterface";
import PageDataStateInterface from "../Store/Modules/PageData/StateInterface";
import { useStore } from "vuex";
import { computed, ref, watch } from "vue";
import ButtonInterface from "../Entity/ButtonInterface";
import NewsPageDataInterface from "../Entity/NewsPageDataInterface";
import PostStateInterface from "../Store/Modules/Post/StateInterface";
import ImageInterface from "../Entity/ImageInterface";

const store = useStore<RootStateInterface>();
const pageInfo = computed<StateInterface>(() => store.state.pageInfo);
const pageData = computed<PageDataStateInterface>(() => store.state.pageData);

const post = computed<NewsPageDataInterface>(() => (store.state.post as PostStateInterface<NewsPageDataInterface>).postList[0] || undefined);
const postImage = computed<ImageInterface>(() => post?.value?.data?.image);
const button = computed<ButtonInterface>(() => pageData?.value?.data?.button);

let isInitData = ref(false);

watch(pageInfo.value, () => {
	if(!isInitData.value) {
		store.dispatch('pageData/getPageData', {
			// eslint-disable-next-line
			'action': 'getData',
			'page-name': 'news',
			'page-id': 641
		});

		store.dispatch('post/getPostList', {
			// eslint-disable-next-line
			'action': 'getPostList',
			'post-id': pageInfo.value.pageId,
		});

		isInitData.value = true;
	}
});
</script>

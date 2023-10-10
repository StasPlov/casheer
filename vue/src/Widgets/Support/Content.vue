<template>
	<div class="bg-[var(--color-black1)] min-h-screen" v-if="list">
		<div class="px-[8.375rem]">
			<ul class="flex flex-col gap-20">
				<li v-for="item in contentList" :key="item" class="z-10">
					<Item
						:title="item.title"
						:description="item.description"
						:question-list="item.question_list"
					></Item>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup lang="ts">
import Item from "./Item/Item.vue";
import { computed, ref, watch } from "vue";
import ItemInterface from "./Type/ItemInterface";
import { RootStateInterface } from "../../Store";
import PageDataStateInterface from "../../Store/Modules/PageData/StateInterface";
import { useStore } from "vuex";
import SupportStateInterface from "../../Store/Modules/Support/StateInterface";

const store = useStore<RootStateInterface>();
const pageData = computed<PageDataStateInterface>(() => store.state.pageData);

const list = computed<Array<ItemInterface>>(() => pageData.value.data?.content);
let listIsInit = ref(false);

watch(list, () => {
	if(!listIsInit.value) {
		store.commit('support/setPostList', list.value);
		listIsInit.value = true;
	}
});

const contentList = computed(() => (store.state.support as SupportStateInterface<ItemInterface>).postList);
</script>
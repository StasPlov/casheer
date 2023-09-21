<template>
	<div class="bg-[var(--color-black1)] min-h-screen">
		<div class="px-[7vw]">
			<ul class="flex flex-col gap-20">
				<li v-for="item in list" :key="item" class="z-10">
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
import { computed } from "vue";
import ItemInterface from "./Type/ItemInterface";
import { RootStateInterface } from "../../Store";
import PageDataStateInterface from "../../Store/Modules/PageData/StateInterface";
import { useStore } from "vuex";
import ButtonInterface from "../../Entity/ButtonInterface";

const store = useStore<RootStateInterface>();
const pageData = computed<PageDataStateInterface>(() => store.state.pageData);

const list = computed<Array<ItemInterface>>(() => pageData.value.data?.content);
</script>
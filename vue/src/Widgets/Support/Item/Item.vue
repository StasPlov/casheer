<template>
	<div class="grid grid-cols-2 gap-16 max-md:grid-cols-1">
		<div class="flex flex-col gap-5">
			<h2 class="text-[var(--color-arctic1)] text-4xl font-normal font-[Arial]" v-html="title"></h2>
			<span class="text-white text-sm font-normal font-[Arial]" v-html="description"></span>
		</div>

		<ul class="flex flex-col gap-0">
			<li v-for="item in list" :key="item" class="py-10 border-b border-solid border-[var(--color-arctic1)] first:border-t">
				<Dropdown class="z-10" 
					:item="item"
					:use-open-close="true"
					:margin-top="'2.5rem'"
					@selectItem="open"
				>
					<template #text>
						<div class="flex justify-between items-center gap-2">
							<span class="text-white text-2xl font-[Arial] font-normal leading-normal" v-html="item.item.title"></span>
							
							<OpenButton v-if="!item.isActive"></OpenButton>
							<CloseButton v-else></CloseButton>
						</div>
					</template>
					
					<template #content>
						<span class="text-white text-lg font-[Arial] font-normal leading-tight" v-html="item.item.answer"></span>
					</template>
				</Dropdown>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import OpenButton from "./Assets/OpenButton.vue";
import CloseButton from "./Assets/CloseButton.vue";
import Dropdown from "@/Ui/Dropdown/Dropdown.vue";
import QuestionInterface from "../Type/QuestionInterface";
import { defineProps, onMounted, ref, watch } from "vue";
import ItemInterface from "../../../Ui/Dropdown/Type/ItemInterface";

const props = defineProps<{
	title: string;
	description: string;
	questionList: Array<QuestionInterface>;
}>();

let list = ref<Array<ItemInterface>>([]);
let listIsInit = ref(false);

onMounted(() => {
	if(!listIsInit.value) {
		initList();
		listIsInit.value = true;
	}
});

function initList(active: QuestionInterface | undefined = undefined) {
	list.value = props.questionList.map((element, i) => {
		const isActive = (active && active === element) ? true : (active === undefined) ? i === 0 : false; // first item is active set
		return {
			isActive: isActive,
			item: element
		}
	});

	/* itemSelect.value = list.value.find(i => i.isActive); */

	/* imageSelect.value = itemSelect.value.item?.image;
	imageBgSelecet.value = itemSelect.value.item?.background; */

	/* animatePhone(); */
}

function open(item: ItemInterface) {
	item.isActive = !item.isActive;
}
</script>
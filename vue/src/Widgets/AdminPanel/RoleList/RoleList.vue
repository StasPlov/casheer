<template>
	<div class="flex flex-col gap-10">
		<div class="flex flex-row gap-5">		
			<Panel class="bg-transparent" :class="{ 'opacity-50':!haveSelected }"
				:title="'Удаление'"
				:description="'Удаление роли'"
				:iconClass="'bg-[#DC3546] text-white'"
			>
				<template #icon>
					<i class="fa-solid fa-trash-can"></i>
				</template>
			</Panel>
		</div>

		<Table>
			<Header class="grid-cols-6">
				<Checkbox class="opacity-50" v-model="isSelect" @update:modelValue="selectAll"></Checkbox>
				<span class="text-[#263238] text-base font-bold">Название</span>
				<span class="text-[#263238] text-base font-bold">Описание</span>
				<span class="text-[#263238] text-base font-bold">Breadcrumb</span>
				<span class="text-[#263238] text-base font-bold">Родительская категория</span>
				<span class="text-[#263238] text-base font-bold">Статус</span>
			</Header>
			
			<Body class="grid-cols-6">
				<Item class="grid grid-cols-6" v-for="item in list" :isActive="item.isActive" :key="item.module.id">
					<Checkbox class="opacity-50 transition" :class="{ 'filter invert !opacity-100':item.isActive }" v-model="item.isActive"></Checkbox>
					<span class="transition text-base text-[#263238]" :class="{ 'text-white':item.isActive }">{{ item.module.title }}</span>
					<span class="transition text-base text-[#263238]" :class="{ 'text-white':item.isActive }">{{ item.module.description }}</span>
					<span class="transition marker:text-base text-[#263238]" :class="{ 'text-white':item.isActive }">{{ item.module.breadcrumb }}</span>
					<div class="flex gap-2">
						<div class="px-4 py-1 rounded-2xl bg-[#6097ea]" v-if="item.module.parent">
							<span class="transition text-sm text-white" :class="{ 'text-white':item.isActive }">{{ item.module.parent?.title}}</span>		
						</div>
					</div>
					<div class="flex gap-2">
						<Status
							:module="item.module"
						></Status>
					</div>
				</Item>
			</Body>
		</Table>
	</div>
</template>

<script setup lang="ts">

import Table from "@/Components/Table/Table.vue";
import Header from "@/Components/Table/TableHeader.vue";
import Body from "@/Components/Table/TableBody.vue";
import Item from "@/Components/Table/TableItem.vue";
import Content from "@/Components/Table/TableContent.vue";

import Panel from "@/Ui/Panel.vue";
import Checkbox from "@/Ui/Checkbox.vue";
import { RootStateInterface } from "@/Store";
import { computed, reactive, ref, WritableComputedRef } from "vue";
import { useStore } from "vuex";
import StateInterface from "@/Store/Modules/Module/StateInterface";
import Status from "./Components/Status.vue";
import ModuleInterface from "@/Entity/ModuleInterface";

let isSelect = ref(false);
const store = useStore<RootStateInterface>();
const roleList = computed(() => (store.state.module as StateInterface).moduleList);
const list = ref((() => {
	const result = [];
	for (const iterator of moduleList.value) {
		result.push({
			isActive: false,
			module: iterator
		});
	}
	return result;
})());

const haveSelected = computed(() => list.value.filter(i => i.isActive).length);


function selectAll(value: boolean) {
	list.value.forEach(element => {
		element.isActive = value;
	});
}
</script>
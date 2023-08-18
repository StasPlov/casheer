<template>
	<div class="flex flex-col gap-10">
		<div class="flex flex-row gap-5">
			<Panel
				:title="'Добавить'"
				:description="'Добавить новый модуль'"
				:iconClass="'bg-[var(--color-green1)] text-white'"
			>
				<template #icon>
					<i class="fa-solid fa-plus"></i>
				</template>
			</Panel>
			
			<Panel :class="{ 'opacity-50':!haveSelected }"
				:title="'Удаление'"
				:description="'Удаление модуля'"
				:iconClass="'bg-[#DC3546] text-white'"
			>
				<template #icon>
					<i class="fa-solid fa-trash-can"></i>
				</template>
			</Panel>

			<Panel :class="{ 'opacity-50':!haveSelected }"
				:title="'Скрыть'"
				:description="'Скрыть модуль с панели'"
				:iconClass="'bg-[#F9D62C] text-white'"
			>
				<template #icon>
					<i class="fa-regular fa-eye-slash"></i>
				</template>
			</Panel>
		</div>

		<Table>
			<Header class="grid-cols-7">
				<Checkbox class="opacity-50 !text-lg" v-model="isSelect" @update:modelValue="selectAll"></Checkbox>
				<span class="text-gray-700 text-sm font-bold">Название</span>
				<span class="text-gray-700 text-sm font-bold">Описание</span>
				<span class="text-gray-700 text-sm font-bold">Breadcrumb</span>
				<span class="text-gray-700 text-sm font-bold">Родительская категория</span>
				<span class="text-gray-700 text-sm font-bold">Статус</span>
				<span class="text-gray-700 text-sm font-bold">Действия</span>
			</Header>
			
			<Body>
				<Item class="grid grid-cols-7" v-for="item in list" :isActive="item.isActive" :key="item.module.id" :class="{ 'opacity-50':item.module.isDelete && !item.isActive }">
					<Checkbox class="opacity-50 !text-lg" :class="{ 'filter invert !opacity-100':item.isActive }" v-model="item.isActive"></Checkbox>
					<span class="transition text-sm text-gray-900 font-semibold" :class="{ '!text-white':item.isActive }">{{ item.module.title }}</span>
					<span class="transition text-sm text-gray-900" :class="{ '!text-white':item.isActive }">{{ item.module.description }}</span>
					<span class="transition text-sm text-gray-500" :class="{ '!text-white':item.isActive }">{{ item.module.breadcrumb }}</span>
					<div class="flex gap-2">
						<ModuleBlock v-if="item.module.parent"
							:text="item.module.parent?.title"
							:subClass="{ 'text-white':item.isActive }"
						></ModuleBlock>

						<ModuleBlock class="bg-[var(--color-silver4)]" v-else
							:text="`Нет категории`"
							:subClass="{ 'text-white':item.isActive }"
						></ModuleBlock>
					</div> 
					<div class="flex gap-2">
						<Status
							:module="item.module"
						></Status>
					</div>
					<div>
						<RouterLink :to="{ name: 'setup-module-edit', query: { id: item.module.id } }">
							<Button class="bg-[var(--color-violet2)]" :class="{ 'brightness-90':item.isActive }">
								<i class="fa-regular fa-pen-to-square"></i>
							</Button>
						</RouterLink>
					</div>
				</Item>
			</Body>
		</Table>
	</div>
</template>

<script setup lang="ts">
import Button from "@/Ui/Button.vue";
import Table from "@/Components/Table/Table.vue";
import Header from "@/Components/Table/TableHeader.vue";
import Body from "@/Components/Table/TableBody.vue";
import Item from "@/Components/Table/TableItem.vue";
import Content from "@/Components/Table/TableContent.vue";
import ModuleBlock from "../Components/ModuleBlock.vue";

import Panel from "@/Ui/Panel.vue";
import Checkbox from "@/Ui/Checkbox.vue";
import { RootStateInterface } from "@/Store";
import { computed, reactive, ref, watch, WritableComputedRef } from "vue";
import { useStore } from "vuex";
import StateInterface from "@/Store/Modules/Module/StateInterface";
import Status from "./Components/Status.vue";
import ModuleInterface from "@/Entity/ModuleInterface";
import router from "@/router";

interface WrapperInterface {
	isActive: boolean;
	module: object;
}

let isSelect = ref(false);
const list = ref([] as Array<WrapperInterface>);
const store = useStore<RootStateInterface>();
const haveSelected = computed(() => list.value.filter(i => i.isActive).length);
const moduleList = computed(() => (store.state.module as StateInterface).moduleList);

createList();

watch(moduleList, () => {
	createList();
})

function selectAll(value: boolean) {
	list.value.forEach(element => {
		element.isActive = value;
	});
}

function createList() {
	list.value = [];
	moduleList.value.forEach(i => { 
		list.value.push({ 
			isActive: false, 
			module: i
		} as WrapperInterface);
	});
}
</script>
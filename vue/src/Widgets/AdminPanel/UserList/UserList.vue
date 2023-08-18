<template>
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
		<Header class="grid-cols-6">
			<Checkbox class="opacity-50" v-model="isSelect" @update:modelValue="selectAll"></Checkbox>
			<span class="text-[#263238] text-base font-bold">Логин</span>
			<span class="text-[#263238] text-base font-bold">Роли</span>
			<span class="text-[#263238] text-base font-bold">E-mail</span>
			<span class="text-[#263238] text-base font-bold">Включен/Выключен</span>
			<span class="text-[#263238] text-base font-bold">Действия</span>
		</Header>
		
		<Body>
			<Item class="grid grid-cols-7" v-for="item in list" :isActive="item.isActive" :key="item.user.id" :class="{ 'opacity-50':!item.user.isEnable && !item.isActive }">
				<Checkbox class="opacity-50 transition" :class="{ 'filter invert !opacity-100':item.isActive }" v-model="item.isActive"></Checkbox>
				<span class="transition text-base text-[#263238]" :class="{ 'text-white':item.isActive }">{{ item.user.username }}</span>
				<span class="transition text-base text-[#263238]" :class="{ 'text-white':item.isActive }">{{ item.user.title }}</span>
				<span class="transition marker:text-base text-[#263238]" :class="{ 'text-white':item.isActive }">{{ item.user.mail }}</span>
				<!-- <div>
					<RouterLink :to="{ name: 'setup-module-edit', query: { id: item.module.id } }">
						<Button class="bg-[var(--color-violet2)]" :class="{ 'brightness-90':item.isActive }">
							<i class="fa-regular fa-pen-to-square"></i>
						</Button>
					</RouterLink>
				</div> -->
			</Item>
		</Body>
	</Table>


	<!-- <div class="flex flex-col w-full gap-[1.875rem]">
		<div class="border-b-2 broder-[#a5a5a5] px-5 pb-[0.625rem] w-full">
			<div class="grid grid-cols-5 items-center justify-between">
				
			</div>
		</div>

		<ul class="flex flex-col gap-5">
			<li v-for="item in userList" :key="item.id">
				<div class="grid grid-cols-5 bg-white min-h-[5.625rem] p-5 rounded-[1.1875rem] items-center justify-between transition cursor-pointer" :class="{ '!bg-[#6f4ff2]':item.isActive }">
					<Checkbox class="opacity-50" :class="{ 'filter invert !opacity-100':item.isActive }" v-model="item.isActive"></Checkbox>
					<span class="text-base text-[#263238]" :class="{ 'text-white':item.isActive }">{{ item.username }}</span>
					<div class="flex flex-row gap-2 flex-wrap">
						<span class="text-sm text-white bg-[#6097ea] px-4 py-1 rounded-2xl" :class="{ 'text-white':item.isActive }" v-for="role in item.roles" :key="role.id">{{ role.title }}</span>
					</div>
					<span class="text-base text-[#263238]" :class="{ 'text-white':item.isActive }">{{ item.mail }}</span>
					<span class="text-base text-[#263238]" :class="{ 'text-white':item.isActive }">{{ item.isEnable }}</span>
				</div>
			</li>
		</ul>
	</div> -->
</template>

<script setup lang="ts">
import Button from "@/Ui/Button.vue";
import Table from "@/Components/Table/Table.vue";
import Header from "@/Components/Table/TableHeader.vue";
import Body from "@/Components/Table/TableBody.vue";
import Item from "@/Components/Table/TableItem.vue";
import Content from "@/Components/Table/TableContent.vue";

import Panel from "@/Ui/Panel.vue";
import Checkbox from "@/Ui/Checkbox.vue";
import { RootStateInterface } from "@/Store";
import { computed, onMounted, reactive, ref, watch, watchEffect, WritableComputedRef } from "vue";
import { useStore } from "vuex";
import StateInterface from "./Store/Module/UserList/StateInterface";

interface WrapperInterface {
	isActive: boolean;
	user: object;
}

let isSelect = ref(false);
const list = ref([] as Array<WrapperInterface>);
const store = useStore<RootStateInterface>();
const haveSelected = computed(() => list.value.filter(i => i.isActive).length);
const userList = computed(() => (store.state.adminPanelUserList as StateInterface).userList);

store.dispatch('adminPanelUserList/getUserList');

createList();

watch(userList, () => {
	createList();
})

function selectAll(value: boolean) {
	list.value.forEach(element => {
		element.isActive = value;
	});
}

function createList() {
	list.value = [];
	userList.value.forEach(i => { 
		list.value.push({ 
			isActive: false, 
			user: i
		} as WrapperInterface);
	});
}
</script>
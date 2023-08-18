<template>
	<div class="flex flex-col gap-10">
		<!-- <div class="flex flex-row gap-5">
			<Panel
				:title="'Добавить'"
				:description="'Добавить новую заявку'"
				:iconClass="'bg-[var(--color-green1)] text-white'"
			>
				<template #icon>
					<i class="fa-solid fa-plus"></i>
				</template>
			</Panel>
			
			<Panel :class="{ 'opacity-50':!haveSelected }"
				:title="'Удаление'"
				:description="'Удаление записи'"
				:iconClass="'bg-[#DC3546] text-white'"
			>
				<template #icon>
					<i class="fa-solid fa-trash-can"></i>
				</template>
			</Panel>

			<Panel :class="{ 'opacity-50':!haveSelected }"
				:title="'Скрыть'"
				:description="'Скрыть запись с панели'"
				:iconClass="'bg-[#F9D62C] text-white'"
			>
				<template #icon>
					<i class="fa-regular fa-eye-slash"></i>
				</template>
			</Panel>

			<Panel :class="{ 'opacity-50':!haveSelected }"
				:title="'Чат'"
				:description="'Чат с клиентом'"
				:iconClass="'bg-[var(--color-blue1)] text-white'"
			>
				<template #icon>
					<i class="fa-solid fa-comments"></i>
				</template>
			</Panel>
		</div> -->

		<Table>
			<Header class="grid grid-cols-techsup gap-10">
				<Checkbox class="opacity-50 !text-lg" v-model="isSelect" @update:modelValue="selectAll"></Checkbox>
				<span class="text-gray-700 text-sm font-bold">Статус</span>
				<span class="text-gray-700 text-sm font-bold">Название</span>
				<span class="text-gray-700 text-sm font-bold">Описание</span>
				<span class="text-gray-700 text-sm font-bold">Автор: (ID)</span>
				<span class="text-gray-700 text-sm font-bold">Ссылка</span>
				<span class="text-gray-700 text-sm font-bold">Тип</span>
				<span class="text-gray-700 text-sm font-bold">Действия</span>
			</Header>

			<Body>
				<Item class="grid grid-cols-techsup gap-10" 
					v-for="item in list" 
					:isActive="item.isActive" 
					:key="item.order.id" 
					:class="{ 'opacity-50':item.order.status.id === 1 && !item.isActive }"
				>
					<Checkbox class="opacity-50 !text-lg" :class="{ 'filter invert !opacity-100':item.isActive }" v-model="item.isActive"></Checkbox>
					
					<div class="flex gap-2">
						<Status
							:status="item.order.status"
						></Status>
					</div>

					<ItemBlock>
						<span class="transition text-sm text-gray-900 font-semibold" :class="{ '!text-white':item.isActive }">{{ item.order.title.slice(0, 40) }}</span>
					</ItemBlock>

					<ItemBlock>
						<span class="transition text-sm text-gray-900" :class="{ '!text-white':item.isActive }">{{ item.order.description.slice(0, 40) }}...</span>
					</ItemBlock>
					
					<ItemBlock>
						<span class="transition text-sm text-gray-500" :class="{ '!text-white':item.isActive }">#{{ item.order.userId }}</span>
					</ItemBlock>

					<ItemBlock>
						<span class="transition text-sm text-gray-900 break-words" :class="{ '!text-white':item.isActive }">{{ item.order.url }}</span>
					</ItemBlock>

					<ItemBlock>
						<span class="transition text-sm text-gray-900" :class="{ '!text-white':item.isActive }">{{ item.order.type.description }}</span>
					</ItemBlock>

					<div class="flex">
						<Button class="bg-[var(--color-violet2)]" :class="{ 'brightness-90':item.isActive }" @click="openMessenger(item.order)">
							<i class="fa-regular fa-envelope"></i>
						</Button>
					</div>
				</Item>
			</Body>
		</Table>

		<nav class="flex flex-col items-start justify-between p-4 space-y-3 md:flex-row md:items-center md:space-y-0" aria-label="Table navigation">
			<span class="text-sm font-normal text-gray-500" v-if="orderTotalCount">
				Показано
				<span class="font-semibold text-gray-900">{{ (listOffset + 1) }} - {{ seeCount }}</span>
				из
				<span class="font-semibold text-gray-900">{{ orderTotalCount }}</span>
			</span>

			<div class="flex" v-if="listMaxPage"> <!-- Вынести в компонент пагинации -->
				<div class="px-4 py-1 cursor-pointer transition group hover:bg-gray-50 bg-white first:rounded-l-2xl last:rounded-r-2xl border-r last:border-0 border-gray-100"
					v-for="(num, index) in listMaxPage" 
					:key="index"
					@click="changePage(num)"
					:class="{ '!bg-[var(--color-violet2)]':(routerParamPage === num) }"
				>
					<span class="text-sm font-semibold text-gray-500 group-hover:text-gray-500" :class="{ '!text-white':(routerParamPage === num) }">{{ num }}</span>
				</div>
			</div>
		</nav>

		<Transition>
			<Messenger v-if="messengerIsOpen"
				:order="selectOrder"
				v-model:isActive="messengerIsOpen"
			></Messenger>
		</Transition>
	</div>
</template>

<script setup lang="ts">
import Button from "@/Ui/Button.vue";
import Table from "@/Components/Table/Table.vue";
import Header from "@/Components/Table/TableHeader.vue";
import Body from "@/Components/Table/TableBody.vue";
import Item from "@/Components/Table/TableItem.vue";
import ItemBlock from "@/Components/Table/TableItemBlock.vue";
import Content from "@/Components/Table/TableContent.vue";
import ModuleBlock from "../Components/ModuleBlock.vue";

import Panel from "@/Ui/Panel.vue";
import Checkbox from "@/Ui/Checkbox.vue";
import { RootStateInterface } from "@/Store";
import { computed, onBeforeMount, onBeforeUnmount, onMounted, reactive, ref, watch, WritableComputedRef } from "vue";
import { useStore } from "vuex";
import Status from "../Components/Status.vue";
import StateInterface from "../Store/Modules/Order/StateInterface";
import OrderInterface from "../Entity/OrderIntarface";
import { useRouter } from "vue-router";
import Messenger from "../Messenger/Messenger.vue";
import Utils from "@/Service/Utils/Utils";
import Mathf from "@/Service/Mathf";

interface WrapperInterface {
	isActive: boolean;
	order: OrderInterface;
}

const router = useRouter();
const routerParam = computed(() => router.currentRoute.value.query);
const routerParamPage = computed(() => parseInt(routerParam.value.page as string));
const routerParamPageCount = computed(() => parseInt(routerParam.value.pageCount as string));

let isSelect = ref(false);
let messengerIsOpen = ref(false);
let selectOrder = ref({} as OrderInterface);

const list = ref([] as Array<WrapperInterface>);
const store = useStore<RootStateInterface>();
const haveSelected = computed(() => list.value.filter(i => i.isActive).length);
const orderList = computed(() => (store.state.techsupOrder as StateInterface).orderList);
const orderTotalCount = computed(() => (store.state.techsupOrder as StateInterface).orderTotalCount);

const listMaxPage = computed(() => Math.ceil(orderTotalCount.value / routerParamPageCount.value));
const listOffset = computed(() => (routerParamPage.value - 1) * routerParamPageCount.value);
const seeCount = computed(() => Mathf.clamp((listOffset.value + routerParamPageCount.value), 1, orderTotalCount.value));

onMounted(async () => {
	await initNavigation();
	getOrderList();
});

watch(orderList, () => {
	createList();

	if(routerParam.value.messenger) {
		createMessenger();
	}
});

watch(messengerIsOpen, () => {
	if(messengerIsOpen.value) {
		Utils.addParamsToLocation({ messenger: selectOrder.value.id });
		return;
	}

	Utils.addParamsToLocation({ messenger: undefined });
});

watch([routerParam.value.page, routerParam.value.pageCount], async () => {
	if(routerParam.value.page && routerParam.value.pageCount) {
		await initNavigation();
		getOrderList();
	}
});

function selectAll(value: boolean) {
	list.value.forEach(element => {
		element.isActive = value;
	});
}

function createList() {
	list.value = [];
	orderList.value.forEach((i: OrderInterface) => { 
		list.value.push({ 
			isActive: false, 
			order: i
		} as WrapperInterface);
	});
}

function createMessenger() {
	if(routerParam.value.messenger) {
		const orderId: number = parseInt(routerParam.value.messenger as string);
		const order = orderList.value.find(i => i.id === orderId);

		if(order) {
			openMessenger(order);
			return;
		} 

		Utils.addParamsToLocation({ messenger: undefined });
	}
}

async function initNavigation() {
	if(!routerParamPage.value || isNaN(routerParamPage.value)) {
		await Utils.addParamsToLocation({ page: 1 });
	}

	if(!routerParamPageCount.value || isNaN(routerParamPageCount.value)) {
		await Utils.addParamsToLocation({ pageCount: 10 });
	}
}

function openMessenger(order: OrderInterface) {
	messengerIsOpen.value = true;
	selectOrder.value = order;
}

async function changePage(page: number) {
	await Utils.addParamsToLocation({ page: page });
	getOrderList();
}

function getOrderList() {
	store.dispatch('techsupOrder/getOrderList', { 
		_count: true,
		_sortBy: 'updateAt',
		_orderBy: 'desc',
		_offset: listOffset.value,
		_limit: routerParamPageCount.value
	});
}
</script>
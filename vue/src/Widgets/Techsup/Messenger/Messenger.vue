<template>
	<div class="fixed max-w-3xl w-full right-[48rem] flex flex-col gap-10 top-0 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white dark:bg-gray-800 shadow-xl pb-8">
		<div class="flex flex-row gap-2 items-center">
			<i class="fa-solid fa-circle-info text-gray-500 dark:text-gray-400"></i>
			<h5 class="inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400">Чат с клиентом #{{ order.userId }}</h5>
		</div>

		<button @click="isActive = false" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
			<svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
				<path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
			</svg>
			<span class="sr-only">Close menu</span>
		</button>

		<div class="flex flex-col gap-5">
			<div class="flex flex-row gap-2 items-start">
				<span class="text-sm font-semibold text-gray-500">Название: </span>
				<p class="text-sm text-gray-500 dark:text-gray-400">{{ order.title }}</p>
			</div>

			<div class="flex flex-row gap-2 items-start">
				<span class="text-sm font-semibold text-gray-500">Описание: </span>
				<p class="text-sm text-gray-500 dark:text-gray-400">{{ order.description }}</p>
			</div>

			<div class="flex flex-row gap-2 items-start">
				<span class="text-sm font-semibold text-gray-500">Ссылка: </span>
				<a :href="order.url" target="_blank" class="underline text-blue-500 text-sm transition hover:text-blue-700">{{ order.url }}</a>
			</div>

			<div class="flex flex-row gap-2 items-center">
				<span class="text-sm font-semibold text-gray-500">Статус: </span>
				<Status
					:status="order.status"
				></Status>
			</div>

			<div class="flex flex-row gap-2 items-start">
				<span class="text-sm font-semibold text-gray-500">Тип заявки: </span>
				<p class="text-sm text-gray-500 dark:text-gray-400">{{ order.type.description }}</p>
			</div>

			<div class="flex flex-row gap-2 items-start">
				<span class="text-sm font-semibold text-gray-500">Вложения: </span>
				<div class="flex flex-row gap2-">
					<img src="" alt="" srcset="">
				</div>
			</div>
		</div>

		<div class="relative h-full min-h-[50%] ">
			<Chat class="h-full" 
				@send="sendMessage" 
				:isLock="chatIsLock"
			>
				<template v-if="!chatIsLock">
					<TransitionGroup>
						<Message v-for="(message, index) in messageList" :key="index"
							:text="message.text"
							:isMe="checkMe(message.authorType)"
							:time="createTime(message.createdAt)"
							:username="createUsername(message)"
						></Message>
					</TransitionGroup>
				</template>
			</Chat>

			<div class="flex justify-center items-center w-full h-full bg-black/80 top-0 left-0 p-20 absolute rounded-3xl" v-if="chatIsLock">
				<Button class="bg-[var(--color-white1)] gap-3 z-10" @click="sendStatus(3)">
					<i class="fa-solid fa-headset"></i>
					<span>Взять в работу</span>
				</Button>
			</div>
		</div>		

		<div class="flex flex-row justify-between gap-4 pb-5" v-if="!chatIsLock">
			<Button class="bg-blue-600 gap-3" @click="sendStatus(5)">
				<i class="fa-solid fa-check"></i>
				<span>Закрыть заявку</span>
			</Button>

			<Button class="bg-red-600 gap-3" @click="sendStatus(1)">
				<i class="fa-solid fa-trash-can"></i>
				<span>Удалить</span>
			</Button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { RootStateInterface } from "@/Store";
import { computed, watch } from "vue";
import { useStore } from "vuex";

import Button from '@/Ui/Button.vue';
import Chat from '@/Components/Chat/Chat.vue';
import Message from '@/Components/Chat/ChatMessage.vue'
import Avatar from '@/Components/Chat/ChatAvatar.vue'
import Status from "../Components/Status.vue";
import OrderInterface from "../Entity/OrderIntarface";
import StateInterface from "../Store/Modules/Message/StateInterface";
import AuthStateInterface from "@/Store/Modules/Authorization/StateInterface";
import MessageInterface from '../Entity/MessageInterface';
import AuthorTypeInterface from "../Entity/AuthorTypeInterface";

interface PropsInterface {
	isActive: boolean;
	order: OrderInterface;
}

const props = withDefaults(defineProps<PropsInterface>(), {
	isActive: false
});

const store = useStore<RootStateInterface>();
const emit = defineEmits(['update:modelValue', 'update:is-active']);
const messageList = computed(() => (store.state.techsupMessage as StateInterface).messageList.filter(i => !i.isDelete).sort((a, b) => a.id - b.id));
const chatIsLock = computed(() => (props.order.status.id !== 3 && props.order.status.id !== 4));

store.dispatch('techsupMessage/getMessageList', { 
	order: props.order.id,
	_nolimit: true,
	_sortBy: 'createdAt',
	_orderBy: 'desc'
});

let isActive = computed({
	get() {
		return props.isActive;
	},
	set(value: any) {		
		emit('update:is-active', value);
	}
});

async function sendMessage(sendMessage: string) {
	await store.dispatch('techsupMessage/createMessage', {
		authorType: 2,
		order: props.order.id,
		text: sendMessage,
	});

	await store.dispatch('techsupMessage/getMessageList', { 
		order: props.order.id,
		_nolimit: true,
		_sortBy: 'createdAt',
		_orderBy: 'desc'
	});
}

async function sendStatus(statusId: number) {
	await store.dispatch('techsupOrder/updateOrder', {
		id: props.order.id,
		status: statusId
	});

	await store.dispatch('techsupOrder/updateOrderInList', { 
		id: props.order.id 
	});
}

function createTime(time: string): string {
	return new Date(time).toLocaleString('Ru-ru', { hour: '2-digit', minute: '2-digit' });
}

function checkMe(authorType: AuthorTypeInterface): boolean {
	return authorType.id === 2;
}

function createUsername(message: MessageInterface): string {
	return (message.authorType.id !== 2) ? `Клиент #${message.order.userId}` : `Агент техподдержки`;
}
</script>
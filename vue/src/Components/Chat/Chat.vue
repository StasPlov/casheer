<template>
	<div class="flex flex-col w-full bg-white rounded-3xl overflow-hidden bg-chat-pattern bg-contain">
		<div class="flex flex-col gap-5 h-full p-4 overflow-auto scrollbar">
			<slot></slot>
		</div>
		
		<div class="flex gap-3 bg-gray-300 p-4">
			<Input class="flex items-center h-10 w-full text-sm" :placeholder="placeholder" v-model="message" @keyup.enter="sendMessage" v-if="!isLock"></Input>
			<span class="flex items-center h-10 w-full text-sm gap-3 py-2 px-3 rounded-xl bg-white transition text-gray-400 font-medium" v-else>{{ placeholder }}</span>

			<i class="fa-regular fa-paper-plane bg-blue-500 text-white h-full p-3 px-6 rounded-xl transition hover:bg-blue-600 cursor-pointer"
				:class="{ 'opacity-80 bg-gray-400 hover:bg-gray-400':!sendIsActive }"
				@click="sendMessage"
			></i>
		</div>
	</div>
</template>

<script setup lang="ts">
import Input from "@/Ui/Input.vue";
import { computed, ref } from "vue";

interface PropsInterface {
	isLock: boolean;
	placeholder: string
}

const props = withDefaults(defineProps<PropsInterface>(), {
	isLock: true,
	placeholder: 'Ваше сообщение…'
});

const emit = defineEmits(['send']);
let message = ref('');
let sendIsActive = computed(() => (message.value.length > 0 && message.value !== '' && message.value !== null && !props.isLock));

function sendMessage() {
	if(props.isLock) {
		return;
	}

	if(sendIsActive.value) {
		emit('send', message.value);
		message.value = '';
	}	
}
</script>

<style scoped>
.scrollbar::-webkit-scrollbar {
    width: 0.75rem;
}

.scrollbar::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 0.625rem;
}

.scrollbar::-webkit-scrollbar-thumb:hover {
	background-color: rgba(0,0, 0, 0.9);
}

.scrollbar::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 0.625rem;
}
</style>
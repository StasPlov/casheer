<template>
	<div class="flex flex-row gap-2" :class="{ 'self-end flex-row-reverse':isMe }">
		<Avatar v-if="useAvatar" :url="avatarImg"></Avatar>

		<div class=" max-w-[60%] box-content min-w-min px-3 py-2 flex flex-col gap-2 bg-white rounded-2xl rounded-tl-sm bg-gradient-to-tr from-indigo-500/10 to-sky-500/10" 
			:class="{ '!bg-blue-600 !text-white !rounded-tl-2xl rounded-tr-sm':isMe }"
		>	
			<div class="flex flex-row justify-between gap-4 box-content">
				<span class="text-xs text-slate-700 font-semibold tracking-wide  whitespace-nowrap" v-if="useUsername" :class="{ '!text-white ':isMe }">{{ username }}</span>
				<span class="text-[0.625rem] text-slate-600 font-semibold" :class="{ '!text-white ':isMe }">{{ time }}</span>
			</div>
			<p class="text-sm tracking-wide break-words">{{ text }}</p>
		</div>

		<div class="flex flex-col gap-2 break-words" :class="{ 'items-end':isMe }">
			
		</div>
	</div>
</template>

<script setup lang="ts">
import Avatar from "./ChatAvatar.vue";

interface PropsInterface {
	text: string|null;
	useTime: boolean;
	time: string|null;
	isMe: boolean;
	useAvatar: boolean;
	avatarImg: string|null;
	useUsername: boolean;
	username: string|null;
}

const props = withDefaults(defineProps<PropsInterface>(), {
	text: null,
	isMe: false,
	useAvatar: true,
	avatarImg: null,
	useUsername: true,
	username: 'User',
	useTime: true,
	time: '19:33'
});
</script>
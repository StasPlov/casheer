<template>
	<div class="flex flex-col gap-8">
		<div class="bg-white px-10 py-8 border border-solid border-[var(--color-arctic1)] rounded-3xl overflow-hidden">
			<div class="pr-10 max-h-screen h-[38.8125rem] overflow-y-scroll">
				<span class="text-[var(--color-black1)] font-[Arial] font-normal" v-html="item.document"></span>
			</div>
		</div>
		
		<template v-if="isAgree">
			<a :href="item.button.link" v-if="item.button && item.button.is_active" class="ml-[1.5rem] self-start">
				<Button class="!bg-transparent btn relative !py-4 !px-12 hover:scale-105 duration-500">
					<span class="text-[var(--color-blue1)] text-base font-[Arial] font-normal">{{ item.button.text }}</span>
				</Button>
			</a>
		</template>

		<Button v-else class="ml-[1.5rem] !bg-transparent btn relative !py-4 !px-12 hover:scale-105 duration-500 self-start" :class="{ 'select-none opacity-50':!isAgree }">
			<span class="text-[var(--color-blue1)] text-base font-[Arial] font-normal">{{ item.button.text }}</span>
		</Button>
	</div>
</template>

<script setup lang="ts">
import Button from "@/Ui/Button.vue";
import { computed, ref, watch, watchEffect } from "vue";
import ConditionDocumentInterface from './Type/ConditionDocumentInterface';

const props = defineProps<{
	item: ConditionDocumentInterface,
	isAgree?: boolean
}>();
</script>

<style scoped>
.btn::before {
	content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50px;
    border: 5px solid transparent;
    background: radial-gradient(var(--color-blue1), transparent) border-box;
    mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
}
</style>

<template>
	<div class="bg-red-500 px-4 py-1 rounded-2xl" v-if="status.id === 1">
		<span class="text-sm text-white">{{ text }}</span>
	</div>
	<div class="bg-emerald-400 px-4 py-1 rounded-2xl" v-else-if="status.id === 2">
		<span class="text-sm text-white">{{ text }}</span>
	</div>
	<div class="bg-yellow-400 px-4 py-1 rounded-2xl" v-else-if="status.id === 3">
		<span class="text-sm text-white">{{ text }}</span>
	</div>
	<div class="bg-blue-500 px-4 py-1 rounded-2xl" v-else-if="status.id === 4">
		<span class="text-sm text-white">{{ text }}</span>
	</div>
	<div class="bg-gray-300 px-4 py-1 rounded-2xl" v-else-if="status.id === 5">
		<span class="text-sm text-white">{{ text }}</span>
	</div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import OrderStatusInterface from "../Entity/OrderStatusInterface";

const props = defineProps<{
	status: OrderStatusInterface,
}>();

const text = computed(() => props.status.description);
</script>
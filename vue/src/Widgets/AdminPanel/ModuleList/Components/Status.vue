<template>
	<div class="bg-[var(--color-red1)] px-4 py-1 rounded-2xl" v-if="module.isDelete">
		<span class="text-sm text-white">Удален</span>
	</div>
	<div class="bg-[var(--color-blue1)] px-4 py-1 rounded-2xl" v-if="module.isMain">
		<span class="text-sm text-white">Главная</span>
	</div>
	<div class="bg-[var(--color-white1)] px-4 py-1 rounded-2xl" v-if="module.isHide">
		<span class="text-sm text-white">Скрыт</span>
	</div>
</template>

<script setup lang="ts">
import ModuleInterface from "@/Entity/ModuleInterface";

const props = defineProps<{
	module: ModuleInterface,
}>();
</script>
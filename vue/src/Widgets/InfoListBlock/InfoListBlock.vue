<template>
	<div class="bg-[var(--color-black1)]">
		<div class="px-[9vw] py-[6vw] bg-white rounded-b-[2.5rem] max-phoneX:py-[14vw]">
			<ul class="grid grid-cols-[repeat(2,_auto)] justify-around gap-14 gap-x-32 max-md:grid-cols-[repeat(1,_auto)]">
				<li v-for="item in list" :key="item" class="flex gap-11 items-center">
					<img :src="item.image" alt="" class="w-12">
					<span class="text-black text-3xl font-normal font-[Arial] max-w-[23.75rem]" v-html="item.description"></span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import InfoInterface from "./Type/InfoInterface";

const props = defineProps<{
	list: Array<InfoInterface>
}>();

const list = computed<typeof props.list>(() => props.list);
</script>

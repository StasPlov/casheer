<template>
	<div class="bg-[var(--color-black1)]">
		<div class="px-[9vw] py-[6vw] bgf rounded-b-[2.5rem] max-phoneX:py-[14vw]">
			<div class="flex flex-col gap-24">
				<h2 class="text-white text-4xl font-mont font-bold text-center leading-tight">
					A smarter and simpler all-in-one POS solution. <br>
					A better experience for your customers. <br>
					A faster operations management system for your business.
				</h2>

				<ul class="grid grid-cols-[repeat(2,_auto)] justify-around gap-14 gap-x-32 max-md:grid-cols-[repeat(1,_auto)]">
					<li v-for="item in list" :key="item" class="flex gap-11 items-center">
						<img :src="item.image" alt="" class="w-12">
						<span class="text-white text-3xl font-normal font-[Arial] max-w-[23.75rem]" v-html="item.description"></span>
					</li>
				</ul>
			</div>
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

<style scoped>
.bgf {
	background: linear-gradient(145deg, var(--color-arctic1) -1.21%, rgba(47, 128, 237, 0.00) 100%);
}
</style>

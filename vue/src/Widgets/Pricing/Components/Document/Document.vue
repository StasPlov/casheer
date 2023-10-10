<template>
	<div class="bg-white rounded-3xl">
		<div class="px-8 py-9 flex flex-col gap-9">
			<div class="flex flex-col gap-6">
				<h3 class="text-transparent text-[2.5rem] font-medium font-mont bg-clip-text bg-gradient-casheer-title-to-b" v-if="title" v-html="title"></h3>
				<span class="text-[var(--color-black1)] text-2xl font-[Arial] font-normal" v-if="description" v-html="description"></span>
			</div>
			

			<ul class="grid grid-cols-2 grid-flow-row gap-5 justify-between max-phoneX:grid-cols-1">
				<li v-for="item in list" :key="item">
					<div class="flex gap-4">
						<div class="min-w-[1.875rem] min-h-[1.875rem] max-w-[1.875rem] max-h-[1.875rem]">
							<CheckTryIcon v-if="item.is_active" class="w-full h-full"></CheckTryIcon>
							<CheckNoneIcon v-else class="w-full h-full"></CheckNoneIcon>
						</div>

						<span class="text-[var(--color-black1)] text-xl font-[Arial] font-normal" v-html="item.description"></span>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup lang="ts">
import CheckNoneIcon from '../../Components/Plan/Assets/CheckNoneIcon.vue';
import CheckTryIcon from '../../Components/Plan/Assets/CheckTryIcon.vue';
import DocumentInterface from './Type/DocumentInterface';
import { computed, ref } from "vue";

const props = defineProps<{
	item: DocumentInterface
}>();
const title = computed(() => props.item.title ?? null);
const description = computed(() => props.item.description ?? null);
const list = computed(() => props.item?.list ?? []);
</script>

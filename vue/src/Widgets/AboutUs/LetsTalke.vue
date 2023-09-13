<template>
	<div class="bg-white">
		<div class="px-[7vw] py-[8vw]">
			<div class="flex flex-col gap-14">
				<h2 class="text-black text-2xl font-bold font-mont text-center">Lets talk</h2>
			
				<div class="self-center">
					<ul class="grid grid-cols-3 grid-flow-row gap-14 gap-x-32 max-phoneX:grid-cols-1">
						<li v-for="item in teamList" :key="item" class="flex flex-col gap-1 min-w-min max-phoneX:items-center">
							<span class="text-black text-xl font-semibold font-[Arial] text-start flex-nowrap">{{ item.title }}</span>
							<a :href="`mailto:${item.title}`" class="text-black text-sm font-normal font-[Arial] underline text-start">{{ item.mail }}</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed } from "vue";


const teamList = computed(() => [
	{
		title: 'Request details',
		mail: 'lorem@ipsum.com',
	},
	{
		title: 'Business opportunity',
		mail: 'lorem@ipsum.com',
	},
	{
		title: 'Become a partner',
		mail: 'lorem@ipsum.com',
	},
]);
</script>

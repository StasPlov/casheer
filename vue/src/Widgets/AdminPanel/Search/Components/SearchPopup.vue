<template>
	<Block>
		<template #content>
			<ul v-if="search.module">
				<li v-for="item in search.module" :key="item">
					<RouterLink :to="`/${item.breadcrumb}`">
						<div class="flex flex-row items-stretch gap-[0.9375rem] py-3 px-5 hover:bg-gray-50 transition cursor-pointer">
							
							<div class="max-w-[25px] max-h-full rounded-lg bg-pink-300 overflow-hidden">
								<!-- <img :src="CategoryImage" alt="" class="w-full h-full object-cover"> -->
							</div>

							<div class="flex flex-col">
								<span class="text-[#263238] text-base font-montserrat font-medium text-left">{{ item.title }}</span>
								<span class="text-[#6C7AA0] text-sm font-montserrat font-medium text-left">Категория</span>
							</div>
						</div>
					</RouterLink>
				</li>
			</ul>

			<ul v-if="search.user">
				<li v-for="item in search.user" :key="item">
					<div class="flex flex-row items-stretch gap-[0.9375rem] py-3 px-5 hover:bg-gray-50 transition cursor-pointer">
						
						<div class="max-w-[25px] max-h-full rounded-lg bg-pink-300 overflow-hidden">
							<!-- <img :src="CategoryImage" alt="" class="w-full h-full object-cover"> -->
						</div>

						<div class="flex flex-col">
							<span class="text-[#263238] text-base font-montserrat font-medium text-left">{{ item.name }}</span>
							<span class="text-[#6C7AA0] text-sm font-montserrat font-medium text-left">Пользователь</span>
						</div>
					</div>
				</li>
			</ul>
		</template>
	</Block>
</template>

<script setup lang="ts">
import SearchIcon from '@/Assets/Icons/search.svg';
import CategoryImage from '@/Assets/Images/category6.png';
import Block from '@/Ui/Block.vue';
import Utils from '@/Service/Utils/Utils';
import { SearchType } from '../Type/SearchType';

const props = defineProps<{
	search: SearchType
}>();

const emit = defineEmits([]);

/**	
 * @description Object type select and object 
 * @param {String} type
 * @param {Object} value
 */
function select(type: string = 'module', value: object) {
	emit(`select:${type}`, value);
}
</script>
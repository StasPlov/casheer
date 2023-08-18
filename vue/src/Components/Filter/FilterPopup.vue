<template>
	<Block>
		<div class="px-5 py-3" v-if="useSearch">
			<SearchInput class="!bg-gray-100" :placeholder="'Найти ...'"></SearchInput>
		</div>

		<ul class="flex flex-col items-start max-h-[37.5rem] overflow-y-auto scrollbar" v-if="list">
			<li class="w-full" v-for="(item, index) in itemList" :key="item" @click="$refs.checkbox[index].$el.click()">
				<div class="flex flex-row items-center gap-[0.9375rem] py-3 px-5 hover:bg-gray-50 transition cursor-pointer">
					<Checkbox ref="checkbox"
						:modelValue="item.isSelect"
						@update:modelValue="selectItem(item)"
					></Checkbox>

					<span class="text-[#263238] text-sm tracking-wide font-montserrat font-medium text-left">{{ item.item.title }}</span>
				</div>
			</li>
		</ul>

		<div class="flex items-center justify-center px-5 py-3" v-if="useButtonApply">
			<Button class="bg-[#6f4ff2]">
				<span>Применить</span>
			</Button>
		</div>
	</Block>
</template>

<script setup lang="ts">
import Checkbox from '@/Ui/Checkbox.vue';
import Block from '@/Ui/Block.vue';
import SearchInput from '@/Ui/SearchInput.vue';
import Button from '@/Ui/Button.vue';
import { ref } from 'vue';
import ModuleInterface from '@/Entity/ModuleInterface';

const emit = defineEmits(['selectList', 'selectItem']);

interface Props {
	list: Array<ModuleInterface>;
	multiSelect: boolean;
	useSearch: boolean;
	useButtonApply: boolean;
}

const props = withDefaults(defineProps<Props>(), {
	list: () => [],
	multiSelect: true,
	useButtonApply: false,
	useSearch: false
});

interface ItemInterface {
	item: any;
	isSelect: boolean;
}

class Item implements ItemInterface {
	item!: object;
	isSelect!: boolean;

    public getItem(): object {
        return this.item;
    }

    public setItem(item: object): this {
        this.item = item;
		return this;
    }

    public getIsSelect(): boolean {
        return this.isSelect;
    }

    public setIsSelect(isSelect: boolean): this {
        this.isSelect = isSelect;
		return this;
    }
}

let itemList = ref([] as Array<ItemInterface>);

for (const element of props.list) {
	itemList.value.push(
		(new Item())
		.setItem(element)
		.setIsSelect(false)
	);
}

function selectItem(item: ItemInterface) {
	if(!props.multiSelect) {
		if(item.isSelect) {
			return;
		}

		for (const element of itemList.value) {
			element.isSelect = false;
		}
	}

	item.isSelect = !item.isSelect;

	const selectedList = itemList.value.filter(i => i.isSelect).map(i => i.item);

	emit('selectList', selectedList);
	emit('selectItem', item.item);
}
</script>

<style scoped>
.scrollbar::-webkit-scrollbar {
	width: 20px;
	height: 20px;
	width: 6px;
	margin-right: 5px;
}

.scrollbar::-webkit-scrollbar-track {
	border-radius: 100vh;
	width: 5px;
	background: transparent;
}

.scrollbar::-webkit-scrollbar-thumb {
	background: #c7c7c7;
	border-radius: 1.25rem;
	cursor: pointer;
}

.scrollbar::-webkit-scrollbar-thumb:hover {
	background: #f5bac4;
}
</style>
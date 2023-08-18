<template>
	<div class="relative z-10">
		<FilterButton @click="clickButton"
			:text="buttonText"
			:useArrow="list.length"
			:selectCount="selectCount"
		>
		</FilterButton>

		<template v-if="list.length">
			<Transition name="popup">
				<FilterPopup class="fixed mt-2 z-20 w-[25rem] shadow-2xl" v-if="popupIsActive" v-click-outside="clickOutside"
					:list="list"
					:multiSelect="multiSelect"
					:useSearch="useSearch"
					:useButtonApply="useButtonApply"
					@selectList="setSelectList"
				></FilterPopup>
			</Transition>
		</template>
	</div>
</template>

<script setup lang="ts">
import vClickOutside from '@/Service/ClickOutside';
import FilterButton from './FilterButton.vue';
import FilterPopup from './FilterPopup.vue';
import { computed, ref } from 'vue';

interface Props {
	text: string;
	list: Array<any>;
	useSelectName: boolean
	useSelectCount: boolean;
	useButtonApply: boolean;
	multiSelect: boolean;
	useSearch: boolean;
}

const props = withDefaults(defineProps<Props>(), {
	text: 'Фильтр',
	list: () => [],
	useSelectName: false,
	useSelectCount: false,
	multiSelect: false,
	useButtonApply: false,
	useSearch: false
});

let popupIsActive = ref(false);
let selectList = ref(props.list.filter(i => i.isActive) ?? []);

const buttonText = computed(() => {
	if(props.useSelectName && selectList.value.length) {
		return selectList.value[0].name;
	}
	return props.text;
});

const selectCount = computed(() => {
	if(!props.useSelectCount) {
		return 0;
	}
	return selectList.value.length;
});

function clickButton() {
	if(props.list.length) {
		popupIsActive.value = !popupIsActive.value;
	}
}
function clickOutside() {
	popupIsActive.value = false;
}
function setSelectList(value: Array<any>) {
	selectList.value = value;
}
</script>



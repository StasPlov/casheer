<template>
	<div class="flex flex-col gap-2">
		<div @click="isOpen = !isOpen" ref="parent">
			<slot name="text">text</slot>
		</div>
		
		<Transition name="fade-top" mode="out-in">
			<div v-if="isOpen">
				<slot name="content">content</slot>
			</div>
		</Transition>
	</div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';

const emit = defineEmits([''])
interface PropsInterface {
	classIsOpen: string;
}

const props = withDefaults(defineProps<PropsInterface>(), {
	classIsOpen: ''
});

const isOpen = ref(false);
const parent = ref(null);

watch(isOpen, () => {
	const childNodes = parent.value.childNodes;

	childNodes.forEach((child: any) => {
		if (child.nodeType === 1 && isOpen.value) {
			const classStr = props.classIsOpen.split(' ');
			classStr.forEach((cls:string) => child.classList.add(cls));
		}
		if (child.nodeType === 1 && !isOpen.value) {
			const classStr = props.classIsOpen.split(' ');
			classStr.forEach((cls:string) => child.classList.remove(cls));
		}
	});
});
</script>
<template>
	<div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300 overflow-hidden">
		<img :src="img" alt="" class="object-cover w-full h-full" v-if="img">

		<div class="flex w-full h-full items-center justify-center" v-else>
			<i class="fa-solid fa-user al text-white"></i>
		</div>
	</div>
</template>

<script setup lang="ts">
interface PropsInterface {
	img: string|null;
}

const props = withDefaults(defineProps<PropsInterface>(), {
	img: null,
});
</script>
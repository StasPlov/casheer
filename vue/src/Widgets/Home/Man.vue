<template>
	<div class="flex flex-col w-full bg-white relative items-center" v-if="man">
		<div class="px-[7vw] max-phoneX:px-0">
			<div class="relative">
				<img v-if="man.background" :src="man.background.url" alt="" class="w-[79.3125rem] max-phoneX:hidden">
				<img v-if="man.backgroundmob" :src="man.backgroundmob.url" alt="" class="hidden w-full max-phoneX:block">
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import ImageInterface from "../../Entity/ImageInterface";
import { RootStateInterface } from "../../Store";
import PageDataStateInterface from "../../Store/Modules/PageData/StateInterface";

const store = useStore<RootStateInterface>();
const pageData = computed<PageDataStateInterface>(() => store.state.pageData);
const man = computed<{
	background: ImageInterface;
	backgroundmob: ImageInterface;
}>(() => pageData.value.data?.man);
</script>

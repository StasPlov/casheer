<template>
	<ul class="flex flex-row gap-2 items-center" v-if="list">
		<li class="flex flex-row gap-2 items-center" v-for="(item, index) in list" :key="index">
			<RouterLink :to="{ name: item.breadcrumb }">
				<span class="text-sm text-[#6C7AA0] transition font-">{{ item.title }}</span>
			</RouterLink>

			<i class="fa-solid fa-chevron-right icon text-[0.625rem] text-[#65646A]" v-if="(index + 1) != list.length"></i>
		</li>
	</ul>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import { RouteRecordName, useRouter } from "vue-router";
import { RouteInterface } from "@/router";
import { RootStateInterface } from "@/Store";
import StateInterface from "@/Store/Modules/Module/StateInterface";
import ModuleInterface from "@/Entity/ModuleInterface";

const store = useStore<RootStateInterface>();
const router = useRouter();
const routeName = computed(() => router.currentRoute.value.name as keyof RouteRecordName);
const module = computed(() => (store.state.module as StateInterface).moduleList.find(i => i.breadcrumb === routeName.value));

const list = computed(() => {
	const createList = (category: ModuleInterface, arr: Array<ModuleInterface> = []): Array<ModuleInterface> => {
		arr.push(category);
		
		if(category?.parent) {
			createList(category.parent, arr);
		}
		return arr;
	}
	return createList(module.value ?? {} as ModuleInterface).reverse();
});
</script>
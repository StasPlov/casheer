<template>
	<div class="flex flex-col gap-10 items-start" v-if="noExitPage"> 
		<div class="grid grid-cols-3 gap-5">
			<Block class="flex flex-col gap-5 px-5 py-5 rounded-[18px]">
				<div class="flex flex-row items-center gap-2">
					<span class="whitespace-nowrap">Название: </span>

					<div class="flex flex-row gap-2 items-center w-full justify-center">
						<Input placeholder="Название" class="!bg-slate-50" v-model="module.title"></Input>

						<div class="flex flex-row gap-2 max-h-[2.375rem]">
							<Button class="bg-[var(--color-violet2)]" @click="reset('title')">
								<i class="fa-solid fa-arrow-rotate-left"></i>
							</Button>
						</div>
					</div>
				</div>

				<div class="flex flex-row items-center gap-2">
					<span class="whitespace-nowrap">Описание: </span>

					<div class="flex flex-row gap-2 items-center w-full justify-center">
						<Input placeholder="Описание" class="!bg-slate-50" v-model="module.description"></Input>

						<div class="flex flex-row gap-2 max-h-[2.375rem]">
							<Button class="bg-[var(--color-violet2)]" @click="reset('description')">
								<i class="fa-solid fa-arrow-rotate-left"></i>
							</Button>
						</div>
					</div>
				</div>
			</Block>

			<Block class="flex flex-col gap-5 px-5 py-5 rounded-[18px]">
				<div class="flex flex-row items-center gap-2">
					<span class="whitespace-nowrap">Breadcrumb: </span>

					<div class="flex flex-row gap-2 items-center w-full justify-center">
						<Input placeholder="Breadcrumb" class="!bg-slate-50" v-model="module.breadcrumb"></Input>

						<div class="flex flex-row gap-2 max-h-[2.375rem]">
							<Button class="bg-[var(--color-violet2)]" @click="reset('breadcrumb')">
								<i class="fa-solid fa-arrow-rotate-left"></i>
							</Button>
						</div>
					</div>
				</div>

				<div class="flex flex-row items-center gap-2">
					<span class="whitespace-nowrap">Родительская категория: </span>
					
					<Filter @click="getCategory"
						:text="module.parent?.title"
						:list="moduleList"
						:useSearch="true"
						:useButtonApply="true"
						:useArrow="true"
					></Filter>
					<!-- <div class="flex gap-2">
						<ModuleBlock v-if="module.parent"
							:text="module.parent?.title"
						></ModuleBlock>

						<ModuleBlock class="bg-[var(--color-silver4)]" v-else
							:text="`Нет категории`"
						></ModuleBlock>
					</div>  -->
				</div>
			</Block>

			<Block class="flex flex-col gap-5 px-5 py-5 rounded-[18px]">
				<div class="flex flex-row items-center gap-2">
					<span class="whitespace-nowrap">Статус: </span>
					<Input placeholder="Breadcrumb" class="!bg-slate-50"></Input>
				</div>
			</Block>
		</div>

		<Button class="bg-[var(--color-violet2)] px-10 flex flex-row gap-2" :isLock="moduleIsSending || !isChangedData" @click="save">
			<span class="">Сохранить изменения</span>
			<i class="fa-regular fa-floppy-disk text-lg" v-if="!moduleIsSending"></i>
			<i class="fa-solid fa-circle-notch animate-spin text-lg" v-else></i>
		</Button>
	</div>

	<div v-else>
		<span class="text-base">Выберите модуль для редактирования</span>
	</div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { computed, ref, watch, WritableComputedRef } from 'vue';

import Filter from "@/Components/Filter/Filter.vue";
import Input from '@/Ui/Input.vue';
import Block from '@/Ui/Block.vue';
import Button from '@/Ui/Button.vue';
import ModuleBlock from "../Components/ModuleBlock.vue";
import { RootStateInterface } from "@/Store";
import StateInterface from "./Store/Modules/Module/StateInterface";
import ModuleInterface from '@/Entity/ModuleInterface';

const store = useStore<RootStateInterface>();
const router = useRouter();
const query = computed(() => router.currentRoute.value.query);
const module = computed(() => (store.state.adminPanelModuleEdit as StateInterface).module);
const moduleList = computed(() => (store.state.adminPanelModuleEdit as StateInterface).moduleList);
const moduleListIsLoading = computed(() => (store.state.adminPanelModuleEdit as StateInterface).moduleListIsLoading);
const moduleIsSending = computed(() => (store.state.adminPanelModuleEdit as StateInterface).moduleIsSending);
const noExitPage = computed(() => module.value !== undefined && query.value.id !== undefined);
const isChangedData = computed(() => JSON.stringify(copyModule) !== JSON.stringify(module.value));
let copyModule: any = null;
let changeModule: ModuleInterface;
let popupIsActive = ref(false);

watch(module, (value) => {
	console.log(value);
	
	if(copyModule === null) {
		copyModule = Object.assign({}, module.value);
	}
});


/* watch(noExitPage, (value) => {
	if(!value) {
		router.push({ name: 'setup-module' })
	}
}); */

store.dispatch('adminPanelModuleEdit/getModule', query.value);

function reset(key: keyof ModuleInterface): void {
	module.value[key] = copyModule[key] as never;
}
function save() {
	if(moduleIsSending.value || !isChangedData.value) {
		return;
	}
	
	store.dispatch('adminPanelModuleEdit/updateModule', module.value);
}

function getCategory() {
	store.dispatch('adminPanelModuleEdit/getModuleList');
}
</script>
<template>
	<div class="flex flex-col gap-10">
		<!--  тут потом будут фильтры -->
		<div class="flex flex-row gap-5">
			<Panel :useInfo="false">
				<template #icon>
					<i class="fa-solid fa-sliders text-2xl text-[#68676E]"></i>
				</template>
			</Panel>

			<Panel
				:title="deleteCount"
				:description="'Удаленные модули'"
				:iconClass="'bg-[var(--color-red1)] text-white'"
			>
				<template #icon>
					<i class="fa-solid fa-trash-can"></i>
				</template>
			</Panel>

			<Panel
				:title="hidenCount"
				:description="'Скрытые модули'"
				:iconClass="'bg-[var(--color-white1)] text-white'"
			>
				<template #icon>
					<i class="fa-regular fa-eye-slash"></i>
				</template>
			</Panel>

			<Panel
				:title="cantDelete"
				:description="'Нельзя удалить'"
				:iconClass="'bg-[var(--color-blue1)] text-white'"
			>
				<template #icon>
					<i class="fa-solid fa-lock"></i>
				</template>
			</Panel>

			<Panel
				:title="main"
				:description="'Главные модули'"
				:iconClass="'bg-[var(--color-green1)] text-white'"
			>
				<template #icon>
					<i class="fa-solid fa-house"></i>
				</template>
			</Panel>
		</div>

		<ModuleList></ModuleList>
	</div>
</template>

<script setup lang="ts">
import { RootStateInterface } from "@/Store";
import { useStore } from "vuex";
import StateInterface from "@/Store/Modules/Module/StateInterface";
import ModuleList from "@/Widgets/AdminPanel/ModuleList/ModuleList.vue";
import Panel from "@/Ui/Panel.vue";
import { computed } from "vue";

const store = useStore<RootStateInterface>();
const moduleList = computed(() => (store.state.module as StateInterface).moduleList);

const hidenCount = computed(() => moduleList.value.filter(i => i.isHide).length);
const deleteCount = computed(() => moduleList.value.filter(i => i.isDelete).length);
const cantDelete = computed(() => moduleList.value.filter(i => !i.canDelete).length);
const main = computed(() => moduleList.value.filter(i => i.isMain).length);
</script>
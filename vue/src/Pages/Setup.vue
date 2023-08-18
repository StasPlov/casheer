<template>
    <div class="flex flex-col">
		<div class="h-24">
			<div class="flex flex-row gap-5 flex-wrap">
				<template v-for="item in moduleList" :key="item.id">
					<RouterLink :to="{ name: item.breadcrumb }">
						<Panel
							:title="item.title"
							:description="item.description"
							:iconClass="'bg-[var(--color-blue1)] text-white'"
						>
							<template #icon>
								<i class="fa-solid fa-trash-can"></i>
							</template>
						</Panel>
					</RouterLink>
				</template>
			</div>
		</div>
    </div>
</template>

<script setup lang="ts">
import { RootStateInterface } from "@/Store";
import StateInterface from "@/Store/Modules/Module/StateInterface";
import Panel from "@/Ui/Panel.vue";
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore<RootStateInterface>();
const moduleList = computed(() => (store.state.module as StateInterface).moduleList.filter(i => i.parent?.breadcrumb === 'setup'));

</script>
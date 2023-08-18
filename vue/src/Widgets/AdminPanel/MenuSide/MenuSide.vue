<template>
	<div class="flex flex-col justify-between py-10 px-5">
		<div class="flex flex-col gap-[3.75rem]">
			
			<div class="flex items-center justify-center">
				<Logo></Logo>
			</div>

			<nav class="flex flex-col">
				<ul class="flex flex-col gap-[3.125rem] items-center">
					<li v-for="item in moduleList" :key="item">
						<RouterLink :to="`/${item.breadcrumb}`">
							<MenuItem
								:text="item.title"
							></MenuItem>
						</RouterLink>
					</li>
				</ul>
			</nav>
		</div>

		<div class="flex flex-col gap-[3.125rem] items-center">
			<RouterLink :to="{ name: 'setup' }">
				<MenuItem
					:icon="`fa-solid fa-gear`"
				></MenuItem>
			</RouterLink>
			
			<MenuItem @click="logout()"
				:icon="`fa-solid fa-right-from-bracket`"
			></MenuItem>
		</div>
	</div>
</template>

<script setup lang="ts">
import MenuItem from "./Components/MenuItem.vue";
import Logo from "@/Components/Logo.vue";
import { useStore } from "vuex";
import { RootStateInterface } from "@/Store";
import { computed } from "vue";
import StateInterface from "./Store/Module/StateInterface";
import { useRouter } from "vue-router";

const store = useStore<RootStateInterface>();
const router = useRouter();

store.dispatch('adminPanelModuleMenuSide/getModuleList');
const moduleList = computed(() => (store.state.adminPanelModuleMenuSide as StateInterface).moduleList.filter(i => i.isMain && i.breadcrumb !== 'setup'));

const menuList = [
	{
		icon: "fa-solid fa-chart-simple"
	},
	{
		icon: "fa-solid fa-cubes-stacked"
	}
]

function logout() {
	store.dispatch('authorization/logout');
	router.push({ name: 'authorization' });
}
</script>
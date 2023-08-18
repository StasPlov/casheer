<template>
    <main class="flex min-h-screen bg-gray-100">
		<MenuSide class="bg-white min-w-[5rem] h-screen sticky top-0 flex flex-col items-center justify-start"></MenuSide>

        <div class="flex flex-col w-full mx-[4.375rem] gap-[3.125rem] py-[1.875rem]">
			<div class="flex flex-row gap-[1.25rem] w-full items-center">
				<Search class="max-w-[36.5625rem] w-full"></Search>
				
				<div class="flex flex-row gap-[0.9375rem] max-phoneX:hidden">
					<RouterLink :to="{ name:'home' }" class="flex">
						<Button class="bg-[#6f4ff2!important] py-5 px-5">
							<img :src="HomeIcon" alt="" class="h-6 filter invert">
						</Button>
					</RouterLink>
				</div>
			</div>

			<div class="flex flex-row justify-between">
				<Title></Title>
				<!-- <Breadcrumb></Breadcrumb> -->
			</div>
			
            <router-view></router-view>
        </div>
    </main>
</template>

<script setup lang="ts">
import Title from "@/Widgets/AdminPanel/Title/Title.vue";
/* import Breadcrumb from "@/Widgets/AdminPanel/Breadcrumb/Breadcrumb.vue"; */
import Button from "@/Ui/Button.vue";
import Search from "./AdminPanel/Search/Search.vue";
import MenuSide from "@/Widgets/AdminPanel/MenuSide/MenuSide.vue";
/* icons */
import HomeIcon from "@/Assets/Icons/home.svg";
import StateInterface from "@/Store/Modules/Authorization/StateInterface";
import { useStore } from "vuex";
import { RootStateInterface } from "@/Store";
import { computed } from "vue";

const store = useStore<RootStateInterface>();
const isLoggedIn = computed(() => !!(store.state.authorization as StateInterface).token);
</script>

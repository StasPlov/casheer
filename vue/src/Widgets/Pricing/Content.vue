<template>
	<div class="w-full bg-[var(--color-black1)]">
        <Light1 class="absolute select-none animate-pulse top-0 z-0" draggable="false"></Light1>
        <Light2 class="absolute select-none animate-pulse z-0" draggable="false"></Light2>
        <Light3 class="absolute select-none right-0 animate-pulse z-0" draggable="false"></Light3>

        <div class="pb-[10vw]">
            <div class="flex flex-col gap-11">
				<Title
					:title="title"
					:description="description"
				></Title>

				<Interface></Interface>
			</div>

            <PlanList></PlanList>
        </div>
	</div>
</template>

<script setup lang="ts">
import Light1 from './Assets/Light1.vue'
import Light2 from './Assets/Light2.vue'
import Light3 from './Assets/Light3.vue'

import Title from './Components/Title.vue'
import Interface from './Components/Interface.vue'
import PlanList from './Components/PlanList.vue'
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { RootStateInterface } from "../../Store";
import PageDataStateInterface from "../../Store/Modules/PageData/StateInterface";

/* const store = useStore<RootStateInterface>();
const pageData = computed<PageDataStateInterface>(() => store.state.pageData);
const content = computed(() => pageData.value.data?.content);

const title = computed<string>(() => content.value?.title);
const description = computed<string>(() => content.value?.description); */

const title = ref('Pricing & Onboarding');
const description = ref('Please select your country and product to know more about the <br>requirements to onboard your business successfully.')
</script>
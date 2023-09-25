<template>
	<div class="flex flex-col w-full bg-[var(--color-black1)] relative justify-center items-start">
		<img v-if="background" :src="background?.url" alt="" class="absolute w-full max-phoneX:hidden animate-pulse select-none z-0" draggable="false">

		<div class="flex flex-col gap-28 px-[7vw] py-[10vw] max-phoneX:justify-between max-phoneX:h-full max-phoneX:pt-[25vh] max-phoneX:pb-[5vh] z-10">
			<div class="flex flex-col gap-16">
                <h1 class="font-mont text-white text-7xl font-bold leading-tight select-none" v-html="title"></h1>

                <hr class="max-w-[70%] max-phoneX:max-w-full">

				<span class="text-white text-3xl font-normal leading-tight select-none" v-html="description"></span>
            </div>
		</div>

	</div>
</template>

<script setup lang="ts">
import Button from "../../Ui/Button.vue";
import ImageInterface from "../../Entity/ImageInterface";
import { useStore } from "vuex";
import { RootStateInterface } from "../../Store";
import PageDataStateInterface from "../../Store/Modules/PageData/StateInterface";
import { computed, ref } from "vue";

/* const store = useStore<RootStateInterface>();
const pageData = computed<PageDataStateInterface>(() => store.state.pageData);
const content = computed(() => pageData.value.data?.header);

const background = computed<ImageInterface>(() => content.value?.background);
const title = computed<string>(() => content.value?.title);
const description = computed<string>(() => content.value?.description); */


const background = computed<ImageInterface>(() => {
    return {
        url: require('@/Assets/Images/casheer_s1_background.png')
    };
});
const title = ref('Casheer <br>Products Pricing <br>& Onboarding');
const description = ref('Onboard your business in real time. <br>Simply view the simple checklist below and sign up. <br>Get started now.')
</script>

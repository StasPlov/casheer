<template>
	<div class="flex flex-col w-full max-md:min-h-0 bg-[var(--color-black1)] relative justify-center items-start">
		<div class="px-[7vw] py-[7vw]">
			<span class="text-6xl font-bold font-mont leading-tight text-transparent bg-clip-text bg-gradient-casheer-to-b anim-bg-grident" v-html="pageDataText"></span>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { RootStateInterface } from "../../Store";
import PageDataStateInterface from "../../Store/Modules/PageData/StateInterface";
import { computed } from "vue";

const store = useStore<RootStateInterface>();
const pageData = computed<PageDataStateInterface>(() => store.state.pageData);
const pageDataText = computed<string>(() => pageData.value.data?.gradient_text);
</script>

<style>
.anim-bg-grident, .anim-bg-grident p {
	-webkit-background-clip: text;
    background-clip: text;
	background: linear-gradient(165deg, #7d00e200 10.24%, #7D00E2 21.24%, #5066F6 33.54%, #1CF4FF 55.78%, #18FE6A 68.07%, #FFF 81.29%, #7d00e200 99.24%);
	background-size: 200% auto;
	animation: shine 8s linear infinite;
}

@keyframes shine {
    to {
      background-position: -200% center;
    }
}
</style>

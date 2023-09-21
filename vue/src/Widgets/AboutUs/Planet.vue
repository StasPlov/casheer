<template>
	<div class="flex items-center justify-around bg-[var(--color-black1)] relative overflow-hidden max-md:flex-col ">
		<img v-if="image" :src="image.url" alt="" height="618" width="618">

		<div class="absolute" ref="animRocket">
			<Rocket ></Rocket>
		</div>
		
		<div class="flex flex-col gap-10 z-10 max-phoneX:px-[7vw]">
			<h2 class="text-white text-5xl font-bold font-mont max-phoneX:text-start leading-tight" v-html="title"></h2>

			<span class="text-white text-2xl font-normal font-[Arial] max-w-[33.8125rem] max-phoneX:text-start" v-html="description">
			</span>
		</div>
	</div>
</template>

<script setup lang="ts">
import Rocket from "./Assets/Rocket.vue";
import { RootStateInterface } from "../../Store";
import PageDataStateInterface from "../../Store/Modules/PageData/StateInterface";
import { computed, ref, watchEffect } from "vue";
import { useStore } from "vuex";
import ImageInterface from "../../Entity/ImageInterface";
import gsap from "gsap";

const store = useStore<RootStateInterface>();
const pageData = computed<PageDataStateInterface>(() => store.state.pageData);
const data = computed(() => pageData.value.data?.planet);

const image = computed<ImageInterface>(() => data.value?.image);
const description = computed<string>(() => data.value?.description);
const title = computed<string>(() => data.value?.title);

const animRocket = ref(null);

// Устанавливаем начальные координаты ракеты
const startX = ref(50);
const startY = ref(10);

// Устанавливаем радиус движения ракеты
const radius = ref(40);

watchEffect(() => {
	animRocket_();
}, { flush: "post" });

function animRocket_() {
	// Создаем анимацию с GSAP
	gsap.to(animRocket.value, {
		motionPath: {
			path: `M${startX.value},${startY.value} a${radius.value},${radius.value} 0 1,0 ${radius.value * 2},0 a${radius.value},${radius.value} 0 1,0 -${radius.value * 2},0`,
			align: animRocket.value,
			autoRotate: true
		},
		duration: 4, // Продолжительность анимации в секундах
		repeat: -1, // Повторять бесконечно
		ease: "linear", // Линейная анимация
	});
}
</script>

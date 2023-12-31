<template>
	<div class="flex items-center justify-around bg-[var(--color-black1)] relative max-phoneX:flex-col rtl:[direction:ltr]">
		<div class="max-phoneX:w-full h-auto z-10 planet scale-[0.8]">
			<div class="relative w-[38.625rem] max-phoneX:left-[-19rem] max-phoneX:w-[49.625rem]">
				<img v-if="image" :src="image.url" alt="" height="618" width="618" class="animate-spin-planet z-10 px-3 w-full">
				<Line class="absolute top-[-7px] left-[17px] w-full h-full object-contain animate-pulse"></Line>
			</div>
			
			<div class="absolute left-16 rtl:right-20 rtl:left-auto z-20" ref="animRocket">
				<Rocket class="rotate-90"></Rocket>
			</div>
		</div>
		
		<div class="flex flex-col gap-10 z-10 px-[8.375rem] rtl:[direction:rtl] max-phoneX:px-[1.375rem] max-phoneX:gap-16 max-phoneX:pt-[8rem]">
			<h2 class="text-white text-5xl text-[2.8125rem] font-bold font-mont max-phoneX:text-start leading-tight z-10 max-phoneX:text-[3.8125rem]" v-html="title"></h2>
			<span class="text-white text-2xl text-[1.5rem] font-normal font-[Arial] max-w-[33.8125rem] max-phoneX:max-w-[30.4375rem] max-phoneX:text-start z-10" v-html="description"></span>
		</div>
	</div>
</template>

<script setup lang="ts">
import Rocket from "./Assets/Rocket.vue";
import Line from "./Assets/Line.vue";
import { RootStateInterface } from "../../Store";
import PageDataStateInterface from "../../Store/Modules/PageData/StateInterface";
import { computed, ref, watchEffect } from "vue";
import { useStore } from "vuex";
import ImageInterface from "../../Entity/ImageInterface";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
gsap.registerPlugin(MotionPathPlugin);

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

let rocketPoints = ref([
	{ x: 20 + Math.random() * 40, y: 20 * Math.random() },
	{ x: 50 + Math.random() * 40, y: 50 * Math.random() },
	{ x: 110 + Math.random() * 40, y: 110 * Math.random() },
	{ x: 250 + Math.random() * 40, y: -50 * Math.random() },
	{ x: 350 + Math.random() * 40, y: 20 * Math.random() },
	{ x: 80 + Math.random() * 40, y: -40 * Math.random() },
	{ x: -10 + Math.random() * 40, y: -80 * Math.random() }
]);

function animRocket_() {
	// Создаем анимацию с GSAP
	gsap.to(animRocket.value, {
		duration: 20,
		yoyo: true,
		motionPath: {
			path: softPointsToCubic(rocketPoints.value, animRocket.value),
			type: "cubic",
			autoRotate: true
		},
		ease: "none",
		repeat: -1
	});
}

function softPointsToCubic(points: any, target: any, curviness: any = undefined) {
	let result: any, getter: any, p1: any, p2: any, v1: any, v2: any, p: any, i: any, a: any, b: any, c: any, d: any, l: any;

	if (target) {
		a = {};
		getter = gsap.getProperty(target);

		for (p in points[0]) {
			a[p] = getter(p);
		}

		points = points.slice(0);
		points.unshift(a);
	}

	!curviness && curviness !== 0 && (curviness = 1);
	curviness *= 2 / 3; // how strongly it pulls toward the control points. Cubic Bezier control points are 2/3rds the distance to the quadratic point.
	d = points[0];
	result = [d];
	l = points.length - 1;

	for (i = 1; i < l; i++) {
		a = d;
		b = {};
		c = {};
		d = {};
		p1 = points[i];
		p2 = points[i + 1];
		
		for (p in a) {
			v1 = a[p];
			v2 = p1[p];
			b[p] = v1 + (v2 - v1) * curviness;
			d[p] = v1 = (i === l - 1) ? p2[p] : (v2 + p2[p]) / 2;
			c[p] = v1 + (v2 - v1) * curviness;
		}

		result.push(b, c, d);
	}

	return result;
}
</script>

<style scoped>

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

@keyframes spin-s {
    to {
        transform: rotate(360deg) scale(1.08);
    }
}

.animate-spin-planet {
    animation: spin 40s linear infinite;
}

.animate-spin-line {
    animation: spin-s 60s linear infinite;
}

.planet {
	filter: drop-shadow(2px 4px 52px #7d02e2);
}
</style>

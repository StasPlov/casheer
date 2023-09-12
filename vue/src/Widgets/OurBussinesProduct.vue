<template>
	<div class="w-full bg-white relative overflow-hidden">
		<div class="flex flex-col gap-28 px-[7vw] py-[20vh] pb-[35vh]">
			<div class="flex flex-col gap-24 justify-center">
				<h1 class="text-[var(--color-black1)] text-3xl font-mont uppercase font-bold text-center">Grow our business with our products</h1>

				<!-- <Carousel :items-to-show="3" :wrap-around="true" :transition="300"> -->
					<div class="flex justify-around max-phoneX:flex-col gap-32">
							<template v-for="item in list" :key="item">
							<div ref="itemsListAnim" class="flex flex-col gap-10 items-start our-bussines-item px-5 py-8 rounded-[1.6875rem] min-h-[27.4375rem] max-w-[23.125rem] mr-8 relative" :style="`--our-bussines-product-them-color: ${item.themColor}`">
								<div class="flex gap-5">
									<img :src="item.icon" alt="" draggable="false" class="select-none w-[5.3125rem] h-[5.3125rem]">
									<h2 class="text-black text-3xl font-mont font-bold text-start">{{ item.title }}</h2>
								</div>

								<span class="text-black text-xl font-[Arial] font-normal text-start" v-html="item.subTitle"></span>

								<Button class="bg-[var(--our-bussines-product-them-color)]">
									<span class="text-black text-base font-semibold font-[Arial]">{{ item.buttonText }}</span>
								</Button>

								<img :src="item.image" alt="" draggable="false" class=" absolute select-none w-[6.25rem] right-10 bottom-[-5.625rem] z-50">
							</div>
						</template>
					</div>
				<!-- </Carousel> -->
			</div>

			<!-- <div class="flex flex-col gap-4 items-start">
				<h1 class="text-[var(--color-violet1)] text-4xl font-mont font-medium">Access your next solution</h1>

				<Button class="border-[var(--color-violet1)] border-solid border-[5px] bg-transparent !rounded-[6.25rem] !px-16 !py-1">
					<span class="text-[var(--color-black1)] text-2xl font-bold font-[Arial]">Get Started</span>
				</Button>
			</div> -->
		</div>
	</div>
</template>

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import Button from "@/Ui/Button.vue";
import { computed, onMounted, ref } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const itemsListAnim = ref([]);

const list = computed(() => [
	{
		icon: require('@/Assets/Icons/casheer checkout icon.png'),
		image: require('@/Assets/Icons/casheer graphics 13.svg'),
		themColor: '#5066F6',
		title: 'Casheer Checkout',
		subTitle: 'Maximise your ROI with the payment hub providing vital customer insights.',
		buttonText: 'Learn More',
	},
	{
		icon: require('@/Assets/Icons/casheer checkout icon.png'),
		image: require('@/Assets/Icons/casheer graphics 13.svg'),
		themColor: '#1CF4FF',
		title: 'Casheer Checkout',
		subTitle: 'Maximise your ROI with the payment hub providing vital customer insights.',
		buttonText: 'Learn More',
	},
	{
		icon: require('@/Assets/Icons/casheer checkout icon.png'),
		image: require('@/Assets/Icons/casheer graphics 13.svg'),
		themColor: '#18FE6A',
		title: 'Casheer Checkout',
		subTitle: 'Maximise your ROI with the payment hub providing vital customer insights.',
		buttonText: 'Learn More',
	},
]);

function animateItemList() {
	gsap.utils.toArray<any>(itemsListAnim.value).forEach((element, i) => {
		gsap.fromTo(element, {
			opacity: 0,
			x: '-50%',
			y: '20%',
			rotate: '35deg'
		},{
			opacity: 1,
			autoAlpha: 1,
			delay: i * 0.5,
			duration: 2,
			x: 0,
			y: 0,
			rotate: 0,
			ease: 'power4.out',
			scrollTrigger: {
				trigger: element,
				start: 'top 100%',
				end: 'bottom bottom',
				toggleActions: "play none none reset",
			},
		});
	});
}
onMounted(() => {
	animateItemList();
});

</script>
<style scoped>
.our-bussines-item {
	background: linear-gradient(145deg, var(--our-bussines-product-them-color) -1.21%, rgba(47, 128, 237, 0.00) 100%)!important;
}
</style>

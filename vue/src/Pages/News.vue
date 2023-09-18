<template>
	<div class="bg-[var(--color-black1)] min-h-screen">
		<div class="px-[7vw] py-[1vw] flex flex-col gap-11 max-phoneX:gap-11">

			<div class="flex flex-col gap-6 max-phoneX:gap-11">
				<div class="grid grid-cols-[auto_23.125rem] gap-6 w-full max-phoneX:grid-cols-1 max-phoneX:gap-11">
					<div>
						<NewsItem
							:item="newsList[0]"
						></NewsItem>
					</div>

					<div class="flex flex-col gap-10 max-phoneX:gap-11 text-[13px]">
						<NewsItem 
							:item="newsList[1]"
						></NewsItem>

						<NewsItem
							:item="newsList[2]"
						></NewsItem>
					</div>
				</div>

				<ul class="grid grid-cols-3 grid-flow-row gap-6 max-md:grid-cols-2 max-phoneX:flex max-phoneX:flex-col max-phoneX:gap-11">
					<li v-for="item in newsList" :key="item" ref="itemsListAnim">
						<NewsItem class="text-[13px]"
							:item="item"
						></NewsItem>
					</li>
				</ul>
			</div>

			<Button class="bg-transparent self-center">
				<span class="text-white text-3xl font-bold font-mont underline text-center">More news</span>
			</Button>
		</div>
	</div>
</template>

<script setup lang="ts">
import Button from "@/Ui/Button.vue";
import { onMounted, ref } from "vue";
import NewsItem from "@/Widgets/News/News.vue";
import NewsInterface from "../Widgets/News/Type/NewsInterface";

import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const newsList = ref<Array<NewsInterface>>([
	{
		title: 'Lorem ipsum dolor sit amet',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum pharetra odio, quis efficitur diam rhoncus at. Nam semper, nulla vel commodo fermentum, velit nulla lacinia tortor, ac tincidunt ligula dolor ut nisi. Vestibulum eget quam elit. Nullam tempor viverra massa vitae porttitor. ',
		image: require('@/Assets/Images/casheer news image 7.png'),
		link: '1'
	},
	{
		title: 'Lorem ipsum dolor sit amet',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum pharetra odio, quis efficitur diam rhoncus at. Nam semper, nulla vel commodo fermentum, velit nulla lacinia tortor, ac tincidunt ligula dolor ut nisi. Vestibulum eget quam elit. Nullam tempor viverra massa vitae porttitor. ',
		image: require('@/Assets/Images/casheer news image 7.png'),
		link: '1'
	},
	{
		title: 'Lorem ipsum dolor sit amet',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum pharetra odio, quis efficitur diam rhoncus at. Nam semper, nulla vel commodo fermentum, velit nulla lacinia tortor, ac tincidunt ligula dolor ut nisi. Vestibulum eget quam elit. Nullam tempor viverra massa vitae porttitor. ',
		image: require('@/Assets/Images/casheer news image 7.png'),
		link: '1'
	},
	{
		title: 'Lorem ipsum dolor sit amet',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum pharetra odio, quis efficitur diam rhoncus at. Nam semper, nulla vel commodo fermentum, velit nulla lacinia tortor, ac tincidunt ligula dolor ut nisi. Vestibulum eget quam elit. Nullam tempor viverra massa vitae porttitor. ',
		image: require('@/Assets/Images/casheer news image 7.png'),
		link: '1'
	},
	{
		title: 'Lorem ipsum dolor sit amet',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum pharetra odio, quis efficitur diam rhoncus at. Nam semper, nulla vel commodo fermentum, velit nulla lacinia tortor, ac tincidunt ligula dolor ut nisi. Vestibulum eget quam elit. Nullam tempor viverra massa vitae porttitor. ',
		image: require('@/Assets/Images/casheer news image 7.png'),
		link: '1'
	},
	{
		title: 'Lorem ipsum dolor sit amet',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum pharetra odio, quis efficitur diam rhoncus at. Nam semper, nulla vel commodo fermentum, velit nulla lacinia tortor, ac tincidunt ligula dolor ut nisi. Vestibulum eget quam elit. Nullam tempor viverra massa vitae porttitor. ',
		image: require('@/Assets/Images/casheer news image 7.png'),
		link: '1'
	}
]);


const itemsListAnim = ref([]);

function animateItemList() {
	gsap.utils.toArray<any>(itemsListAnim.value).forEach((element, i) => {
		gsap.fromTo(element, {
			opacity: 0,
			y: '50px',
		},{
			opacity: 1,
			autoAlpha: 1,
			delay: i * 0.25,
			duration: 2,
			y: '0',
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

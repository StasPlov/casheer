<template>
	<div class="bg-[var(--color-black1)] min-h-screen">
		<div class="px-[7vw] py-[1vw] flex flex-col gap-6 max-phoneX:gap-11">

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

			<ul class="flex gap-6 max-phoneX:flex-col max-phoneX:gap-11">
				<li v-for="item in newsList" :key="item">
					<NewsItem class="text-[13px]"
						:item="item"
					></NewsItem>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import NewsItem from "@/Widgets/News/News.vue";
import NewsInterface from "../Widgets/News/Type/NewsInterface";

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
	}
]);
</script>

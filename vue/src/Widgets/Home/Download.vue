<template>
	<div class="w-full bg-gradient-casheer-dowload-to-b relative max-md:overflow-hidden">
		<div class="px-[7vw] py-[5vh] max-md:pb-[15.625rem]">
			<div class="flex flex-col gap-7 z-10">
				<h2 class="text-white font-mont text-[3.375rem] font-bold max-phoneX:text-center">Download now <br>Let’s grow!</h2>

				<ul class="flex gap-8 max-md:flex-col items-start">
					<li v-for="item in downloadList" :key="item" class="flex flex-col gap-8">
						<img :src="item.img" alt="" class=" select-none" draggable="false">

						<Button class="border-2 border-white border-solid bg-transparent !rounded-[6.25rem]">
							<img :src="item.button.icon" alt="">
						</Button>
					</li>
				</ul>
			</div>

			<img :src="casheerImage2" alt="" class="max-w-[65.875rem] w-[70%] absolute right-0 bottom-0 z-0 max-md:min-w-full max-phoneX:min-w-[150%] max-phoneX:right-[-12.5rem]">
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import casheerImage2 from "@/Assets/Images/casheer image 2.png";
import Button from "@/Ui/Button.vue";

const downloadList = computed(() => [
	{
		img: require('@/Assets/Images/casheer qr temporary 1.png'),
		button: {
			icon: require('@/Assets/Icons/casheer app store button.svg'),
		}
	},
	{
		img: require('@/Assets/Images/casheer qr temporary 1.png'),
		button: {
			icon: require('@/Assets/Icons/casheer app store button.svg'),
		}
	},
]);
</script>

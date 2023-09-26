<template>
	<footer class="flex flex-col bg-[var(--color-black1)] overflow-hidden">
		<slot>
			<div class="px-[7vw] py-[10vh] border-t-[3px] border-white flex flex-col gap-5 items-center">
				<div class="flex flex-col gap-7">
					<h2 class="text-white text-3xl font-bold font-mont text-center">Contact us</h2>
				
					<Button class="gap-5">
						<img :src="iconCollIcon" alt="" class="h-5">
						<span class="text-base text-white font-semibold font-[Arial] tracking-wide">+965 22598808</span>
					</Button>
				</div>
				

				<div class="flex flex-col gap-7 items-center w-full">
					<h3 class="text-xl text-white font-normal font-[Arial]">Subscribe for newsletter</h3>

					<Input class="border-[0.1875rem] border-white !rounded-[6.25rem] !bg-transparent max-w-[48.125rem] py-2 pl-8 text-[var(--color-silver1)] text-xl font-[Arial]" placeholder="Your email address">
						<template #content-after>
							<Button class="!rounded-full h-10 w-10 !p-2">
								<img :src="sendIcon" alt="" class="h-5">
							</Button>
						</template>
					</Input>
				</div>
			</div>

			<div class="px-[7vw] py-[10vh] border-t-[3px] border-white w-full flex flex-col gap-20">
				<div class="flex flex-col gap-8">
					<img v-if="logo" :src="logo" alt="" class="w-[10rem]">

					<div class="grid grid-cols-3">
						<div class="flex flex-col gap-4" v-for="menu in menuList" :key="menu">
							<h2 class="text-white text-base font-[Arial] font-semibold" v-if="menu.title">{{ menu.title }}</h2>

							<ul class="flex flex-col gap-4">
								<li v-for="item in menu.list" :key="item">
									<a :href="item.link" v-if="item.link" class=" text-white text-base font-normal font-[Arial]cursor-default">{{ item.text }}</a>
									<span class="text-white text-base font-normal font-[Arial] cursor-default" v-else>{{ item.text }}</span>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div>
					<!-- social list -->
				</div>
			</div>
		</slot>
	</footer>
</template>

<script setup lang="ts">
import logo from "@/Assets/casheer logo.png";
import Button from "@/Ui/Button.vue";
import Input from "@/Ui/Input.vue";
import iconCollIcon from "@/Assets/Icons/icon_coll.svg";
import sendIcon from "@/Assets/Icons/send.svg";
import MenuInterface from "../Widgets/Footer/Type/MenuInterface";
import { computed } from "vue";
import ImageInterface from "../Entity/ImageInterface";

const socialList = computed(() => []); /* imageInterfaceArray */
const menuList = computed<Array<MenuInterface>>(() => {
	return [
		{
			title: '',
			list: [
				{
					text: 'Products',
					link: ''
				},
				{
					text: 'About us',
					link: ''
				},
				{
					text: 'Lets Talk',
					link: ''
				},
				{
					text: 'News',
					link: ''
				}
			]
		},
		{
			title: 'Contacts',
			list: [
				{
					text: 'Lorem Ipsum is simply dummy',
					link: ''
				},
				{
					text: 'Lorem Ipsum is simply dummy',
					link: ''
				}
			]
		},
		{
			title: 'Explore',
			list: [
				{
					text: 'Terms of Use',
					link: ''
				},
				{
					text: 'Privacy Policy',
					link: ''
				},
				{
					text: 'FAQ',
					link: ''
				},
				{
					text: 'Copyright',
					link: ''
				},
				{
					text: 'Data Privacy',
					link: ''
				},
				{
					text: 'DDisclaimer',
					link: ''
				}
			]
		}
	]
});
</script>

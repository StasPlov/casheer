<template>
	<div class="w-full min-h-screen bg-[var(--color-black1)] relative">
		<div class="py-[5vw] px-[7vw] grid grid-cols-2 items-center max-phoneX:flex max-phoneX:flex-col-reverse max-phoneX:gap-20">

			<div class="flex justify-end max-phoneX:self-start">
				<div class="flex flex-col gap-16">
					<h2 class="text-white text-6xl font-normal leading-tight max-phoneX:hidden">Payments need to <br><strong>be easy.</strong></h2>

					<div class="flex flex-col gap-8">
						<template v-for="item in list" :key="item">
							<Dropdown class="gap-8 z-10"
								:style="`--dropdown-color: ${item.item?.style?.color}`" 
								:classIsOpen="`!text-[var(--dropdown-color)] !font-bold`" 
								:item="item"
								@selectItem="setSelectItem"
							>
								<template #text>
									<h3 class="text-white text-2xl font-semibold font-mont transition-all cursor-default select-none hover:scale-110 hover:translate-x-3 duration-500" v-html="item.item.title"></h3>
								</template>
								
								<template #content>
									<div class="flex flex-col gap-4 max-w-[16.875rem]">
										<span class="text-white text-lg font-normal block select-none" v-html="item.item.description"></span>
										
										<div class="flex gap-2 self-end items-center" v-if="item.item.buttonText">
											<span class="text-white text-[Arial] text-xl font-normal leading-none">{{ item.item.buttonText }}</span>
											<Button class="bg-transparent !p-0">></Button>
										</div>
									</div>
								</template>
							</Dropdown>
						</template>
					</div>
				</div>
			</div>
			

			<div class="flex justify-center">
				<img :src="itemSelect?.style?.image" alt="" class="w-[26.875rem] h-min select-none z-10" v-if="itemSelect?.style?.image" ref="phoneImage" draggable="false">
				<img :src="itemSelect?.style?.backgroundImage" alt="" class="absolute select-none right-0 bottom-0 animate-pulse" v-if="itemSelect?.style?.backgroundImage" ref="phoneImageBackground" draggable="false">
			</div>

			<h2 class="text-white text-6xl font-normal leading-tight hidden max-phoneX:block">Payments need to <br><strong>be easy.</strong></h2>
		</div>
	</div>
</template>


<script setup lang="ts">
import backgroundWallet from "@/Assets/Images/casheer_phone_wallet.png";
import background from "@/Assets/Images/casheer_s1_background.png";
import backgroundMob from "@/Assets/Images/casheer_background_mobile.png";
import ButtonImage from "@/Assets/Icons/ButtonImage.svg";
import Dropdown from "@/Ui/Dropdown/Dropdown.vue";
import Button from "@/Ui/Button.vue";
import PaymentsInterface from "./Entity/PaymentsInterface";
import { computed, onMounted, ref, watch } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ItemInterface from "../../Ui/Dropdown/Type/ItemInterface";
gsap.registerPlugin(ScrollTrigger);

const phoneImage = ref(null);
const phoneImageBackground = ref(null);

let list = ref<Array<ItemInterface>>([]);
let listIsInit = ref(false);
let itemSelect = ref<ItemInterface>(null);

const itemList = computed<Array<PaymentsInterface>>(() => [
	{
		title: 'Casheer Invoice',
		description: 'Unlock a world of valuable insights to give your business every advantage it needs.',
		buttonText: 'Get insights',
		url: '',
		style: {
			color: 'var(--color-violet1)',
			image: require('@/Assets/Images/Wallet dasboard black vilet.png'),
			backgroundImage: require('@/Assets/Images/Rectangle.png')
		}
	},
	{
		title: 'Casheer Checkout',
		description: 'Maximise your ROI with the payment hub providing vital customer insights.',
		buttonText: 'Explore now',
		url: '',
		style: {
			color: 'var(--color-blue1)',
			image: require('@/Assets/Images/Wallet dasboard black bleu.png'),
			backgroundImage: require('@/Assets/Images/Rectangle (2).png')
		}
	},
	{
		title: 'Casheer Tap & Go',
		description: 'Streamline your point of sale and increase customer engagement with peace-of-mind.',
		buttonText: 'Discover how',
		url: '',
		style: {
			color: 'var(--color-arcic1)',
			image: require('@/Assets/Images/Wallet dasboard black.png'),
			backgroundImage: require('@/Assets/Images/casheer_desktop wallpaper-10 1.png')
		}
	},
	{
		title: 'Casheer Wallet',
		description: 'Manage your Casheer Cards and financials, accept payments, and transfer funds with ease.',
		buttonText: 'Open yours',
		url: '',
		style: {
			color: 'var(--color-green1)',
			image: require('@/Assets/Images/casheer_phone_wallet.png'),
			backgroundImage: require('@/Assets/Images/casher background wallet (1).png')
		}
	}]
);

watch(itemList.value, () => {
	if(!listIsInit.value) {
		initList();
	}
});

onMounted(() => {
	if(!listIsInit.value) {
		initList();
	}

	animatePhone();
});

function initList(active: PaymentsInterface | undefined) {
	list.value = itemList.value.map((element, i) => {
		const isActive = (active && active === element) ? true : (active === undefined) ? i === 0 : false; // first item is active set
		return {
			isActive: isActive,
			item: element
		}
	});

	itemSelect.value = list.value.find(i => i.isActive);
	listIsInit.value = true;
}

function setSelectItem(item: ItemInterface) {
	animatePhone();
	animatePhoneBg();
	list.value.forEach(i => {
		if(i === item) {
			itemSelect.value = i.item;
			i.isActive = true;
			return;
		}

		i.isActive = false
	});
}

function animatePhone() {
	gsap.fromTo(
		phoneImage.value,
		{
			opacity: 0,
			autoAlpha: 0,
			y: '200px'
		},
		{
			opacity: 1,
			autoAlpha: 1,
			y: 0,
			duration: 3,
			ease: 'power4.out'
			/* opacity: 1,
			autoAlpha: 1,
			delay: 0.5,
			duration: 3,
			scale: 1,
			ease: 'power4.out',
			scrollTrigger: {
				trigger: phoneImage.value,
				start: 'top 50%',
				end: 'bottom bottom',
				toggleActions: "play none none reset",
			}, */
		}
	);
}

function animatePhoneBg() {
	gsap.fromTo(
		phoneImageBackground.value,
		{
			opacity: 0,
			autoAlpha: 0,
		},
		{
			opacity: 1,
			autoAlpha: 1,
			duration: 4,
			ease: 'power4.out'
		}
	);
}
</script>

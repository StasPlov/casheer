<template>
	<div class="w-full min-h-screen bg-[var(--color-black1)] relative">

		<div class="flex py-[5vw]">
			<div class="flex-1 flex items-center justify-end">
				<div class="flex flex-col gap-16">
					<h2 class="text-white text-6xl font-normal leading-tight">Payments need to <br><strong>be easy.</strong></h2>

					<div class="flex flex-col gap-8">
						<template v-for="item in itemList" :key="item">
							<Dropdown class="gap-8" classIsOpen="!text-[var(--color-green1)] !font-bold">
								<template #text>
									<h3 class="text-white text-2xl font-semibold font-mont transition-all" v-html="item.title"></h3>
								</template>
								
								<template #content>
									<div class="flex flex-col gap-4 max-w-[16.875rem]">
										<span class="text-white text-lg font-normal block" v-html="item.description"></span>
										
										<div class="flex gap-2 self-end items-center">
											<span class="text-white text-[Arial] text-xl font-normal leading-none">Open yours</span>

											<Button class="bg-transparent !p-0">
												<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
													<circle cx="20" cy="20" r="17.5" stroke="url(#paint0_angular_378_233)" stroke-width="5"/>
													<circle cx="20.5" cy="37.5" r="2.5" fill="#18FE6A"/>
													<path d="M17 26.8633L23 19.8365L17 12.8097" stroke="white" stroke-width="2.89231" stroke-linecap="round"/>
													<defs>
														<radialGradient id="paint0_angular_378_233" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(20 20) rotate(90) scale(20)">
														<stop stop-color="#18FE6A"/>
														<stop offset="1" stop-color="#18FE6A" stop-opacity="0.1"/>
														</radialGradient>
													</defs>
												</svg>
											</Button>
										</div>
									</div>
								</template>
							</Dropdown>
						</template>
					</div>
				</div>
			</div>

			<div class="flex-1 flex justify-center">
				<Transition>
					<img :src="backgroundWallet" alt="" class="w-[26.875rem] h-[42.4375rem]" v-if="backgroundWallet">
				</Transition>
			</div>
		</div>
	</div>
</template>


<script setup lang="ts">
import backgroundWallet from "@/Assets/Images/casheer_phone_wallet.png";
import background from "@/Assets/Images/casheer_s1_background.png";
import backgroundMob from "@/Assets/Images/casheer_background_mobile.png";
import ButtonImage from "@/Assets/Icons/ButtonImage.svg";
import Dropdown from "@/Ui/Dropdown.vue";
import Button from "@/Ui/Button.vue";
import PaymentsInterface from "./Entity/PaymentsInterface";
import { computed } from "vue";

const itemList = computed(() => [
	{
		title: 'Casheer Invoice',
		description: 'Manage your Casheer Cards and financials, accept payments, and transfer funds with ease.',
		url: ''
	},
	{
		title: 'Casheer Checkout',
		description: 'Manage your Casheer Cards and financials, accept payments, and transfer funds with ease.',
		url: ''
	},
	{
		title: 'Casheer Tap & Go',
		description: 'Manage your Casheer Cards and financials, accept payments, and transfer funds with ease.',
		url: ''
	},
	{
		title: 'Casheer Wallet',
		description: 'Manage your Casheer Cards and financials, accept payments, and transfer funds with ease.',
		url: ''
	}] as Array<PaymentsInterface>);
</script>

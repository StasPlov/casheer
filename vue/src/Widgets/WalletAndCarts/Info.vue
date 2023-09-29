<template>
	<div class="flex flex-col w-full bg-[var(--color-black1)] relative justify-center items-start overflow-hidden" v-if="content">

		<div class="px-[7vw] py-[13vw] pb-[7vw] w-full">
			<div class="grid grid-cols-2 gap-14 max-md:grid-cols-1">
	
				<div class="flex flex-col gap-16  max-md:pb-20">
					<div class="flex flex-col gap-0">
						<h1 class="text-[5.625rem] font-mont font-bold leading-normal text-transparent bg-clip-text bg-gradient-casheer-WalletAndCard-text-center" v-html="first.title"></h1>
						<span class="text-white text-4xl font-normal leading-tight font-[Arial]" v-html="first.sub_title"></span>
					</div>

					<ul class="flex flex-col gap-5 max-md:hidden">
						<li class="flex items-center gap-3 before:content-normal before:flex before:min-w-[1rem] before:min-h-[1rem] before:rounded-full before:bg-[var(--color-green1)]"
							v-for="item in first.list" :key="item"
						>
							<span class="text-white text-2xl font-[Arial] font-normal">{{ item.title }}</span>
						</li>
					</ul>
				</div>

				<div class="flex justify-start">
					<div class="relative top-[-3.125rem]">
						<img v-if="first.image_1" :src="first.image_1.url" alt="" class="animation-levitate-one w-[49.4375rem] relative select-none z-10" draggable="false" ref="waletImage">
					</div>
				</div>

				<div class="hidden flex-col gap-16 max-md:flex">
					<ul class="flex flex-col gap-5">
						<li class="flex items-center gap-3 before:content-normal before:flex before:w-4 before:h-4 before:rounded-full before:bg-[var(--color-green1)]"
							v-for="item in first.list" :key="item"
						>
							<span class="text-white text-2xl font-[Arial] font-semibold">{{ item.title }}</span>
						</li>
					</ul>
				</div>

			</div>
		</div>

		<Supported v-if="paymentsMethod"
			:title="paymentTitle"
			:list="paymentList"
		></Supported>

		<div class="px-[7vw] py-[13vw] pt-[9vw] flex flex-col gap-20 w-full">
			<div class="grid grid-cols-[max-content_auto] gap-32 max-lg:grid-cols-1 max-lg:pb-[9.375rem] max-md:pb-0">
				<div class="flex flex-col gap-0">
					<h1 class="text-[5.625rem] font-mont font-bold text-transparent bg-clip-text bg-gradient-casheer-WalletAndCard-text-center leading-none" v-html="two.title"></h1>
					<span class="text-white text-4xl font-normal leading-tight font-[Arial]" v-html="two.sub_title"></span>
				</div>

				<div class="mt-10 max-md:hidden">
					<ul class="flex flex-col gap-5 max-md:hidden">
						<li class="flex items-center gap-3 before:content-normal before:flex before:min-w-[1rem] before:min-h-[1rem] before:rounded-full before:bg-[var(--color-green1)]"
							v-for="item in two.list" :key="item"
						>
							<span class="text-white text-2xl font-[Arial] font-normal">{{ item.title }}</span>
						</li>
					</ul>
				</div>
			</div>

			<div class="flex py-[9.375rem] pb-[5.625rem]">
				<div class="relative max-md:hidden w-full mt-[-3.125rem]">
					<img v-if="two.image_1" :src="two.image_1.url" alt="" class="animation-levitate-one w-[65.6875rem] relative select-none z-10" draggable="false">
					<img v-if="two.image_2" :src="two.image_2.url" alt="" class="animation-levitate-two w-[35rem] absolute select-none top-[-18.75rem] left-[-7vw] z-10" draggable="false">
					<img v-if="two.image_3" :src="two.image_3.url" alt="" class="animation-levitate-three w-[35rem] absolute select-none top-[0.625rem] right-[-7vw] z-10" draggable="false">
				</div>

				<div class="hidden relative max-md:flex w-full mt-[-3.125rem]">
					<img v-if="two.image_mobile" :src="two.image_mobile.url" alt="" class="animation-levitate-one right-[7vw] min-w-[calc(100%_+_14vw)] relative select-none z-10" draggable="false">
				</div>
			</div>

			<div class="hidden mt-10 max-md:flex">
				<ul class="flex flex-col gap-5">
					<li class="flex items-center gap-3 before:content-normal before:flex before:min-w-[1rem] before:min-h-[1rem] before:rounded-full before:bg-[var(--color-green1)]"
						v-for="item in two.list" :key="item"
					>
						<span class="text-white text-2xl font-[Arial] font-normal">{{ item.title }}</span>
					</li>
				</ul>
			</div>
		</div>
		
		<div class="px-[7vw] py-[13vw] pb-0 w-full">
			<div class="grid grid-cols-2 gap-14 max-md:grid-cols-1">
	
				<div class="flex flex-col gap-16  max-md:pb-20">
					<div class="flex flex-col gap-0">
						<h1 class="text-[5.625rem] font-mont font-bold leading-normal text-transparent bg-clip-text bg-gradient-casheer-WalletAndCard-text-center" v-html="three.title"></h1>
						<span class="text-white text-4xl font-normal leading-tight font-[Arial]" v-html="three.sub_title"></span>
					</div>

					<ul class="flex flex-col gap-5 max-md:hidden">
						<li class="flex items-center gap-3 before:content-normal before:flex before:min-w-[1rem] before:min-h-[1rem] before:rounded-full before:bg-[var(--color-green1)]"
							v-for="item in three.list" :key="item"
						>
							<span class="text-white text-2xl font-[Arial] font-normal">{{ item.title }}</span>
						</li>
					</ul>
				</div>

				<div class="flex justify-center">
					<div class="relative">
						<img v-if="three.image_1" :src="three.image_1.url" alt="" class="animation-levitate-one w-[21.875rem] relative select-none z-10" draggable="false" ref="waletImage">
						<img v-if="three.image_2" :src="three.image_2.url" alt="" class="animation-levitate-two w-[18.5rem] absolute select-none bottom-0 left-[11.75rem]" draggable="false" ref="waletImage">
						<img v-if="three.image_3" :src="three.image_3.url" alt="" class="animation-levitate-three w-[17.5rem] absolute select-none z-10 top-[13.125rem] left-[-6.875rem]" draggable="false" ref="waletImage">
					</div>	
				</div>

				<div class="hidden flex-col gap-16 max-md:flex">
					<ul class="flex flex-col gap-5">
						<li class="flex items-center gap-3 before:content-normal before:flex before:min-w-[1rem] before:min-h-[1rem] before:rounded-full before:bg-[var(--color-green1)]"
							v-for="item in three.list" :key="item"
						>
							<span class="text-white text-2xl font-[Arial] font-semibold">{{ item.title }}</span>
						</li>
					</ul>
				</div>

			</div>
		</div>

		<div class="px-[7vw] py-[13vw] w-full">
			<div class="grid grid-cols-2 gap-14 max-md:grid-cols-1">
	
				<div class="flex flex-col gap-16 order-1 max-md:order-none ">
					<div class="flex flex-col gap-0">
						<h1 class="text-4xl font-mont font-bold leading-normal text-white" v-html="last.title"></h1>
						
						<span class="text-white text-2xl font-normal leading-tight font-[Arial]" v-html="last.description"></span>
					</div>

					<div class="flex flex-col gap-16">
						<ul class="flex flex-col gap-5 max-md:hidden">
							<li class="flex items-center gap-3 before:content-normal before:flex before:min-w-[1rem] before:min-h-[1rem] before:rounded-full before:bg-[var(--color-green1)]"
								v-for="item in last.list" :key="item"
							>
								<span class="text-white text-2xl font-[Arial] font-normal">{{ item.title }}</span>
							</li>
						</ul>

						<span class="text-white text-sm font-[Arial] font-normal" v-html="last.text"></span>
					</div>
				</div>

				<div class="flex justify-start max-md:order-1">
					<div class="relative top-[-3.125rem]">
						<img v-if="last.image_1" :src="last.image_1.url" alt="" class="animation-levitate-one w-[49.4375rem] relative select-none z-10 animate-pulse" draggable="false" ref="waletImage">
					</div>	
				</div>

				<div class="hidden flex-col gap-16 max-md:flex">
					<ul class="flex flex-col gap-5">
						<li class="flex items-center gap-3 before:content-normal before:flex before:min-w-[1rem] before:min-h-[1rem] before:rounded-full before:bg-[var(--color-green1)]"
							v-for="item in last.list" :key="item"
						>
							<span class="text-white text-2xl font-[Arial] font-semibold">{{ item.title }}</span>
						</li>
					</ul>

					<span class="text-white text-sm font-[Arial] font-normal" v-html="last.text"></span>
				</div>

			</div>
		</div>

	</div>
</template>

<script setup lang="ts">
import Supported from './Supported.vue';
import PageDataStateInterface from "../../Store/Modules/PageData/StateInterface";
import { computed, onMounted, ref } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { RootStateInterface } from "../../Store";
import { useStore } from "vuex";
import ImageInterface from '../../Entity/ImageInterface';

gsap.registerPlugin(ScrollTrigger);

const phoneImage = ref(null);
const phoneImage2 = ref(null);
const arrowImage = ref(null);
const itemsListAnim = ref([]);

const store = useStore<RootStateInterface>();
const pageData = computed<PageDataStateInterface>(() => store.state.pageData);
const content = computed(() => pageData.value.data?.content);
const paymentsMethod = computed(() => pageData.value.data?.payments_method);

const first = computed(() => content.value?.first);
const two = computed(() => content.value?.two);
const three = computed(() => content.value?.three);
const last = computed(() => content.value?.last);

/* payments list */
const paymentList = computed<Array<{ image: ImageInterface }>>(() => paymentsMethod.value?.method_list ?? []);
const paymentTitle = computed<string>(() => paymentsMethod.value?.title);

onMounted(() => {
	animatePhone();
	animatePhone2();
	animateArrow();
	animateItemList();
});

const textList = computed<Array<string>>(() => [
	'Join the virtual banking space using your ID and selfie-cam verification. ',
	'Explore a world of cashback benefits and offers. ',
	'Freeze, unfreeze, and suspend cards in an instant.',
	'Fund your account using your existing bank card, Benefit Pay, or Fawri and Fawri+ accounts. '
]);

const textClientList = computed<Array<string>>(() => [
	'At your service 24-7.',
	'Connect bank accounts, execute billings, or issue transfers in one comprehensive solution that’s both transparent and secure.',
	'Casheer grants you control through open, democratized financials in a complete and compliant solution.'
]);

const textEmpoweredList = computed<Array<string>>(() => [
	'Register with ease and simplicity to launch your Casheer virtual card using your connected mobile device.',
	'Your new financial superpower costs no fees or hidden charges. ',
	'Manage your accounts with no minimum salary or balance.'
]);

const textCardList = computed<Array<string>>(() => [
	'Digital Banking App – Virtual IBAN*',
	'Wallet Account',
	'Casheer MasterCard',
	'Virtual & Physical Branded Cards'
]);

function animatePhone() {
	gsap.fromTo(
		phoneImage.value,
		{
			opacity: 0,
			autoAlpha: 0,
			y: '200px',
		},
		{
			opacity: 1,
			autoAlpha: 1,
			duration: 3,
			y: '0px',
			ease: 'power4.out',
			scrollTrigger: {
				trigger: phoneImage.value,
				start: 'top 100%',
				end: 'bottom bottom',
				toggleActions: "play none none reset",
			},
		}
	);
}

function animatePhone2() {
	gsap.fromTo(
		phoneImage2.value,
		{
			opacity: 0,
			autoAlpha: 0,
			x: '50%',
		},
		{
			opacity: 1,
			autoAlpha: 1,
			duration: 3,
			delay: 1.5,
			x: '0',
			ease: 'power4.out',
			scrollTrigger: {
				trigger: phoneImage2.value,
				start: 'top 100%',
				end: 'bottom bottom',
				toggleActions: "play none none reset",
			},
		}
	);
}

function animateArrow() {
	gsap.fromTo(
		arrowImage.value,
		{
			opacity: 0,
			autoAlpha: 0,
			y: '400px',
		},
		{
			opacity: 1,
			autoAlpha: 1,
			duration: 3,
			delay: 1,
			y: '0px',
			ease: 'power4.out',
			scrollTrigger: {
				trigger: arrowImage.value,
				start: 'top 100%',
				end: 'bottom bottom',
				toggleActions: "play none none reset",
			},
		}
	);
}

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
</script>

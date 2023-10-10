<template>
	<div class="w-full bg-[var(--color-black1)] relative" v-if="pageData">
		<div class="pt-[19.4375rem] pb-[8.125rem] pl-[14.6875rem] grid grid-cols-2 items-center max-phoneX:pb-0 max-phoneX:pt-12 max-phoneX:items-start max-phoneX:flex max-phoneX:flex-col-reverse max-phoneX:gap-20 max-phoneX:px-[1.125rem]">

			<div class="flex">
				<div class="flex flex-col gap-16 z-30">
					<h2 class="text-white text-6xl font-normal leading-tight max-phoneX:hidden rtl:font-[Arial]" v-html="title"></h2>

					<div class="flex flex-col gap-6 z-10" v-if="list.length">
						<template v-for="item in list" :key="item">
							<Dropdown class="gap-8 z-10"
								:style="`--dropdown-color: ${item.item?.color}`" 
								:classIsOpen="`!text-[var(--dropdown-color)] !font-bold rtl:font-normal`" 
								:item="item"
								@selectItem="setSelectItem"
							>
								<template #text>
									<h3 class="text-white text-2xl font-semibold rtl:font-normal font-mont transition-all cursor-default select-none hover:scale-110 hover:translate-x-3 duration-500 max-phoneX:text-[1.9rem] max-phoneX:leading-8 max-phoneX:font-medium" v-html="item.item.title"></h3>
								</template>
								
								<template #content>
									<div class="flex flex-col gap-4 max-w-[16.875rem] max-phoneX:max-w-[25.3rem]">
										<span class="text-white text-lg font-normal block select-none rtl:font-[Arial] max-phoneX:text-[1.68rem] max-phoneX:leading-tight" v-html="item.item.description"></span>
										
										<a :href="item.item.button.link?.url ?? ''" v-if="item.item.button.is_active" class="flex gap-2 self-end items-center">
											<span class="text-white font-[Arial] text-xl font-normal leading-none max-phoneX:text-[1.9rem]">{{ item.item.button.text }}</span>
											
											<Button class="bg-transparent !p-0">
												<ButtonIcon :color="item.item?.color"></ButtonIcon>
											</Button>
										</a>
									</div>
								</template>
							</Dropdown>
						</template>
					</div>
				</div>
			</div>
			
			<div class="flex justify-start max-phoneX:justify-center max-phoneX:w-full">
				<img v-if="imageSelect" :src="imageSelect.url" alt="" class=" w-[26.875rem] object-contain h-min select-none z-20" ref="phoneImage" draggable="false">
				<img v-if="imageBgSelecet" :src="imageBgSelecet.url" alt="" class="max-phoneX:top-[-16.25rem] max-phoneX:min-w-[300%] absolute select-none right-0 top-0 animate-pulse z-10 mix-blend-lighten" ref="phoneImageBackground" draggable="false">
			</div>

			<h2 class="text-white text-6xl font-normal leading-tight hidden max-phoneX:block" v-html="title"></h2>
		</div>
	</div>
</template>


<script setup lang="ts">
import ButtonIcon from "./Assets/ButtonIcon.vue";
import Dropdown from "@/Ui/Dropdown/Dropdown.vue";
import Button from "@/Ui/Button.vue";
import PaymentsInterface from "./Entity/PaymentsInterface";
import { computed, onMounted, ref, watch } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ItemInterface from "../../Ui/Dropdown/Type/ItemInterface";
import { useStore } from "vuex";
import { RootStateInterface } from "../../Store";
import PageDataStateInterface from "../../Store/Modules/PageData/StateInterface";

gsap.registerPlugin(ScrollTrigger);

let phoneImage = ref(null);
let phoneImageBackground = ref(null);

let list = ref<Array<ItemInterface>>([]);
let listIsInit = ref(false);
let itemSelect = ref<ItemInterface>(null);

let imageSelect = ref(null);
let imageBgSelecet = ref(null);

const store = useStore<RootStateInterface>();
const pageData = computed<PageDataStateInterface>(() => store.state.pageData);
const title = computed<string>(() => pageData.value.data?.payments_title);
const itemList = computed<Array<PaymentsInterface>>(() => pageData.value.data?.payments ?? []);

watch(pageData.value, () => {
	if(!itemList.value.length) {
		return;
	}
	
	if(!listIsInit.value) {
		initList();
		listIsInit.value = true;
	}
}, { flush: "post" });

/* onMounted(() => {
	if(!listIsInit.value) {
		initList();
	}

	phoneImage = ref(null);
	phoneImageBackground = ref(null);
}); */

function initList(active: PaymentsInterface | undefined = undefined) {
	list.value = itemList.value.map((element, i) => {
		const isActive = (active && active === element) ? true : (active === undefined) ? i === 0 : false; // first item is active set
		return {
			isActive: isActive,
			item: element
		}
	});

	itemSelect.value = list.value.find(i => i.isActive);

	imageSelect.value = itemSelect.value?.item?.image;
	imageBgSelecet.value = itemSelect.value?.item?.background;

	animatePhone();
}

function setSelectItem(item: ItemInterface) {
	animatePhone();
	animatePhoneBg();
	itemSelect.value = null;

	list.value.forEach(i => {
		if(i === item) {
			itemSelect.value = i.item;
			imageSelect.value = i.item?.image;
			imageBgSelecet.value = i.item?.background;

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
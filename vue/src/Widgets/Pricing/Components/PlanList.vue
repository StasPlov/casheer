<template>
	<div class="w-full bg-[var(--color-black1)]">
        <Carousel
            :items-to-show="2" 
            :wrap-around="true" 
            :transition="300"
            :snapAlign="'center'"
            :pauseAutoplayOnHover="true"
        >
            <Slide v-for="item in list" :key="item">
                <Plan
                    :item="item"
                >
                </Plan>
            </Slide>
        </Carousel>	
	</div>
</template>

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { computed } from 'vue'
import Plan from './Plan/Plan.vue'
import PlanInterface from './Plan/Type/PlanInterface';

/* import Title from './Components/Title.vue'
import Interface from './Components/Interface.vue'
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { RootStateInterface } from "../../Store";
import PageDataStateInterface from "../../Store/Modules/PageData/StateInterface";

const store = useStore<RootStateInterface>();
const pageData = computed<PageDataStateInterface>(() => store.state.pageData);
const content = computed(() => pageData.value.data?.content);

const title = computed<string>(() => content.value?.title);
const description = computed<string>(() => content.value?.description);
 */
/* const title = ref('Pricing & Onboarding');
const description = ref('Please select your country and product to know more about the <br>requirements to onboard your business successfully.') */

const list = computed<Array<PlanInterface>>(() => [
    {
        title: 'Startup Plan',
        description: 'A complete payment <br>Platform for your business',
        info: 'Up to KD 3,000 <br>Platform fee: KD 15 <br>Credit cards <br>2.75% + 100 Fils <br>Knet 0.300 fils <br>Wire Transfer: 300 fils',
        list: [
            {
                is_active: true,
                description: 'Everything you need to manage payments'
            },
            {
                is_active: true,
                description: 'Access to local payment methods'
            },
            {
                is_active: true,
                description: 'Standard fraud monitoring'
            },
            {
                is_active: true,
                description: 'No setup or integration fees'
            },
            {
                is_active: true,
                description: 'Integration support:<strong> based on enquiry</strong>'
            },
            {
                is_active: true,
                description: 'Support: <strong>8 hours</strong>'
            },
            {
                is_active: false,
                description: 'Tokenization'
            },
            {
                is_active: false,
                description: 'Click to pay'
            },
            {
                is_active: false,
                description: 'Recurring'
            },
        ]
    },
    {
        title: 'Startup Plan',
        description: 'A complete payment <br>Platform for your business',
        info: '<font class="font-bold text-transparent bg-clip-text bg-gradient-casheer-title-to-b">Up to KD 3,000 </font><br>Platform fee: <font class="font-bold text-transparent bg-clip-text bg-gradient-casheer-title-to-b">KD 15 </font><br>Credit cards <br><font class="font-bold text-transparent bg-clip-text bg-gradient-casheer-title-to-b">2.75% + 100 Fils </font><br>Knet <font class="font-bold text-transparent bg-clip-text bg-gradient-casheer-title-to-b">0.300 fils </font><br>Wire Transfer: <font class="font-bold text-transparent bg-clip-text bg-gradient-casheer-title-to-b">300 fils</font>',
        list: [
            {
                is_active: true,
                description: 'Everything you need to manage payments'
            },
            {
                is_active: true,
                description: 'Access to local payment methods'
            },
            {
                is_active: true,
                description: 'Standard fraud monitoring'
            },
            {
                is_active: true,
                description: 'No setup or integration fees'
            },
            {
                is_active: true,
                description: 'Integration support:<strong> based on enquiry</strong>'
            },
            {
                is_active: true,
                description: 'Support: <strong>8 hours</strong>'
            },
            {
                is_active: false,
                description: 'Tokenization'
            },
            {
                is_active: false,
                description: 'Click to pay'
            },
            {
                is_active: false,
                description: 'Recurring'
            },
        ]
    },
    {
        title: 'Startup Plan',
        description: 'A complete payment <br>Platform for your business',
        info: 'Up to KD 3,000 <br>Platform fee: KD 15 <br>Credit cards <br>2.75% + 100 Fils <br>Knet 0.300 fils <br>Wire Transfer: 300 fils',
        list: [
            {
                is_active: true,
                description: 'Everything you need to manage payments'
            },
            {
                is_active: true,
                description: 'Access to local payment methods'
            },
            {
                is_active: true,
                description: 'Standard fraud monitoring'
            },
            {
                is_active: true,
                description: 'No setup or integration fees'
            },
            {
                is_active: true,
                description: 'Integration support:<strong> based on enquiry</strong>'
            },
            {
                is_active: true,
                description: 'Support: <strong>8 hours</strong>'
            },
            {
                is_active: false,
                description: 'Tokenization'
            },
            {
                is_active: false,
                description: 'Click to pay'
            },
            {
                is_active: false,
                description: 'Recurring'
            },
        ]
    }
]);
</script>
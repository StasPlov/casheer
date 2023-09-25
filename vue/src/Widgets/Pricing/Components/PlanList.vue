<template>
	<div class="w-full bg-[var(--color-black1)]">
        <Carousel
            :items-to-show="countItemsToShow" 
            :wrap-around="true" 
            :transition="500"
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
import { Carousel, Slide } from 'vue3-carousel'
import { computed, ref } from 'vue'
import Plan from './Plan/Plan.vue'
import PlanInterface from './Plan/Type/PlanInterface';

let curentRectWidth = ref(document.querySelector('html').clientWidth as number);

const isMobile = computed(() => curentRectWidth.value < 425);
const isTablet = computed(() => curentRectWidth.value < 768);
const isTabletBig = computed(() => curentRectWidth.value < 1024);
const countItemsToShow = computed(() => {
	if(isMobile.value) {
		return 1;
	}

	if(isTablet.value) {
		return 1;
	}

	if(isTabletBig.value) {
		return 2;
	}

	return 2;
});

window.addEventListener('resize', () => {
	resize();
});

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

function resize() {
	curentRectWidth.value = document.querySelector('html').clientWidth as number;
}
</script>

<style scoped>
.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.85);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.8);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.8);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1);
}
</style>
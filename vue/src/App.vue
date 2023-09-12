<template>
	<Header></Header>
	<Main>
		<component :is="currentPage"></component>
	</Main>
	<Footer></Footer>
</template>

<script setup lang="ts">
import Header from './Widgets/Header.vue';
import Main from './Widgets/Main.vue';
import Footer from './Widgets/Footer.vue';
import { computed } from 'vue';

/* Pages */
import Home from './Pages/Home.vue';
import About from './Pages/About.vue';
import Invoice from './Pages/Invoice.vue';
import Checkout from './Pages/Checkout.vue';
import TouchTap from './Pages/TouchTap.vue';
import WalletCards from './Pages/WalletCards.vue';
import News from './Pages/News.vue';
import NewsSingle from './Pages/NewsSingle.vue';
import PricingOnboarding from './Pages/PricingOnboarding.vue';
import NotFound from './Pages/404.vue';

interface PropsInterface {
	pageId?: number,
	ajaxUrl: string,
	pageName: string
}

const props = withDefaults(defineProps<PropsInterface>(), {
	pageId: 1, 
	ajaxUrl: '',
	pageName: 'привет-мир' // помнеять на проде на "привет-мир"
});

/* 
	тут будет определяться какой шаблон(страницу) отрисовывать
	сюда ее нужно просто добавить, id странциы из wp и шаблон который ей соотвествует
*/
/* eslint-disable */
const routes = {
	'привет-мир': Home,
	'about-us': About,
	'invoice': Invoice,
	'checkout': Checkout,
	'touch-tap': TouchTap,
	'wallet-cards': WalletCards,
	'news': News,
	'news-single': NewsSingle,
	'pricing-onboarding': PricingOnboarding,
	'not-found': NotFound
}

const currentPage = computed(() => {
	return routes[props.pageName] || null;
});
console.log(props);

</script>

<style>
@import './Assets/Fonts/Mont/stylesheet.css';
@import './Assets/Fonts/Roboto/stylesheet.css';
@import url('https://use.fontawesome.com/releases/v6.2.0/css/all.css');

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
	--color-black1: #1B1B1B;
	--color-silver1: #959595;
	--color-violet1: #7D00E2;
	--color-green1: #00FF70;
	--color-blue1: #5066F6;
	--color-arcic1: #1CF4FF;
}

/* @media (min-width: 320px) {
    .container {
        max-width: 320px;
    }
}
@media (min-width: 375px) {
    .container {
        max-width: 375px;
    }
} */
@media (max-width: 425px) {
	html {
       font-size: 10px!important;
    }
}
@media (max-width: 640px) {
    html {
       font-size: 10px!important;
    }
}
@media (max-width: 768px) {
    html {
       font-size: 12px!important;
    }
}
@media (max-width: 1024px) {
    html {
       font-size: 14px!important;
    }
}
@media (max-width: 1280px) {
    html {
       font-size: 15px!important;
    }
}
@media (max-width: 1536px) {
    html {
       font-size: 16px!important;
    }
}

/* img {
	content-visibility: auto;
} */

big {
	font-weight: bold;
}

p:not(:last-child) { /* Каждый эелмент кроме послеженго, есил у нас больше 1 параграфа, то будет отступ */
	margin-bottom: 1.5625rem;
}

/* default transition anim */
.v-enter-active, 
.v-leave-active {
	transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 350ms;
	height: min-content;
}
.v-enter-from, 
.v-leave-to {
	opacity: 0;
	height: 0;
}

/* popup trasnition */
.popup-enter-active, 
.popup-leave-active {
	transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 350ms;
}
.popup-enter-from, 
.popup-leave-to {
	opacity: 0;
	transform: translateY(5px);
}

/* trasnition fade top */
.fade-top-enter-active, 
.fade-top-leave-active {
	transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 450ms;
}
.fade-top-enter-from, 
.fade-top-leave-to {
	opacity: 0;
	transform: translateY(-10px);
}
</style>
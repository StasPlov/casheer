<template>
	<Header></Header>
	<Main>
		<component :is="currentPage"></component>
	</Main>
	<Footer></Footer>
</template>

<script setup lang="ts">
/* eslint-disable */
import Header from './Widgets/Header.vue';
import Main from './Widgets/Main.vue';
import Footer from './Widgets/Footer.vue';
import { computed, onMounted, ref, watch } from 'vue';
import { useStore } from 'vuex'
import { RootStateInterface } from './Store/index';

/* Pages */
import Home from './Pages/Home.vue';
/* for test */ import Always from './Widgets/Home/Always.vue';
import About from './Pages/About.vue';
import Invoice from './Pages/Invoice.vue';
import Checkout from './Pages/Checkout.vue';
import TouchTap from './Pages/TouchTap.vue';
import WalletCards from './Pages/WalletCards.vue';
import News from './Pages/News.vue';
import NewsPost from './Pages/NewsPost.vue';
import Support from './Pages/Support.vue';
import Pricing from './Pages/Pricing.vue';
import NotFound from './Pages/404.vue';

const store = useStore<RootStateInterface>();

interface PropsInterface {
	pageId?: number;
	ajaxUrl: string;
	pageName: string;
	pageTemplate: string;
	postType: string;
	formHtml: string;
}

const props = withDefaults(defineProps<PropsInterface>(), {
	pageId: 692, 
	ajaxUrl: '',
	pageName: 'home', // "привет-мир" is home page
	pageTemplate: 'index.php', // empty string is Home page
	postType: '',
	formHtml: ''
});

/* 
	тут будет определяться какой шаблон(страницу) отрисовывать
	сюда ее нужно просто добавить, id странциы из wp и шаблон который ей соотвествует
*/

const routesTemplate = {
	'index.php': Home,
	'template-about.php': About,
	'template-invoice.php': Invoice,
	'template-checkout.php': Checkout,
	'template-touch-and-tap.php': TouchTap,
	'template-wallet-and-cards.php': WalletCards,
	'template-news.php': News,
	'template-support.php': Support,
	'template-pricing.php': Pricing,
}

const currentPage = computed(() => {
	type t = keyof typeof routesTemplate
	const n:t = props.pageTemplate as t;
	let template = routesTemplate[n] || null;

	if(props.postType === 'news-post') {
		template = NewsPost;
	}

	return template;
});

onMounted(() => {
	store.commit('pageInfo/setPageName', props.pageName);
	store.commit('pageInfo/setAjaxUrl', props.ajaxUrl);
	store.commit('pageInfo/setPageId', props.pageId);
	store.commit('pageInfo/setPageTemplate', props.pageTemplate);
	store.commit('pageInfo/setPostType', props.postType);
	store.commit('pageInfo/setFormHtml', props.formHtml);
});

console.log(props);

/* dev vue  */

/* const routes = { // for page name
	'': Home,
	'about-us':  About,
	'invoice': Invoice,
	'checkout': Checkout,
	'touch-tap': TouchTap,
	'wallet-cards': WalletCards,
	'news': News,
	'news-single': NewsSingle,
	'support': Support,
	'pricing': Pricing,
	'not-found': NotFound
}
const currentPath = ref(window.location.pathname)
window.addEventListener('change', () => {
  	currentPath.value = window.location.pathname
})
const currentPage = computed(() => {
	type t = keyof typeof routes
	const n: t = (currentPath.value.slice(1) || 'привет-мир') as t;
	return routes[n].template || routes['привет-мир'].template;
})
console.log(currentPage.value); */
</script>

<style>
@media (min-width: 320px) {
    html {
       font-size: 9px!important;
    }
}
@media (min-width: 390px) {
    html {
       font-size: 10px!important;
    }
}
@media (min-width: 425px) {
	html {
       font-size: 10px!important;
    }
}
@media (min-width: 640px) {
    html {
       font-size: 10px!important;
    }
}
@media (min-width: 768px) {
    html {
       font-size: 12px!important;
    }
}
@media (min-width: 1024px) {
    html {
       font-size: 14px!important;
    }
}
@media (min-width: 1280px) {
    html {
       font-size: 15px!important;
    }
}
@media (min-width: 1536px) {
    html {
       font-size: 16px!important;
    }
}

@import './Assets/Fonts/Mont/stylesheet.css';
@import './Assets/Fonts/Roboto/stylesheet.css';

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
	--color-black1: #1B1B1B;
	--color-silver1: #959595;
	--color-violet1: #7D00E2;
	--color-green1: #00FF70;
	--color-blue1: #5066F6;
	--color-arctic1: #1CF4FF;
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

.animation-levitate-one {
	animation: levitate-animation 2s ease-in-out infinite alternate;
	transform-origin: center;
	transform: translate3d(0, 0, 0);
}

.animation-levitate-two {
	animation: levitate-animation 2.2s ease-in-out infinite alternate;
	transform-origin: center;
	transform: translate3d(0, 0, 0);
}
.animation-levitate-three {
	animation: levitate-animation 2.4s ease-in-out infinite alternate;
	transform-origin: center;
	transform: translate3d(0, 0, 0);
}

@keyframes levitate-animation {
	0% {
		transform: translate3d(0, 0, 0);
	}
	100% {
		transform: translate3d(0, -10px, 0);
	}
}
</style>
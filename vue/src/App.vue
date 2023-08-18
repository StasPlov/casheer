<template>
	<Header></Header>
	<Main></Main>
	<Footer></Footer>
</template>

<script setup lang="ts">
import Header from './Widgets/Header.vue';
import Main from './Widgets/Main.vue';
import Footer from './Widgets/Footer.vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import axios from 'axios';
import { computed } from 'vue';
import StateInterface from './Store/Modules/Authorization/StateInterface';
</script>

<style>
@import './Assets/Fonts/Lato/stylesheet.css';
@import './Assets/Fonts/Montserrat/stylesheet.css';
@import './Assets/Fonts/OpenSans/stylesheet.css';
@import './Assets/Fonts/Roboto/stylesheet.css';
@import url('https://use.fontawesome.com/releases/v6.2.0/css/all.css');

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
	--color-silver1: #f2f2f2;
	--color-silver2: #6c7aa0;
	--color-silver3: #65646a;
	--color-silver4: #d9d9d9;
	--color-silver5: #68676e;

	--color-pink1: #fcc5c5;
	--color-red1: #dc3546;
	--color-green1: #4acb67;
	--color-green2: #50ba23;
	--color-white1: #f9d62c;
	--color-blue1: #6097ea;
	
	--color-violet1: #b966ff;
	--color-violet2: #6f4ff2;

	--color-black1: #263238;
}

/* default transition anim */
.v-enter-active, 
.v-leave-active {
	transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 350ms;
}
.v-enter-from, 
.v-leave-to {
	opacity: 0;
}

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
</style>
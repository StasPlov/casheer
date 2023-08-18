/* eslint-disable */
import { createApp } from "vue";
import App from '@/App.vue';
import store from '@/Store';
import clickOutside from "@/Service/ClickOutside";

export const app = createApp(App)
	.use(store)
	.directive('click-outside', clickOutside);

app.mount('#app');

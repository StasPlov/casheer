/* eslint-disable */
import { createApp } from "vue";
import App from '@/App.vue';
import store from '@/Store';
import clickOutside from "@/Service/ClickOutside";

export const app = createApp(App)
	.use(store)
	.directive('click-outside', clickOutside);

/* function initVueInstance(selector, initFunction, glob = null) {
	// document.querySelectorAll(selector).forEach(element => {
	[].forEach.call(document.querySelectorAll(selector), element => {
		if (element.id) {
			if (glob !== null) {
				window[glob] = initFunction(element)
			} else {
				initFunction(element)
			}
		} else {
			console.warn('element does not have an ID and will not be used as Vue instance element', element)
		}
	})
} */
app.mount('#app');

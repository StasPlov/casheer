/* eslint-disable */
import { createApp } from "vue";
import App from '@/App.vue';
import store from '@/Store';
import clickOutside from "@/Service/ClickOutside";

const appElement = document.getElementById('app');
let props = null;

if(appElement !== null) {
	props = { ...appElement.dataset };
} 

export const app = createApp(App, props)
	.use(store)
	.directive('v-click-outside', clickOutside);
app.mount('#app');

if(appElement !== null) {
	Object.keys(appElement.dataset).forEach(dataKey => { // remove datatset atribute after get props
		delete appElement.dataset[dataKey];
	});
}
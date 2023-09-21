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

/* 
initVueInstance('[home-page]', Home);
function initVueInstance(selector: string, template: any) {
    document.querySelectorAll(selector).forEach(element => {
        if (element) {
            const app = createApp(template, { ...(element as HTMLElement).dataset })
				.use(store)
				.directive('click-outside', clickOutside);
			app.mount(selector);
			
			const dataset = (element as HTMLElement).dataset

			Object.keys(dataset).forEach(dataKey => { // remove datatset atribute after get props
				delete dataset[dataKey];
			});
        } else {
            console.warn('element does not have an ID and will not be used as Vue instance element', element)
        }
    })
} */
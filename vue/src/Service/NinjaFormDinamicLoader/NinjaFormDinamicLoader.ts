import NinjaFormScriptInterface from "./NinjaFormScriptInterface";

export default class NinjaFormDinamicLoader {
	formId: number;
	targetContainer: HTMLElement;

	formHTML: string;
	formTemplates: string;
	formScripts: { 'nf-front-end': NinjaFormScriptInterface, 'nf-front-end-deps': NinjaFormScriptInterface };

	constructor(formId: number = 0, targetContainer: HTMLElement, formHTML: string, formTemplates: string, formScripts: { 'nf-front-end': NinjaFormScriptInterface, 'nf-front-end-deps': NinjaFormScriptInterface }) {
		this.formId = formId;
		this.targetContainer = targetContainer;
		this.formHTML = formHTML;
		this.formTemplates = formTemplates;
		this.formScripts = formScripts;
	}

	load() {
		this.loadFormHTML(this.formHTML, this.targetContainer);
		this.loadTemplates(this.formTemplates);
		this.loadScripts(this.formScripts);
	}

	loadFormHTML(form: string, targetContainer: HTMLElement) {
		targetContainer.append(form);
	}

	loadTemplates(templates: string) {
		document.body.innerHTML += templates;
	}
	
	loadScripts(scripts: { 'nf-front-end': NinjaFormScriptInterface, 'nf-front-end-deps': NinjaFormScriptInterface }) {
		for (const [key, value] of Object.entries(scripts)) {
			const script = document.createElement('script');

			// note that eval() can be dangerous to use - do your research
			// eslint-disable-next-line
			eval(value.extra.data);
			script.setAttribute('src', value.src);
			const appendChild = document.head.appendChild(script);
		}
	}
}
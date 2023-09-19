import { Module } from "vuex";
import State from "./State";
import StateInterface from "./StateInterface";

const module: Module<StateInterface, any> = {
	namespaced: true,
	state: () => new State(),
	getters: {
		pageId: state => state.pageId,
		ajaxUrl: state => state.ajaxUrl,
		pageName: state => state.pageName,
	},
	mutations: {
		setPageName(state: StateInterface, payload: string): void {
			state.pageName = payload;
		},
		setAjaxUrl(state: StateInterface, payload: string): void {
			state.ajaxUrl = payload;
		},
		setPageId(state: StateInterface, payload: number): void {
			state.pageId = payload;
		},
	},
	actions: {

	},
}
export default module;
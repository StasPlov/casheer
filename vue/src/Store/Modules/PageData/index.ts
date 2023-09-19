import ModuleInterface from "@/Entity/ModuleInterface";
import Utils from "@/Service/Utils/Utils";
import { Module } from "vuex";
import State from "./State";
import StateInterface from "./StateInterface";

const module: Module<StateInterface, any> = {
	namespaced: true,
	state: () => new State(),
	getters: {
		data: state => state.data,
		dataIsLoading: state => state.dataIsLoading,
	},
	mutations: {
		setData(state: StateInterface, payload: any): void {
			state.data = payload;
		},
		setdataIsLoading(state: StateInterface, payload: boolean): void {
			state.dataIsLoading = payload;
		},
	},
	actions: {
		async getPageData(context, params) {
			context.commit('setdataIsLoading', true);

			try {
				const result = await Utils.fetchData('GET', null, null, params);
				
				if(result.status === 200 && !!result.data) {
					context.commit('setData', result.data);
				}
			} catch (error) {
				console.error(`request error: ${error}`);
			}

			context.commit('setdataIsLoading', false);
		},
	},
}
export default module;
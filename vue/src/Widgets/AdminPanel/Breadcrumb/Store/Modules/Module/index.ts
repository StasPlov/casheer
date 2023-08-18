import ModuleInterface from "@/Entity/ModuleInterface";
import Utils from "@/Service/Utils/Utils";
import { Module } from "vuex";
import State from "./State";
import StateInterface from "./StateInterface";

const module: Module<StateInterface, any> = {
	namespaced: true,
	state: () => new State(),
	getters: {
		moduleList: state => state.moduleList,
		moduleListIsLoading: state => state.moduleListIsLoading,
		moduleListIsSending: state => state.moduleListIsSending,
	},
	mutations: {
		setModuleList(state: StateInterface, payload: Array<ModuleInterface>): void {
			state.moduleList = payload;
		},
		setModuleListIsLoading (state: StateInterface, payload: boolean): void {
			state.moduleListIsLoading = payload;
		},
		setModuleListIsSending (state: StateInterface, payload: boolean): void {
			state.moduleListIsSending = payload;
		},
	},
	actions: {
		async getModuleList(context, params) {
			context.commit('setModuleListIsLoading', true);
			try {
				const result = await Utils.fetchData<Array<ModuleInterface>>('POST', 'get', 'module', params);
				
				if(result.status === 200 && !!result.data) {
					context.commit('setModuleList', result.data.data);
				}
			} catch (error) {
				console.error(`request error: ${error}`);
			}
			context.commit('setModuleListIsLoading', false);
		},
		async sendModuleList(context, params: ModuleInterface) {
			context.commit('setModuleListIsSending', true);
			try {
				await Utils.fetchData('POST', 'set', 'module', params);
			} catch (error) {
				console.error(`request error: ${error}`);
			}
			context.commit('setModuleListIsSending', false);
		},
	},
}
export default module;
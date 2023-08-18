import ModuleInterface from "@/Entity/ModuleInterface";
import Utils from "@/Service/Utils/Utils";
import { Module } from "vuex";
import State from "./State";
import StateInterface from "./StateInterface";




const module: Module<StateInterface, any> = {
	namespaced: true,
	state: () => new State(),
	getters: {
		module: state => state.module,
		moduleList: state => state.moduleList,
		moduleListIsLoading: state => state.moduleListIsLoading,
		moduleIsSending: state => state.moduleIsSending,
		moduleIsLoading: state => state.moduleIsLoading
	},
	mutations: {
		setModuleList(state: StateInterface, payload: Array<ModuleInterface>): void {
			state.moduleList = payload;
		},
		setModule(state: StateInterface, payload: ModuleInterface): void {
			state.module = payload;
		},
		setModuleListIsLoading (state: StateInterface, payload: boolean): void {
			state.moduleListIsLoading = payload;
		},
		setModuleIsSending (state: StateInterface, payload: boolean): void {
			state.moduleIsSending = payload;
		},
		setModuleIsLoading (state: StateInterface, payload: boolean): void {
			state.moduleIsLoading = payload;
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
		async getModule(context, params) {
			context.commit('setModuleIsLoading', true);
			try {
				const result = await Utils.fetchData<Array<ModuleInterface>>('POST', 'get', 'module', params);
				
				if(result.status === 200 && !!result.data.data.length) {
					context.commit('setModule', result.data.data[0]);
				}
			} catch (error) {
				console.error(`request error: ${error}`);
			}
			context.commit('setModuleIsLoading', false);
		},
		async createModule(context, params: ModuleInterface) {
			context.commit('setModuleIsSending', true);
			try {
				const result = await Utils.fetchData('POST', 'set', 'module', params);
				/* if(result.status !== 200) {

				} */
			} catch (error) {
				console.error(`request error: ${error}`);
			}
			context.commit('setModuleIsSending', false);
		},
		async updateModule(context, params: ModuleInterface) {
			context.commit('setModuleIsSending', true);
			try {
				const result = await Utils.fetchData('POST', 'update', 'module', params);
				/* if(result.status !== 200) {

				} */
			} catch (error) {
				console.error(`request error: ${error}`);
			}
			context.commit('setModuleIsSending', false);
		},
	},
}
export default module;
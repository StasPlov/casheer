import { Module } from "vuex";
import State from "./State";
import StateInterface from "./StateInterface";
import Utils from "@/Service/Utils/Utils";

const module: Module<StateInterface, any> = {
	namespaced: true,
	state: () => new State(),
	getters: {
		data: state => state.data,
		dataIsLoading: state => state.dataListIsLoading,
	},
	mutations: {
		setData(state: StateInterface, payload: any): void {
			state.data = payload;
		},
		setDataIsLoading(state: StateInterface, payload: boolean): void {
			state.dataListIsLoading = payload;
		}
	},
	actions: {
		async getData(context, params) {
			context.commit('setDataIsLoading', true);

			try {
				const result = await Utils.fetchData<Array<any>>('GET', null, null, params);
				
				if(result.status === 200 && !!result.data) {
					context.commit('setData', result.data);
				}
			} catch (error) {
				console.error(`request error: ${error}`);
			}

			context.commit('setDataIsLoading', false);
		},
	},
}
export default module;
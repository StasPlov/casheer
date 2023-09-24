import { Module } from "vuex";
import State from "./State";
import StateInterface from "./StateInterface";
import Utils from "@/Service/Utils/Utils";

const module: Module<StateInterface, any> = {
	namespaced: true,
	state: () => new State(),
	getters: {
		filterList: state => state.filterList,
		totalCount: state => state.totalCount,
		filterListIsLoading: state => state.filterListIsLoading,
	},
	mutations: {
		setFilterList(state: StateInterface, payload: Array<any>): void {
			state.filterList = payload;
		},
		setTotalCount(state: StateInterface, payload: number): void {
			state.totalCount = payload;
		},
		setFilterListIsLoading(state: StateInterface, payload: boolean): void {
			state.filterListIsLoading = payload;
		}
	},
	actions: {
		async getFilterList(context, params) {
			context.commit('setFilterListIsLoading', true);

			try {
				const result = await Utils.fetchData<Array<any>>('GET', null, null, params);
				
				if(result.status === 200 && !!result.data) {
					context.commit('setFilterList', result.data.data);

					if(result.data.count) {
						context.commit('setTotalCount', result.data.count);
					}
				}
			} catch (error) {
				console.error(`request error: ${error}`);
			}

			context.commit('setFilterListIsLoading', false);
		},
	},
}
export default module;
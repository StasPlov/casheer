import Utils from "@/Service/Utils/Utils";
import { Module } from "vuex";
import { SearchType } from "../../../../Search/Type/SearchType";
import State from "./State";
import StateInterface from "./StateInterface";

const module: Module<StateInterface, any> = {
	namespaced: true,
	state: () => new State(),
	getters: {
		search: state => state.search,
		searchIsLoading: state => state.searchIsLoading,
	},
	mutations: {
		setSearch(state: StateInterface, payload: SearchType) {
			state.search = payload;
		},
		setSearchIsLoading(state: StateInterface, payload: boolean) {
			state.searchIsLoading = payload;
		},
	},
	actions: {
		async getSearch(context, params) {
			context.commit('setSearchIsLoading', true);
			try {
				const result = await Utils.fetchData<SearchType>('POST', null, 'search', params,);

				if(result.status === 200 && !!result.data) {
					context.commit('setSearch', result.data.data);
				}
			} catch (error) {
				console.error(`request error: ${error}`);
			}
			context.commit('setSearchIsLoading', false);
		},
	},
}
export default module;
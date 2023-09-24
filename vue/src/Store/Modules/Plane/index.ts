import { Module } from "vuex";
import State from "./State";
import StateInterface from "./StateInterface";
import Utils from "@/Service/Utils/Utils";

const module: Module<StateInterface, any> = {
	namespaced: true,
	state: () => new State(),
	getters: {
		planeList: state => state.planeList,
		totalCount: state => state.totalCount,
		planeListIsLoading: state => state.planeListIsLoading,
	},
	mutations: {
		setPlaneList(state: StateInterface, payload: Array<any>): void {
			state.planeList = payload;
		},
		setTotalCount(state: StateInterface, payload: number): void {
			state.totalCount = payload;
		},
		setPlaneListIsLoading(state: StateInterface, payload: boolean): void {
			state.planeListIsLoading = payload;
		}
	},
	actions: {
		async getPlaneList(context, params) {
			context.commit('setPlaneListIsLoading', true);

			try {
				const result = await Utils.fetchData<Array<any>>('GET', null, null, params);
				
				if(result.status === 200 && !!result.data) {
					context.commit('setPlaneList', result.data.data);

					if(result.data.count) {
						context.commit('setTotalCount', result.data.count);
					}
				}
			} catch (error) {
				console.error(`request error: ${error}`);
			}

			context.commit('setPlaneListIsLoading', false);
		},
	},
}
export default module;
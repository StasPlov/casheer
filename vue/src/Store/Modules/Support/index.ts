import { Module } from "vuex";
import State from "./State";
import StateInterface from "./StateInterface";
import NewsPageDataInterface from "@/Entity/NewsPageDataInterface";
import Utils from "@/Service/Utils/Utils";

const module: Module<StateInterface, any> = {
	namespaced: true,
	state: () => new State(),
	getters: {
		postList: state => state.postList,
		totalCount: state => state.totalCount,
		postListIsLoading: state => state.postListIsLoading,
	},
	mutations: {
		setPostList(state: StateInterface, payload: Array<any>): void {
			state.postList = payload;
		},
		addPostList(state: StateInterface, payload: Array<any>): void {
			state.postList = [...state.postList, ...payload];
		},
		setTotalCount(state: StateInterface, payload: number): void {
			state.totalCount = payload;
		},
		setPostListIsLoading(state: StateInterface, payload: boolean): void {
			state.postListIsLoading = payload;
		}
	},
	actions: {
		async getPostList(context, params) {
			context.commit('setPostListIsLoading', true);

			try {
				const result = await Utils.fetchData<Array<any>>('GET', null, null, params);
				
				if(result.status === 200 && !!result.data) {
					context.commit('setPostList', result.data.data);

					if(result.data.count) {
						context.commit('setTotalCount', result.data.count);
					}
				}
			} catch (error) {
				console.error(`request error: ${error}`);
			}

			context.commit('setPostListIsLoading', false);
		},

		async addPostList(context, params) {
			context.commit('setPostListIsLoading', true);

			try {
				const result = await Utils.fetchData<Array<any>>('GET', null, null, params);
				
				if(result.status === 200 && !!result.data) {
					context.commit('addPostList', result.data.data);
				}
			} catch (error) {
				console.error(`request error: ${error}`);
			}

			context.commit('setPostListIsLoading', false);
		},
	},
}
export default module;
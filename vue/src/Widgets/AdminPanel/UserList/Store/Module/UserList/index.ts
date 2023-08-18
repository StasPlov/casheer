import UserInterface from "@/Entity/UserInterface";
import Utils from "@/Service/Utils/Utils";
import { SearchType } from "@/Widgets/AdminPanel/Search/Type/SearchType";
import { Module } from "vuex";
import State from "./State";
import StateInterface from "./StateInterface";

const module: Module<StateInterface, any> = {
	namespaced: true,
	state: () => new State(),
	getters: {
		userList: state => state.userList,
		userListIsLoading: state => state.userListIsLoading,
	},
	mutations: {
		setUserList(state: StateInterface, payload: Array<UserInterface>) {
			state.userList = payload;
		},
		setUserListIsLoading(state: StateInterface, payload: boolean) {
			state.userListIsLoading = payload;
		},
	},
	actions: {
		async getUserList(context, params) {
			try {
				context.commit('setUserListIsLoading', true);
				const result = await Utils.fetchData<Array<UserInterface>>('POST', 'get', 'user', params);

				if(result.status === 200 && !!result.data) {
					context.commit('setUserList', result.data.data);
				}
				context.commit('setUserListIsLoading', false);
				return true;
			} catch (error) {
				context.commit('setUserListIsLoading', false);
				console.error(`request error: ${error}`);
				return false
			}
		},
	},
}
export default module;
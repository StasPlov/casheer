import axios from "axios";
import { Module } from "vuex";
import State from "./State";
import StateInterface from "./StateInterface";

const module: Module<StateInterface, any> = {
	namespaced: true,
	state: () => new State(),
	getters: {
		isLoggedIn: state => state.token !== '' && state.token !== null,
		token: state => state.token,
		isLoginLoading: state => state.isLoginLoading
	},
	mutations: {
		setToken(state: StateInterface, payload: string): void { 
			state.token = payload;
		},
		setIsLoginLoading(state: StateInterface, payload: boolean): void {
			state.isLoginLoading = payload;
		},
	},
	actions: {
		async login(context, { username, password }) {
			context.commit('setIsLoginLoading', true);
			try {
				const result = await axios.post(process.env.VUE_APP_BACKEND_AUTHENTICATION, { // login backend and get jwt token 
					username: username,
					password: password
				});
			

				if(result.status === 200 && result.data.token) {
					context.commit('setToken', result.data.token);
					localStorage.setItem('at', result.data.token);
				}
			} catch (error) {
				console.error(`Login error: ${error}`);
			}
			
			context.commit('setIsLoginLoading', false);
		},
		async logout(context) {
			localStorage.removeItem('at');
			context.commit('setToken', null);
		},
	},
}
export default module;
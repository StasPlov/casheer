
import axios from "axios";
import { ActionTree, Module } from "vuex";
import State from "./State";
import StateInterface from "./StateInterface";

const module: Module<StateInterface, any> = {
	namespaced: true,
	state: () => new State(),
	getters: {
		country: state => state.country,
		region: state => state.region,
		city: state => state.city,
		ip: state => state.ip,
		isLoadingGeo: state => state.isLoadingGeo
	},
	mutations: {
		setCountry(state: StateInterface, payload): void { 
			state.country = payload;
		},
		setRegion(state: StateInterface, payload): void {
			state.region = payload;
		},
		setCity(state: StateInterface, payload): void {
			state.city = payload;
		},
		setIp(state: StateInterface, payload): void {
			state.ip = payload;
		},
		setIsLoadingGeo(state: StateInterface, payload): void {
			state.isLoadingGeo = payload;
		}
	},
	actions: {
		async getClientGeo(context, payload = null) {
			context.commit('setIsLoadingGeo', true);
			try {
				const result = await axios.post(process.env.VUE_APP_CLIENT_GEO_URL);

				if (result.status === 200) {
					if (result.data.country) {
						context.commit('setCountry', result.data.country);
					}
					if (result.data.region) {
						context.commit('setRegion', result.data.region);
					}
					if (result.data.city) {
						context.commit('setCity', result.data.city);
					}
					if (result.data.ip) {
						context.commit('setIp', result.data.ip);
					}
				}
			} catch (error) {
				console.error(`Geo error: ${error}`);
			}

			context.commit('setIsLoadingGeo', false);
		},
	},
}
export default module;
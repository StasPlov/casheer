import Utils from "@/Service/Utils/Utils";
import OrderInterface from "@/Widgets/Techsup/Entity/OrderIntarface";
import { Module } from "vuex";
import State from "./State";
import StateInterface from "./StateInterface";




const module: Module<StateInterface, any> = {
	namespaced: true,
	state: () => new State(),
	getters: {
		orderList: state => state.orderList,
		orderListIsLoading: state => state.orderListIsLoading,
		orderTotalCount: state => state.orderTotalCount,
		orderIsSending: state => state.orderIsSending
	},
	mutations: {
		setOrderList(state: StateInterface, payload: Array<OrderInterface>): void {
			state.orderList = payload;
		},
		updateOrderInList(state: StateInterface, payload: OrderInterface): void {
			let item = state.orderList.find(i => i.id === payload.id);
			
			if(item) {
				Object.assign(item, payload);
			}
		},
		setOrderListIsLoading(state: StateInterface, payload: boolean): void {
			state.orderListIsLoading = payload;
		},
		setOrderTotalCount(state: StateInterface, payload: number): void {
			state.orderTotalCount = payload;
		},
		setOrderIsSending(state: StateInterface, payload: boolean): void {
			state.orderIsSending = payload;
		}
	},
	actions: {
		async getOrderList(context, params) {
			context.commit('setOrderListIsLoading', true);
			try {
				const result = await Utils.fetchData<Array<OrderInterface>>('GET', 'get', 'order', params, `http://192.168.8.85:8078/api`, {});
				
				if(result.status === 200 && !!result.data) {
					context.commit('setOrderList', result.data.data);
					
					if(result.data.count) {
						context.commit('setOrderTotalCount', result.data.count);
					}
				}
			} catch (error) {
				console.error(`request error: ${error}`);
			}
			context.commit('setOrderListIsLoading', false);
		},
		async updateOrderInList(context, params) {
			context.commit('setOrderListIsLoading', true);
			try {
				const result = await Utils.fetchData<Array<OrderInterface>>('GET', 'get', 'order', params, `http://192.168.8.85:8078/api`, {});
				
				if(result.status === 200 && result.data) {
					if(result.data.data.length) {
						context.commit('updateOrderInList', result.data.data[0]);
					}
				}
			} catch (error) {
				console.error(`request error: ${error}`);
			}
			context.commit('setOrderListIsLoading', false);
		},
		async updateOrder(context, params: OrderInterface) {
			context.commit('setOrderIsSending', true);
			try {
				await Utils.fetchData('POST', 'update', 'order', params, `http://192.168.8.85:8078/api`, {});
			} catch (error) {
				console.error(`request error: ${error}`);
			}
			context.commit('setOrderIsSending', false);
		},
	},
}
export default module;
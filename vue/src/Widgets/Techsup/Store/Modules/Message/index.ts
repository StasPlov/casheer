import Utils from "@/Service/Utils/Utils";
import MessageInterface from "@/Widgets/Techsup/Entity/MessageInterface";
import { Module } from "vuex";
import State from "./State";
import StateInterface from "./StateInterface";

const module: Module<StateInterface, any> = {
	namespaced: true,
	state: () => new State(),
	getters: {
		messageList: state => state.messageList,
		messageListIsLoading: state => state.messageListIsLoading,
		messageIsSending: state => state.messageIsSending
	},
	mutations: {
		setMessageList(state: StateInterface, payload: Array<MessageInterface>): void {
			state.messageList = payload;
		},
		setMessageListIsLoading(state: StateInterface, payload: boolean): void {
			state.messageListIsLoading = payload;
		},
		setMessageIsSending(state: StateInterface, payload: boolean): void {
			state.messageIsSending = payload;
		}
	},
	actions: {
		async getMessageList(context, params) {
			context.commit('setMessageListIsLoading', true);
			try {
				const result = await Utils.fetchData<Array<MessageInterface>>('GET', 'get', 'message', params, `http://192.168.8.85:8078/api`, {});
				
				if(result.status === 200 && !!result.data) {
					context.commit('setMessageList', result.data.data);
					
					/* if(result.data.count) {
						context.commit('setOrderTotalCount', result.data.count);
					} */
				}
			} catch (error) {
				console.error(`request error: ${error}`);
			}
			context.commit('setMessageListIsLoading', false);
		},
		async createMessage(context, params: MessageInterface) {
			context.commit('setMessageIsSending', true);
			try {
				await Utils.fetchData('POST', 'set', 'message', params, `http://192.168.8.85:8078/api`, {});
			} catch (error) {
				console.error(`request error: ${error}`);
			}
			context.commit('setMessageIsSending', false);
		},
	},
}
export default module;
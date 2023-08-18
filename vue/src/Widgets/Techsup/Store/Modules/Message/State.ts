import MessageInterface from "@/Widgets/Techsup/Entity/MessageInterface";
import StateInterface from "./StateInterface";

export default class State implements StateInterface {
	messageList: Array<MessageInterface> = [];
	messageListIsLoading: boolean = false;
	messageIsSending: boolean = false;
}
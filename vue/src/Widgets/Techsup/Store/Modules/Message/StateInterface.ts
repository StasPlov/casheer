import MessageInterface from "@/Widgets/Techsup/Entity/MessageInterface";

export default interface StateInterface {
	messageList: Array<MessageInterface>;
	messageListIsLoading: boolean;
	messageIsSending: boolean;
}
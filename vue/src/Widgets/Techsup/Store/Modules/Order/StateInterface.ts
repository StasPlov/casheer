import OrderInterface from "@/Widgets/Techsup/Entity/OrderIntarface";

export default interface StateInterface {
	orderList: Array<OrderInterface>;
	orderListIsLoading: boolean;
	orderTotalCount: number;
	orderIsSending: boolean;
} 
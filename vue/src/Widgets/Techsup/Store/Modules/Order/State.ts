import OrderInterface from "@/Widgets/Techsup/Entity/OrderIntarface";
import StateInterface from "./StateInterface";

export default class State implements StateInterface {
	orderList: Array<OrderInterface> = [];
	orderListIsLoading: boolean = false;
	orderTotalCount: number = 0;
	orderIsSending: boolean = false;
}
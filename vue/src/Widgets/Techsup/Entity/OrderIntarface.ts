import OrderStatusInterface from "./OrderStatusInterface";
import OrderTypeInterface from "./OrderTypeInterface";

export default interface OrderInterface {
	id: number;
	createdAt: Date;
	updateAt: Date;
	userId: number;
	orderName: string;
	description: string;
	url: string;
	status: OrderStatusInterface;
	type: OrderTypeInterface;
}
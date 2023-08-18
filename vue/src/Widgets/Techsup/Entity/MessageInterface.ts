import AuthorTypeInterface from "./AuthorTypeInterface";
import OrderInterface from "./OrderIntarface";

export default interface MessageInterface {
	id: number;
	createdAt: Date;
	updateAt: Date;
	text: string;
	order: OrderInterface;
	authorType: AuthorTypeInterface;
	isDelete: boolean;
}
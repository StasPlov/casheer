import PaymentsStyleInterface from "./PaymentsStyleInterface";

export default interface PaymentsInterface {
	title: string;
	description: string;
	buttonText: string,
	url: string;
	style?: PaymentsStyleInterface
}
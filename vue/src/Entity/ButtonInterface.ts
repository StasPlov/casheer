import LinkInterface from "./LinkInterface";

export default interface ButtonInterface {
	is_active: boolean;
	link: LinkInterface;
	text: string;
}
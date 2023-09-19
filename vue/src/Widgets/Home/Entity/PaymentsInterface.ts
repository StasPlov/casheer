import ImageInterface from "@/Entity/ImageInterface";
import ButtonInterface from "@/Entity/ButtonInterface";

export default interface PaymentsInterface {
	title: string;
	description: string;
	color: string;
	image: ImageInterface;
	background: ImageInterface;
	button: ButtonInterface
}
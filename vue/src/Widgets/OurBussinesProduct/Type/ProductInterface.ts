import ButtonInterface from "@/Entity/ButtonInterface";
import ImageInterface from "@/Entity/ImageInterface";

export default interface ProductInterface {
	title: string;
	button: ButtonInterface;
	color: string;
	description: string;
	icon: ImageInterface;
	image: ImageInterface;
}
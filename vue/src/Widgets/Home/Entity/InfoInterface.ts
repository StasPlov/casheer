import ImageInterface from "@/Entity/ImageInterface";

export default interface InfoInterface {
	image: ImageInterface;
	title: string;
	description: string;
	is_reverse: boolean;
}
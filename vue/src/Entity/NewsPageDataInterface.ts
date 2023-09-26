import ButtonInterface from "./ButtonInterface";
import ImageInterface from "./ImageInterface";
import PostInterface from "./PostInterface";

export default interface NewsPageDataInterface {
	data: {
		image: ImageInterface;
		button: ButtonInterface;
	};
	link: string;
	post: PostInterface;
}
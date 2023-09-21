import ButtonInterface from "./ButtonInterface";
import ImageInterface from "./ImageInterface";
import NewsInterface from "./NewsInterface";

export default interface NewsPageDataInterface {
	data: {
		image: ImageInterface;
		button: ButtonInterface;
	};
	link: string;
	post: NewsInterface;
}
import PostInterface from "@/Entity/PostInterface";
import PlanInterface from "../Plan/Type/PlanInterface";

export default interface PlaneListResponceInterface {
	data: PlanInterface
	link: string;
	post: PostInterface;
}
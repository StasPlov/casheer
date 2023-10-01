import ButtonInterface from "@/Entity/ButtonInterface";
import CheckInterface from "./CheckInterface";

export default interface PlanInterface {
    title: string;
    description: string;
    info: string;
    list: Array<CheckInterface>
    button: ButtonInterface
}
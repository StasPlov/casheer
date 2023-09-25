import CheckInterface from "../../Plan/Type/CheckInterface";

export default interface DocumentInterface {
    title: string;
    description: string;
    list: Array<CheckInterface>;
}
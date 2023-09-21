import QuestionInterface from "./QuestionInterface";

export default interface ItemInterface {
	title: string;
	description: string;
	question_list: Array<QuestionInterface>
}
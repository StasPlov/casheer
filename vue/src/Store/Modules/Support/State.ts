import StateInterface from "./StateInterface";

export default class State<T = any> implements StateInterface {
	postList: Array<T> = [];
	totalCount: number = 0;
	postListIsLoading: boolean = false;
}
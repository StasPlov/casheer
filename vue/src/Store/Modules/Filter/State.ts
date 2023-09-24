import StateInterface from "./StateInterface";

export default class State<T = any> implements StateInterface {
	filterList: Array<T> = [];
	totalCount: number = 0;
	filterListIsLoading: boolean = false;
}
import StateInterface from "./StateInterface";

export default class State<T = any> implements StateInterface {
	planeList: Array<T> = [];
	totalCount: number = 0;
	planeListIsLoading: boolean = false;
}
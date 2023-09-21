import StateInterface from "./StateInterface";

export default class State<T = any> implements StateInterface {
	data: T = null as any;
	dataListIsLoading: boolean = false;
}
import StateInterface from "./StateInterface";

export default class State implements StateInterface {
	country: string = '';
	region: string = '';
	city: string = '';
	ip: string = '';
	isLoadingGeo: boolean = false;
}
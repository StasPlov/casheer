import StateInterface from "./StateInterface";

export default class State implements StateInterface {
	token: string = localStorage.getItem('at') ?? '';
	isLoggedIn: boolean = !!this.token;
	isLoginLoading: boolean = false;
}
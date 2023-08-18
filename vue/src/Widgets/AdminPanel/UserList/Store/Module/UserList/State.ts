import UserInterface from "@/Entity/UserInterface";
import StateInterface from "./StateInterface";

export default class State implements StateInterface {
	userList: Array<UserInterface> = [];
	userListIsLoading: boolean = false;
}
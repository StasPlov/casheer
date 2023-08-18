import UserInterface from "@/Entity/UserInterface";

export default interface StateInterface {
	userList: Array<UserInterface>;
	userListIsLoading: boolean;
}
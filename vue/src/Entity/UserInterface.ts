import RolesInterface from "./RolesInterface";

export default interface UserInterface {
	id: number;
	username: string;
	mail: string;
	password: string;
	roles: Array<RolesInterface>;
	isEnable: boolean;
}
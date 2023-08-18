import ModuleInterface from "@/Entity/ModuleInterface";
import UserInterface from "@/Entity/UserInterface";

export type SearchType = {
	user: Array<UserInterface>
	module: Array<ModuleInterface>,
};
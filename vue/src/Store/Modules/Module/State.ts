import ModuleInterface from "@/Entity/ModuleInterface";
import StateInterface from "./StateInterface";

export default class State implements StateInterface {
	moduleList: Array<ModuleInterface> = [];
	moduleListIsLoading: boolean = false;
	moduleListIsSending: boolean = false;
}
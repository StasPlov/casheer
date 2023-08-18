import ModuleInterface from "@/Entity/ModuleInterface";
import StateInterface from "./StateInterface";

export default class State implements StateInterface {
	moduleList: Array<ModuleInterface> = [];
	module!: ModuleInterface;
	moduleListIsLoading: boolean = false;
	moduleIsSending: boolean = false;
	moduleIsLoading: boolean = false;
}
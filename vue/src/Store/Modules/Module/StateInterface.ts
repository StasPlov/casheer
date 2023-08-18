import ModuleInterface from "@/Entity/ModuleInterface";

export default interface StateInterface {
	moduleList: Array<ModuleInterface>;
	moduleListIsLoading: boolean;
	moduleListIsSending: boolean;
}
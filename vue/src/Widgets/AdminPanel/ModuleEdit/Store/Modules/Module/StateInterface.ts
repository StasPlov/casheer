import ModuleInterface from "@/Entity/ModuleInterface";

export default interface StateInterface {
	module: ModuleInterface;
	moduleList: Array<ModuleInterface>;
	moduleIsLoading: boolean;
	moduleIsSending: boolean;
	moduleListIsLoading: boolean;
}
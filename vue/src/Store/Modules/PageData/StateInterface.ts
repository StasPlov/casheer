import ModuleInterface from "@/Entity/ModuleInterface";

export default interface StateInterface<T = any> {
	data: T | null;
	dataIsLoading: boolean;
}
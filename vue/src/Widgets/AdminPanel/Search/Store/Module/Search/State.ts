import { SearchType } from "../../../../Search/Type/SearchType";
import StateInterface from "./StateInterface";

export default class State implements StateInterface {
	search!: SearchType;
	searchIsLoading: boolean = false;
}
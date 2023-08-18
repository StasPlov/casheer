import { SearchType } from "../../../../Search/Type/SearchType";

export default interface StateInterface {
	search: SearchType;
	searchIsLoading: boolean;
}
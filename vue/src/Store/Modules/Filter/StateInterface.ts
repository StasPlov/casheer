export default interface StateInterface<T = any> {
	filterList: Array<T>;
	totalCount: number;
	filterListIsLoading: boolean;
}
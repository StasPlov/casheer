export default interface StateInterface<T = any> {
	planeList: Array<T>;
	totalCount: number;
	planeListIsLoading: boolean;
}
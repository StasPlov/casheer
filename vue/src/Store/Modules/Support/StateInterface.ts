export default interface StateInterface<T = any> {
	postList: Array<T>;
	totalCount: number;
	postListIsLoading: boolean;
}
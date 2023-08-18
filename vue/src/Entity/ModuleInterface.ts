export default interface ModuleInterface {
	id: number,
	createdAt: Date,
	updateAt: Date,
	title: string,
	description: string,
	parent: ModuleInterface,
	module: Array<ModuleInterface>,
	breadcrumb: string,
	isMain: boolean,
	isDelete: boolean,
	isHide: boolean,
	canDelete: boolean,
}
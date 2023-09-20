import StateInterface from "./StateInterface";

export default class State implements StateInterface {
	pageId?: number = 0;
	ajaxUrl: string = '';
	pageName: string = '';
	pageTemplate: string = '';
}
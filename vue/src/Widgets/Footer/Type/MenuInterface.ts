import MenuItemInterface from "./MenuItemInterface";

export default interface MenuInterface {
	title: string;
	list: Array<MenuItemInterface>;
}
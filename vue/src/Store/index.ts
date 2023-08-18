import { Store } from "vuex";
/* global store */
import geo from "@/Store/Modules/Geo/index";
import module from "@/Store/Modules/Module/index";
import authorization from "@/Store/Modules/Authorization/index";
/* admin panel store */
import adminPanelModuleMenuSide from "@/Widgets/AdminPanel/MenuSide/Store/Module/index";
import adminPanelModuleEdit from "@/Widgets/AdminPanel/ModuleEdit/Store/Modules/Module/index";
import adminPanelModuleBreadcrumb from "@/Widgets/AdminPanel/Breadcrumb/Store/Modules/Module/index";
import adminPanelSearch from "@/Widgets/AdminPanel/UserList/Store/Module/UserList";
import adminPanelUserList from "@/Widgets/AdminPanel/UserList/Store/Module/UserList/index";
/* techsup store */
import techsupOrder from "@/Widgets/Techsup/Store/Modules/Order/index";
import techsupMessage from "@/Widgets/Techsup/Store/Modules/Message/index";

export interface RootStateInterface {
	/* global store */
	geo: typeof import("./Modules/Geo/StateInterface");
	module: typeof import("@/Store/Modules/Module/StateInterface");
	authorization: typeof import("@/Store/Modules/Authorization/StateInterface");
	/* admin panel store */
	adminPanelModuleMenuSide: typeof import("@/Widgets/AdminPanel/MenuSide/Store/Module/StateInterface");
	adminPanelModuleEdit: typeof import("@/Widgets/AdminPanel/ModuleEdit/Store/Modules/Module/StateInterface");
	adminPanelModuleBreadcrumb: typeof import("@/Widgets/AdminPanel/ModuleEdit/Store/Modules/Module/StateInterface");
	adminPanelSearch: typeof import("@/Widgets/AdminPanel/UserList/Store/Module/UserList/StateInterface");
	adminPanelUserList: typeof import("@/Widgets/AdminPanel/UserList/Store/Module/UserList/StateInterface");
	/* techsup store */
	techsupOrder: typeof import("@/Widgets/Techsup/Store/Modules/Order/StateInterface");
	techsupMessage: typeof import("@/Widgets/Techsup/Store/Modules/Message/StateInterface");
}

export default new Store<RootStateInterface>({
	modules: {
		/* global store */
		geo,
		module,
		authorization,
		/* admin panel store */
		adminPanelModuleMenuSide,
		adminPanelModuleEdit,
		adminPanelModuleBreadcrumb,
		adminPanelSearch,
		adminPanelUserList,
		/* techsup store */
		techsupOrder,
		techsupMessage
	}
});
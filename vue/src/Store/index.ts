import { Store } from "vuex";
import pageInfo from "@/Store/Modules/PageInfo/index";
import pageData from "@/Store/Modules/PageData/index";

export interface RootStateInterface {
	pageInfo: typeof import("@/Store/Modules/PageInfo/StateInterface");
	pageData: typeof import("@/Store/Modules/PageData/StateInterface");
}

export default new Store<RootStateInterface>({
	modules: {
		pageInfo,
		pageData
	}
});
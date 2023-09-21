import { Store } from "vuex";
import pageInfo from "@/Store/Modules/PageInfo/index";
import pageData from "@/Store/Modules/PageData/index";
import post from "@/Store/Modules/Post/index";
import header from "@/Store/Modules/Header/index";

export interface RootStateInterface {
	pageInfo: typeof import("@/Store/Modules/PageInfo/StateInterface");
	pageData: typeof import("@/Store/Modules/PageData/StateInterface");
	post: typeof import("@/Store/Modules/Post/StateInterface");
	header: typeof import("@/Store/Modules/Header/StateInterface");
}

export default new Store<RootStateInterface>({
	modules: {
		pageInfo,
		pageData,
		post,
		header
	}
});
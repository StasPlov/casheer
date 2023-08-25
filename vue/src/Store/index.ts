import { Store } from "vuex";
import geo from "@/Store/Modules/Geo/index";
import module from "@/Store/Modules/Module/index";
import authorization from "@/Store/Modules/Authorization/index";

export interface RootStateInterface {
	geo: typeof import("./Modules/Geo/StateInterface");
	module: typeof import("@/Store/Modules/Module/StateInterface");
	authorization: typeof import("@/Store/Modules/Authorization/StateInterface");
}

export default new Store<RootStateInterface>({
	modules: {
		geo,
		module,
		authorization,
	}
});
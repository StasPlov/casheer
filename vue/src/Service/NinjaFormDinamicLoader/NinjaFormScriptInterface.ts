import NinjaFormScriptExtraInterface from "./NinjaFormScriptExtraInterface"

export default interface NinjaFormScriptInterface {
	handle: string
	src: string
	deps: Array<string>
	ver: string
	args: any
	extra: NinjaFormScriptExtraInterface
	textdomain: string
	translations_path: string
}
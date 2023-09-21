export default interface LangInterface {
	id: number
	order: number
	slug: string
	locale: string
	name: string
	url: string
	flag: string
	current_lang: boolean
	no_translation: boolean
	classes: string[]
	link_classes: any[]
}
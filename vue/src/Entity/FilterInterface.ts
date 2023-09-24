import TaxonomyInterface from "./TaxonomyInterface"

export default interface FilterInterface {
    title: string
    parent: TaxonomyInterface
    parent_item: Array<{ 
        item: TaxonomyInterface 
    }>
}
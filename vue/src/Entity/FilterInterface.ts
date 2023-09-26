import TaxonomyInterface from "./TaxonomyInterface"

export default interface FilterInterface {
    parent: TaxonomyInterface
    child: Array<{ 
        item: TaxonomyInterface 
    }>
}
import { Category } from "./Category";
import { Deal } from "./Deal";


export class Type{
    Id?:number;
    ResourceName: string;
    ResourceDescription: string;
    Category:Category;
    Deals:Deal[];
    constructor(ResourceName: string,ResourceDescription: string,Category:Category){
        this.ResourceName=ResourceName;
        this.ResourceDescription=ResourceDescription;
        this.Category=Category;
        this.Deals=new Array<Deal>();
    }
}
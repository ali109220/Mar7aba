import { Type } from "./Type";
import { Deal } from "./Deal";

export class CategoryHeader{
    Id?:number;
    ResourceName: string;
    ResourceDescription: string;
    Types:Type[];
    Deal:Deal;
    ShowTypes:boolean=false;
    constructor(ResourceName: string,ResourceDescription: string,deal:Deal){
        this.ResourceName=ResourceName;
        this.ResourceDescription=ResourceDescription;
        this.Deal=deal;
        this.Types=new Array<Type>();
    }
}
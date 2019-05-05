import { Type } from "./Type";
import { Deal } from "./Deal";
import { City } from "./City";
import { Company } from "./Company";

export class Category{
    Id?:number;
    ResourceName: string;
    ResourceDescription: string;
    Types:Type[];
    ShowTypes:boolean=false;
    constructor(ResourceName: string,ResourceDescription: string){
        this.ResourceName=ResourceName;
        this.ResourceDescription=ResourceDescription;
        this.Types=new Array<Type>();
     }
}

import { Language } from "./Language";

export class Resource{
    Id?:number;
    ResourceName:string;
    ResourceValue:string;
    Language:Language;
    constructor(ResourceName:string,
        ResourceValue:string,
        Language:Language){
            this.ResourceName=ResourceName;
            this.ResourceValue=ResourceValue;
            this.Language=Language;
        }
}
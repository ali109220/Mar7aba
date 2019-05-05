import { Deal } from "./Deal";

export class Option{
    Id?:number;
    Name:string;
    ResourceDescription:string;
    Price:number;
    Deal:Deal;
    constructor(ResourceName:string,
        ResourceDescription:string,
        price:number,
        Deal:Deal){
 this.Deal=Deal;
 this.Name=ResourceName;
 this.ResourceDescription=ResourceDescription;
 this.Price=price;
    }
}
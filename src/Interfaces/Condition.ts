import { Deal } from "./Deal";

export class Condition{
    Id?:number;
    Name:string;
    Description:string;
    Order:number;
    Deal:Deal;
    constructor(ResourceName:string,
        ResourceDescription:string,
        order:number,
        Deal:Deal){
 this.Deal=Deal;
 this.Name=ResourceName;
 this.Description=ResourceDescription;
 this.Order=order;
    }
}
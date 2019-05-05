import { Deal } from "./Deal";

export class DealPic{
    Id?:number;
    ResourceName:string;
    ResourceDescription:string;
    PicOrder:number;
    Url:string;
    Deal:Deal;
    Indicator:string;
    PicId:string;
    constructor(ResourceName:string,
        ResourceDescription:string,
        PicOrder:number,
        URL:string,
        Deal:Deal){
 this.Deal=Deal;
 this.PicOrder=PicOrder;
 this.ResourceName=ResourceName;
 this.ResourceDescription=ResourceDescription;
 this.Url=URL;
    }
}
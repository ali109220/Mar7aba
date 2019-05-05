import { Company } from "./Company";

export class Branch {
    Id?: number;
    ResourceName: string;
    TopRight: string;
    BottomLeft: string;
    Tel: string;
    ResourceNearLocation: string;
    Company: Company;
    constructor(ResourceName: string,TopRight: string,
    BottomLeft:string,
    Tel:string,
    ResourceNearLocation:string,
    Company:Company
){
        this.ResourceName=ResourceName;
        this.Tel=Tel;
        this.TopRight=TopRight;
        this.BottomLeft=BottomLeft;
        this.ResourceNearLocation=ResourceNearLocation;
        this.Company=Company;
    }
}
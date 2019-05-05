import { Type } from "./Type";
import { City } from "./City";
import { Company } from "./Company";
import { DealPic } from "./DealPic";
import { Condition } from "./Condition";
import { Highlight } from "./Highlight";

export class Deal{
    Id?:number;
    ResourceName: string;
    ResourceDescription: string;
    ResourceMoreInfo:string;
    PurchasesCount:number;
    Limited:number;
    IsLimited:boolean;
    ISForAdvertisement:boolean;
    IsViewedInCategoryArea:boolean;
    AddDate:Date;
    Clicks:number;
    Rate:number;
    Type:Type;
    City:City;
    Company:Company;
    DealPics:DealPic[];
    Conditions:Condition[];
    Highlights:Highlight[];
    Order:number;
    Company_Id:number;
    City_Id:number;
    Type_Id:number;

    constructor(ResourceName: string,ResourceDescription: string,ResourceMoreInfo:string,
        PurchasesCount:number,
        Limited:number,
        IsLimited:boolean,
        ISForAdvertisement:boolean,
        IsViewedInCategoryArea:boolean,
        AddDate:Date,
        Clicks:number,
        Rate:number,
        Type:Type,
        City:City,
        Company:Company){
        this.ResourceName=ResourceName;
        this.ResourceDescription=ResourceDescription;
        this.Limited=Limited;
        this.IsLimited=IsLimited;
        this.ISForAdvertisement=ISForAdvertisement;
        this.IsViewedInCategoryArea=IsViewedInCategoryArea;
        this.PurchasesCount=PurchasesCount;
        this.ResourceMoreInfo=ResourceMoreInfo;
        this.City=City;
        this.Company=Company;
        this.Clicks=Clicks;
        this.Rate=Rate;
        this.AddDate=AddDate;
        this.Type=Type;
        this.DealPics=new Array<DealPic>();
        this.Highlights=new Array<Highlight>();
        this.Conditions=new Array<Condition>();
    }
}
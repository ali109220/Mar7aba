
export class City{
    Id?:number;
    ResourceName: string;
    IsContainDeals:boolean;
    constructor(ResourceName: string,
        IsContainDeals:boolean){
        this.ResourceName=ResourceName;
        this.IsContainDeals=IsContainDeals;
    }
}
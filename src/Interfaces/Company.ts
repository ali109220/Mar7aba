import { Deal } from "./Deal";
import { Branch } from "./Branch";

export class Company{
    Id?:number;
    ResourceName:string;
    ResourceDescription:string;
    Facebook:string;
    Instagram:string;
    Twitter:string;
    Youtube:string;
    Email:string;
    Barnches:Branch[];
    constructor(ResourceName: string,ResourceDescription: string,Facebook:string,
        Instagram:string,
        Twitter:string,
        Youtube:string,
        Email:string){
        this.ResourceName=ResourceName;
        this.ResourceDescription=ResourceDescription;
        this.Email=Email;
        this.Facebook=Facebook;
        this.Instagram=Instagram;
        this.Twitter=Twitter;
        this.Youtube=Youtube;
        this.Barnches=new Array<Branch>();
    }
}
import { User } from "./User";
import { ShopCartOption } from "./ShopCartOption";

export class ShopCart{
    Id?:number;
    IsBuyed:boolean;
    User:User;
    ShopCartOptions:ShopCartOption[];
    constructor(IsBuyed:boolean,
        User:User){
            this.IsBuyed=IsBuyed;
            this.User=User;
            this.ShopCartOptions=new Array<ShopCartOption>();
        }
}
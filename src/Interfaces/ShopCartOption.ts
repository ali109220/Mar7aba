import { ShopCart } from "./ShopCart";
import { Option } from "./Option";

export class ShopCartOption{
    Id?:number;
    Value:number;
    Quantity:number;
    ShopCart:ShopCart;
    Option:Option;
    constructor(Value:number,
        Quantity:number,
        ShopCart:ShopCart,
        Option:Option){
      this.Value=Value;
      this.Option=Option;
      this.Quantity=Quantity;
      this.ShopCart=ShopCart;
        }
    
    
}
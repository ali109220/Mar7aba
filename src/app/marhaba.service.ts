import { Injectable } from '@angular/core';
import { User } from '../Interfaces/User';
import {Http, RequestOptions,Headers} from '@angular/http';
import { Category } from '../Interfaces/Category';
import { Type } from '../Interfaces/Type';
import { Deal } from '../Interfaces/Deal';
import { LoginModel } from '../Interfaces/LoginModel';
@Injectable({
  providedIn: 'root'
})
export class MarhabaService {

  
  
  
  private urlCategories='http://localhost:49403/api/Categories';
  private urlCustom='http://localhost:49403/api/Custom';
  private urlTypes='http://localhost:49403/api/Types';
  private urlLanguages='http://localhost:49403/api/Languages';
  private urlResources='http://localhost:49403/api/Resources';
  private urlDeals='http://localhost:49403/api/Deals';
  private urlDealPics='http://localhost:49403/api/DealPics';
  private urlHighlights='http://localhost:49403/api/Highlights';
  private urlCompanies='http://localhost:49403/api/Companies';
  private urlConditions='http://localhost:49403/api/Conditions';
  private user='http://localhost:49403/api/Users';
  private Login='http://localhost:49403/api/Login';
  private urlBranshes='http://localhost:49403/api/Branshes';
  private urlAdvertisings='http://localhost:49403/api/Advertising';
  private urlCities='http://localhost:49403/api/Cities';
  private urlShopCarts='http://localhost:49403/api/ShopCarts';
  private urlShopCartOptions='http://localhost:49403/api/ShopCartOptions';
  // private Category=new Subject<ICategory>();
   constructor(private _http:Http) { 
 
   }
   getCategories(){
     return this._http.get(this.urlCategories);
   }
   getTypes() {
    return this._http.get(this.urlTypes);
  }
   getType(id:string){
     return this._http.get(this.urlTypes+"/"+id);
   }
   getDeal(id:string){
    return this._http.get(this.urlDeals+"/"+id);
  }
  getAdvertismentDeals(){
    return this._http.get(this.urlCustom);
  }
   getLanguages(){
     return this._http.get(this.urlLanguages);
   }
   getResources(){
     return this._http.get(this.urlResources);
   }
   getDeals(){
     return this._http.get(this.urlDeals);
   }
   getDealPics(){
     return this._http.get(this.urlDealPics);
   }
   getHighlights(){
     return this._http.get(this.urlHighlights);
   }
   getConditions(){
     return this._http.get(this.urlConditions);
   }
   getUsers(){
     return this._http.get(this.urlCities);
   }
   getOptions(){
     return this._http.get(this.urlCategories);
   }
   getCompanies(){
     return this._http.get(this.urlCompanies);
   }
   getBranshes(){
     return this._http.get(this.urlBranshes);
   }
   getAdvertisings(){
     return this._http.get(this.urlAdvertisings);
   }
   getCities(){
     return this._http.get(this.urlCities);
   }
   getShopCarts(){
     return this._http.get(this.urlShopCarts);
   }
   getShopCartOptions(){
     return this._http.get(this.urlShopCartOptions);
   }
   AuthenticationUser(loginModel:LoginModel){
    let headers=new Headers({'Content-Type':'application/json ; charset=utf-8'});
    let options=new RequestOptions({'headers':headers});
    return this._http.post(this.Login,JSON.stringify(loginModel),options)
   }
   postUsr(user:User){
     debugger;
     let headers=new Headers({'Content-Type':'application/json ; charset=utf-8'});
     let options=new RequestOptions({'headers':headers});
     return this._http.post(this.user,JSON.stringify(user),options)
   }
   
  postCategory(cat: Category) {
    let headers=new Headers({'Content-Type':'application/json ; charset=utf-8'});
    let options=new RequestOptions({'headers':headers});
    return this._http.post(this.urlCategories,JSON.stringify(cat),options)
  }
  postType(type: Type) {
    let headers=new Headers({'Content-Type':'application/json ; charset=utf-8'});
    let options=new RequestOptions({'headers':headers});
    return this._http.post(this.urlTypes,JSON.stringify(type),options)
  }
  postDeal(deal: Deal) {
    let headers=new Headers({'Content-Type':'application/json ; charset=utf-8'});
    let options=new RequestOptions({'headers':headers});
    return this._http.post(this.urlDeals,JSON.stringify(deal),options)
  }
}

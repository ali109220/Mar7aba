import { Component, OnInit, AfterViewChecked, NgZone } from '@angular/core';
import { Deal } from '../../Interfaces/Deal';
import { Type } from '../../Interfaces/Type';
import { Company } from '../../Interfaces/Company';
import { City } from '../../Interfaces/City';
import { DealPic } from '../../Interfaces/DealPic';
import { Category } from '../../Interfaces/Category';
import { MarhabaService } from '../marhaba.service';
import { CategoryHeader } from '../../Interfaces/categoryHeader';
import { Language } from '../../Interfaces/Language';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header-ar.component.css']
})
export class HeaderComponent implements OnInit ,AfterViewChecked {
    IsLogined:boolean;
    UserName:string;
    index_:number=0;
    menuOpened:boolean;
    loadData:boolean;
    current_Islimited:boolean=false;
    current_Limited:number=0;
    current_title:string="";
    current_Desc:string="";
    currentDeal:Deal;
    Deals:Deal[];
    DealsForAdvertisment:Deal[];
    Types:Type[];
    Companies:Company[];
    Cities:City[];
    Pics:DealPic[];
    Categories:Category[];
    currentCategory:string;
    Opened:boolean;
    ShowAcountIcon:boolean=true;
    ShowCityIcon:boolean=true;
    ShowCartIcon:boolean=true;
    ShowLanguageIcon:boolean=true;
    strightWidth:number;
    transformX:number;
    categoriesHeader:CategoryHeader[];
    _deals:Deal[];
    _deal:Deal;
    LanguageName:string="Arabic";
    rtl:boolean=false;
    constructor(private ngZone:NgZone,private marhaba:MarhabaService) {
      this.marhaba.getCategories().subscribe(x=>this.Categories=x.json());
      this.marhaba.getAdvertismentDeals().subscribe(x=>this.categoriesHeader=x.json());
      this.marhaba.getAdvertisings().subscribe(x=>this.DealsForAdvertisment=x.json());
      this.categoriesHeader=new Array<CategoryHeader>();
      this.currentDeal=new Deal('','','',0,0,false,false,false,new Date(),0,0,new Type('','',new Category('','')),new City('',false),new Company('','','','','','',''));
      //this._deal=new Deal('','','',0,0,false,false,false,new Date(),0,0,new Type('','',new Category('','')),new City('',false),new Company('','','','','','',''));
      
      //this.marhaba.getData().subscribe(x=>console.log(x.json()));
      this.Types=new Array<Type>();
      this.Deals=new Array<Deal>();
      this._deals=new Array<Deal>();
      this.DealsForAdvertisment=new Array<Deal>();
      window.onresize = (e) =>
      {
        
          //ngZone.run will help to run change detection
          this.ngZone.run(() => {
      if(this.menuOpened){
        this.transformX=window.innerWidth-234;
        document.getElementById('menu_container_id').style.webkitTransform='translateX('+this.transformX+'px)';
        document.getElementById('menu_container_id').style.transform='translateX('+this.transformX+'px)';
      }
      else{
        this.transformX=window.innerWidth-14;
        document.getElementById('menu_container_id').style.webkitTransform='translateX('+this.transformX+'px)';
        document.getElementById('menu_container_id').style.transform='translateX('+this.transformX+'px)';
      }
          });
      };
      if(localStorage.getItem("Language")!=null){
        var dir=localStorage.getItem("Language");
        if(dir=="ltr"){
           this.LanguageName="Arabic";
           this.rtl=false;
        }
        else{
          this.rtl=true;
          this.LanguageName="English";
        }
      }
    }
  
    ngOnInit() {
      if(localStorage.length>0 && localStorage.getItem("userToken")!=null){
        this.IsLogined=true;
        this.UserName=localStorage.getItem("userName");
      }
      this.strightWidth=(window.innerWidth-150)/4;
      //document.getElementById("span-line").style.width=this.strightWidth+'px';
      //this.marhaba.getDeals().subscribe(x=>this.Deals=x.json());
      //this.marhaba.getTypes().subscribe(x=>console.log(x.json()));
      
    }
    ngAfterViewInit(): void {
      this.ExecuteLoop();
    }
    ngAfterViewChecked():void{
      
    }
    sleep(millisecounds:number){
      var start=new Date().getTime();
      for(var i=0;i<1e7;i++){
        if((new Date().getTime()-start)>millisecounds)
        break;
      }
    }
    
    ExecuteLoop(){
      
      setInterval(()=>{
        if(this.DealsForAdvertisment!=null){
          if(!this.loadData){
            this.loadData=true;
            if(this.DealsForAdvertisment.length!=0){
            let url=this.DealsForAdvertisment[this.index_].DealPics[0].Url;
        document.getElementById("slick_slide").style.backgroundImage='url("'+url+'")';
        this.currentDeal=this.DealsForAdvertisment[this.index_];
        if(this.index_==3)
        this.index_=0;
        else
        this.index_++;
          }
  
        }
      }
      },500)
      setInterval(()=>{
        if(this.DealsForAdvertisment.length!=0){
          let url=this.DealsForAdvertisment[this.index_].DealPics[0].Url;
          document.getElementById("slick_slide").style.backgroundImage='url("'+url+'")';
          this.currentDeal=this.DealsForAdvertisment[this.index_];
          if(this.index_==3)
             this.index_=0;
          else
            this.index_++;
        }
        
        //this.current_Islimited=this.DealsForAdvertisment[this.index_].IsLimited;
        //this.current_Limited=this.DealsForAdvertisment[this.index_].Limited;
        //this.current_title=this.DealsForAdvertisment[this.index_].ResourceName;
        //this.current_Desc=this.DealsForAdvertisment[this.index_].ResourceDescription;
        //document.getElementById("span-line").style.transform='translate3d('+this.strightWidth*this.index_+'px, 0px, 0px)';
        
      },5000)
    }
    openSearchContainer(){
      document.getElementById('lp-search-container').style.display='block';
    }
    closeSearchContainer(){
      document.getElementById('lp-search-container').style.display='none';
    }
    openMenuContainer(){
      if(!this.menuOpened){
        if(localStorage.getItem("Language")!=null){
          var dir=localStorage.getItem("Language");
          if(dir=="ltr"){
            this.transformX=window.innerWidth-234;
            document.getElementById('menu_container_id').style.webkitTransform='translateX('+this.transformX+'px)';
            document.getElementById('menu_container_id').style.transform='translateX('+this.transformX+'px)';
          }
          else{
            this.transformX=0;
            document.getElementById('menu_container_id').style.webkitTransform='translateX(0px)';
            document.getElementById('menu_container_id').style.transform='translateX(0px)';
          }
        }
        
        
        document.getElementById('header_id').style.webkitTransform='translateX(-82%)';
        document.getElementById('header_id').style.transform='translateX(-82%)';
        this.menuOpened=true;
      }
      else{
        this.transformX=this.transformX+220;
        document.getElementById('menu_container_id').style.webkitTransform='translateX('+this.transformX+'px)';
        document.getElementById('menu_container_id').style.transform='translateX('+this.transformX+'px)';
        
        document.getElementById('header_id').style.webkitTransform='translateX(0%)';
        document.getElementById('header_id').style.transform='translateX(0%)';
        this.menuOpened=false;
      }
    }
    hover_dropdown(category:Category){
      debugger;
      var id=category.ResourceName+category.ResourceName;
      document.getElementById(id).style.maxHeight='27.5rem';
      document.getElementById(id).style.minHeight='15rem';
    }
    hideDropdon(){
      for(let cat in this.categoriesHeader){
        var category=this.categoriesHeader[cat];
        var id=category.ResourceName+category.ResourceName;
        document.getElementById(id).style.maxHeight='0';
        document.getElementById(id).style.minHeight='0';
      }
    } 
    changeColorOfHeader(bool:boolean){
      if(bool){
        if(window.innerWidth>=920)
        document.getElementById("header_id").style.backgroundColor='darkslategray';
        
      }
      else{
        document.getElementById("header_id").style.backgroundColor='transparent';
        document.getElementById("logo_id").style.color='white';
        document.getElementById("search_id").style.color='white';
        document.getElementById("cart_id").style.color='white';
        document.getElementById("language_id").style.color='white';
        document.getElementById("account_id").style.color='white';
        for(let cat in this.categoriesHeader){
          var category=this.categoriesHeader[cat];
          var id=category.ResourceName;
          document.getElementById(id).style.color='white';
        }
      }
    }
    showTypes(category:Category){
      if(!category.ShowTypes)
         category.ShowTypes=true;
      else
        category.ShowTypes=false;
    }
    logout(){
      localStorage.removeItem("userToken");
      localStorage.removeItem("userName");
      window.location.reload();
    }
    ChangeLanguage(){
      if(this.LanguageName=="Arabic"){
        debugger;
        localStorage.removeItem("Language");
        localStorage.setItem("Language","rtl");
        this.LanguageName="English";
      }
      else
      {
        debugger;
        localStorage.removeItem("Language");
        localStorage.setItem("Language","ltr");
        this.LanguageName="Arabic";
      }
      window.location.reload();
    }
}

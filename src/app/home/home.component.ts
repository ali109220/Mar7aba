import { Component, OnInit, NgZone } from '@angular/core';
import { Deal } from '../../Interfaces/Deal';
import { Type } from '../../Interfaces/Type';
import { DealPic } from '../../Interfaces/DealPic';
import { Category } from '../../Interfaces/Category';
import { MarhabaService } from '../marhaba.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  width:number;
  trans:number=0;
  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
  Deals:Deal[];
  Types:Type[];
  Pics:DealPic[];
  Categories:Category[];
  loadData:boolean;
  dealsTrans:number=0;
  prevWidth=0;
  finaltrans=0;
  showButtons=true;
  constructor(private ngZone:NgZone,private marhaba:MarhabaService) {
    this.Categories=new Array<Category>();
    this.Types=new Array<Type>();
    this.Deals=new Array<Deal>();
    this.marhaba.getCategories().subscribe(x=>this.Categories=x.json());
    window.onresize = (e) =>
    {
        //ngZone.run will help to run change detection
        this.ngZone.run(() => {
            this.width=window.innerWidth;
            let diffWidth=this.width-this.prevWidth;
            if(this.trans==this.finaltrans){
              this.finaltrans+=diffWidth;
              document.getElementById('slider_Pics').style.transform='translate3d('+this.finaltrans+'px, 0px, 0px)';
            }
            console.log("Width: " + window.innerWidth);
            console.log("Height: " + window.innerHeight);
        });
    };
  }
  ngOnInit() {
    this.width=window.innerWidth;            
    this.prevWidth=window.innerWidth; 
    let diff=this.width-274; 
    diff=diff*2.08;          
    if(window.innerWidth<=530){
      this.finaltrans=-(window.innerWidth+1298)+diff;
      this.showButtons=false;
    }
    this.ExecuteLoop();
  }
  ngAfterViewInit(): void {
  }
  ngAfterViewChecked():void{
  }
  
  ExecuteLoop(){ 
    setInterval(()=>{
      if(!this.loadData && this.Categories!=null && this.Categories.length!=0){
        debugger;
          for(let i=0;i<this.Categories.length;i++){
            this.Types=this.Types.concat(this.Categories[i].Types);
          }
          for(let i=0;i<this.Types.length;i++){
            this.Deals= this.Deals.concat(this.Types[i].Deals);
          }
          this.loadData=true;
      }
    },500)
  }
  translateX(dicrtion:boolean){
    var dir="";
    if(localStorage.getItem("Language")!=null)
      dir=localStorage.getItem("Language");
    let val_=0;
    if(dir=="ltr"){
      if(window.innerWidth>1200){
        if(dicrtion){
          val_=this.trans-825;
          if(val_<-1336){
            val_=-1336;
          }
        }
        else{
          val_=this.trans+825;
          if(val_>0){
            val_=0;
          }
        }
      }
      else if(window.innerWidth>992){
        if(dicrtion){
          val_=this.trans-550;
          if(val_<-1537){
            val_=-1537;
          }
        }
        else{
          val_=this.trans+550;
          if(val_>0){
            val_=0;
          }
        }
      }
      else if(window.innerWidth>530){
        if(dicrtion){
          val_=this.trans-550;
          if(val_<-1775){
            val_=-1775;
          }
        }
        else{
          val_=this.trans+550;
          if(val_>0){
            val_=0;
          }
        }
      }
    }
    else{
      if(window.innerWidth>1200){
        if(!dicrtion){
          val_=this.trans+825;
          if(val_>1336){
            val_=1336;
          }
        }
        else{
          val_=this.trans-825;
          if(val_<0){
            val_=0;
          }
        }
      }
      else if(window.innerWidth>992){
        if(dicrtion){
          val_=this.trans+550;
          if(val_>1537){
            val_=1537;
          }
        }
        else{
          val_=this.trans-550;
          if(val_<0){
            val_=0;
          }
        }
      }
      else if(window.innerWidth>530){
        if(dicrtion){
          val_=this.trans+550;
          if(val_>1775){
            val_=1775;
          }
        }
        else{
          val_=this.trans-550;
          if(val_<0){
            val_=0;
          }
        }
      }
    }
    
    this.trans=val_;
    document.getElementById('slider_Pics').style.transform='translate3d('+val_+'px, 0px, 0px)';
    
  }
  swipe(action = this.SWIPE_ACTION.RIGHT) {
    var dir="";
    if(localStorage.getItem("Language")!=null)
      dir=localStorage.getItem("Language");
    let val_=0;
    if(dir=="ltr"){
    if(window.innerWidth<700){
// swipe right, next avatar
      if (action === this.SWIPE_ACTION.LEFT) {
        if(window.innerWidth>460){
          val_=this.trans-400;
          if(val_<this.finaltrans){
            val_=this.finaltrans;
          }
        }
        else{
          val_=this.trans-200;
          if(val_<this.finaltrans){
            val_=this.finaltrans;
          }
        }
      }

// swipe left, previous avatar
      if (action === this.SWIPE_ACTION.RIGHT) {
        if(window.innerWidth>460){
          val_=this.trans+400;
          if(val_>0){
            val_=0;
          }
        }
        else{
          val_=this.trans+200;
          if(val_>0){
            val_=0;
          }
        }
      }
    }
    else{
      // swipe right, next avatar
      if (action === this.SWIPE_ACTION.LEFT) {
        if(window.innerWidth>460){
          val_=this.trans+400;
          if(val_>this.finaltrans){
            val_=this.finaltrans;
          }
        }
        else{
          val_=this.trans+200;
          if(val_>this.finaltrans){
            val_=this.finaltrans;
          }
        }
      }

// swipe left, previous avatar
      if (action === this.SWIPE_ACTION.RIGHT) {
        if(window.innerWidth>460){
          val_=this.trans-400;
          if(val_<0){
            val_=0;
          }
        }
        else{
          val_=this.trans-200;
          if(val_<0){
            val_=0;
          }
        }
      }
    }
      this.trans=val_;
      document.getElementById('slider-list-ul').style.transform='translate3d('+val_+'px, 0px, 0px)';
    }
  }
}

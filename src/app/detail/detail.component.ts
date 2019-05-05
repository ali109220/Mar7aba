import { Component, OnInit } from '@angular/core';
import { Deal } from '../../Interfaces/Deal';
import { Type } from '../../Interfaces/Type';
import { Category } from '../../Interfaces/Category';
import { DealPic } from '../../Interfaces/DealPic';
import { ActivatedRoute } from '@angular/router';
import { MarhabaService } from '../marhaba.service';
import { City } from '../../Interfaces/City';
import { Company } from '../../Interfaces/Company';
import { Location } from '@angular/common'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

 Deals:Deal[];
 Deal:Deal;
 Type:Type;
 Category:Category;
 Pics:DealPic[];
 Categories:Category[];
 DealIdNumber:number;
 DealId:string;
 lastDealId:string;
 notOrdered:boolean;
 dealPics:DealPic[];
 Ok=false;
 coditionsStatus:boolean;
constructor(private route:ActivatedRoute,private location:Location,private marhaba:MarhabaService){
  this.DealId=this.route.snapshot.paramMap.get('id');
  this.lastDealId=this.DealId;
  this.Deals=new Array<Deal>();
  this.Type=new Type('','',new Category('',''));
  this.Deal=new Deal('','','',0,0,false,false,false,new Date(),0,0,this.Type,new City('',false),new Company('','','','','','',''));
  this.marhaba.getDeal(this.DealId).subscribe(x=>this.Deal=x.json());
  this.notOrdered=true;
  this.dealPics=new Array<DealPic>();
}

ngOnInit() {

}

ngAfterViewInit(): void {
  this.ExecuteLoop();
}
ExecuteLoop(){ 
  var index_pic_active=0;
  var valid=false;
  var forOnce=true;
  setInterval(()=>{
    this.DealId=this.route.snapshot.paramMap.get('id');
    if(this.DealId!=this.lastDealId){
      this.dealPics=new Array<DealPic>();
      this.marhaba.getDeal(this.DealId).subscribe(x=>this.Deal=x.json());
      this.lastDealId=this.DealId;
      this.notOrdered=true;
      this.Ok=false;
    }
    if(this.Deal.Id==parseInt(this.DealId) && this.notOrdered){
      var picOrder=10000000000000000;
      var picId;
      while(this.Deal.DealPics.length>this.dealPics.length){
        for(let i=0;i<this.Deal.DealPics.length;i++){
          if(this.Deal.DealPics[i].PicOrder<picOrder && !this.dealPics.includes(this.Deal.DealPics[i])){
            picOrder=this.Deal.DealPics[i].PicOrder;
            picId=this.Deal.DealPics[i].Id;
          }
        }
        var _dealPic=this.Deal.DealPics.find(x=>x.Id==picId);
        _dealPic.Indicator='Indicator'+_dealPic.PicOrder;
        _dealPic.PicId="Picture"+_dealPic.Id;
        this.dealPics.push(_dealPic);
        picOrder=10000000000000000;
      }
      this.marhaba.getType(this.Deal.Type.Id.toString()).subscribe(x=>this.Type=x.json());
      this.notOrdered=false;
      this.Ok=true;
      valid=false;
      forOnce=true;
      index_pic_active=0;
    }
  },1000)
  
  setInterval(()=>{
    if(this.Ok && !valid && forOnce && this.dealPics.length!=0){
      if(document.getElementById(this.dealPics[index_pic_active].PicId)!=null){
        document.getElementById(this.dealPics[index_pic_active].PicId).style.display='block';
        document.getElementById(this.dealPics[index_pic_active].Indicator).style.width='12px';
        document.getElementById(this.dealPics[index_pic_active].Indicator).style.height='12px';
        document.getElementById(this.dealPics[index_pic_active].Indicator).style.margin='0';
        document.getElementById(this.dealPics[index_pic_active].Indicator).style.backgroundColor='white';
        index_pic_active++;
        forOnce=false;
        if(index_pic_active>=this.dealPics.length)
          index_pic_active=0;
      }
    }
  
  },500)
  setInterval(()=>{
    if(this.Ok && !forOnce)
    for(let i=0;i<this.dealPics.length;i++){
      document.getElementById(this.dealPics[i].PicId).style.display='none';
      document.getElementById(this.dealPics[i].Indicator).style.width='10px';
      document.getElementById(this.dealPics[i].Indicator).style.height='10px';
      document.getElementById(this.dealPics[i].Indicator).style.margin='1px';
      document.getElementById(this.dealPics[i].Indicator).style.backgroundColor='transparent';
      valid=true;
    
    }
    if(this.Ok)
    if(valid){
      document.getElementById(this.dealPics[index_pic_active].PicId).style.display='block';
      document.getElementById(this.dealPics[index_pic_active].Indicator).style.width='12px';
      document.getElementById(this.dealPics[index_pic_active].Indicator).style.height='12px';
      document.getElementById(this.dealPics[index_pic_active].Indicator).style.margin='0';
      document.getElementById(this.dealPics[index_pic_active].Indicator).style.backgroundColor='white';
      index_pic_active++;
      if(index_pic_active>=this.dealPics.length)
        index_pic_active=0;
    }
  
  },5000)
}


 OpenModalOptions(){
  document.getElementById('ModalOptions').style.display='block';
}
closeModalOptions(){
  document.getElementById('ModalOptions').style.display='none';
}
 OpenModalCard(){
  document.getElementById('ModalCard').style.display='block';
}
closeModalCard(){
  document.getElementById('ModalCard').style.display='none';
}
openClose_conditions(){
  if(!this.coditionsStatus){
    document.getElementById("condition_svg").style.transform="rotate(-45deg)";
    document.getElementById("conditions_content").style.display="block";
    this.coditionsStatus=true;
  }
  else{
    document.getElementById("condition_svg").style.transform="rotate(0deg)";
    document.getElementById("conditions_content").style.display="none";
    this.coditionsStatus=false;
  }
}
}

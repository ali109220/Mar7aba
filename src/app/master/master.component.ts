import { Component, OnInit } from '@angular/core';
import { Deal } from '../../Interfaces/Deal';
import { Category } from '../../Interfaces/Category';
import { Type } from '../../Interfaces/Type';
import { DealPic } from '../../Interfaces/DealPic';
import { ActivatedRoute } from '@angular/router';
import { MarhabaService } from '../marhaba.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {
 
  TypeId:string;
  lasttypeId:string;
  TypeIdNumber:number=0;
  Type:Type;
  constructor(private route:ActivatedRoute,private location:Location,private marhaba:MarhabaService) {
    this.TypeId=this.route.snapshot.paramMap.get('id');
    this.lasttypeId=this.TypeId;
    this.TypeIdNumber=parseInt(this.TypeId);
    this.Type=new Type('','',new Category('',''));
    this.marhaba.getType(this.TypeId).subscribe(x=>this.Type=x.json());
   }

  ngOnInit() {
    
  }
  ngAfterViewInit(): void {
    this.ExecuteLoop();
  }
  ngAfterViewChecked():void{
    
  }
  
  ExecuteLoop(){ 
    
    setInterval(()=>{
      this.TypeId=this.route.snapshot.paramMap.get('id');
      this.TypeIdNumber=parseInt(this.TypeId);
      if(this.TypeId!=this.lasttypeId){
        this.lasttypeId=this.TypeId;
        this.marhaba.getType(this.TypeId).subscribe(x=>this.Type=x.json());
      }
    },500)
  }

}

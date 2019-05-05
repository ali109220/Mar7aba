import { Component, OnInit } from '@angular/core';
import { Deal } from '../../Interfaces/Deal';
import { MarhabaService } from '../marhaba.service';
import { Router } from '@angular/router';
import { City } from '../../Interfaces/City';
import { Company } from '../../Interfaces/Company';
import { Category } from '../../Interfaces/Category';
import { Type } from '../../Interfaces/Type';

@Component({
  selector: 'app-deal',
  templateUrl: './deal.component.html',
  styleUrls: ['./deal.component.css']
})
export class DealComponent implements OnInit {
  first:boolean;
  second:boolean;
  selectedType:Type;
  selectedCity:City;
  selectedCompany:Company;
  types:Type[];
  cities:City[];
  companies:Company[];
  errorMessage_desc: string;
  errorMessage_name: string;
  deal:Deal;
  err=false;
  constructor(private marhaba:MarhabaService,private router:Router) {
    this.types=new Array<Type>();
    this.cities=new Array<City>();
    this.companies=new Array<Company>();
    this.marhaba.getTypes().subscribe(x=>this.types=x.json()); 
    this.selectedType=new Type('','',new Category("",""));
    this.selectedCity=new City('',false);
    this.selectedCompany=new Company('','','','','','','');
    this.deal=new Deal('','','',0,0,false,false,false,new Date(),0,0,new Type('','',new Category("","")),new City('',false),new Company('','','','','','',''));
  }

  ngOnInit() {
    this.execuiteLoop();
  }
  
  execuiteLoop() {
    setInterval(()=>{
      if(!this.first && this.types.length!=0){
        this.marhaba.getCities().subscribe(x=>this.cities=x.json()); 
        this.first=true;

      }
      if(!this.second && this.cities.length!=0){
        this.marhaba.getCompanies().subscribe(x=>this.companies=x.json()); 
        this.second=true;
      }
    
    },2000)
  }
  onChangeInput(key:string,input:string){
    if(key=="name"){
      if(input!=''){
        this.err=false;
        document.getElementById("errorMessage_name").style.display="none";
        this.errorMessage_name="";
      }
    }
    if(key=="desc"){
        if(input!=''){
          this.err=false;
          document.getElementById("errorMessage_desc").style.display="none";
          this.errorMessage_desc="";
        }
      }
  }
  add(){
    if(this.deal.ResourceName==''){
      document.getElementById("errorMessage_name").style.display="initial";
      this.errorMessage_name="*";
      this.err=true;
    }
    if(this.deal.ResourceDescription==''){
      document.getElementById("errorMessage_desc").style.display="initial";
      this.errorMessage_desc="*";
      this.err=true;
    }
    if(!this.err && this.deal.ResourceName!='' &&this.deal.ResourceDescription!='' && this.selectedType.Id!=0 && this.selectedCity.Id!=0 && this.selectedCompany.Id!=0){
      //this.selectedCategory.Types.push(this.type);
      
      this.selectedType.Category=new Category("","");
      this.deal.Type_Id=this.selectedType.Id;
      this.deal.City_Id=this.selectedCity.Id;
      this.deal.Company_Id=this.selectedCompany.Id;
      debugger;
      console.log(JSON.stringify(this.deal));
      this.marhaba.postDeal(this.deal).subscribe(res=>console.log('success',res.json()));
      this.deal=new Deal('','','',0,0,false,false,false,new Date(),0,0,new Type('','',new Category("","")),new City('',false),new Company('','','','','','',''));
      
    }
}
}

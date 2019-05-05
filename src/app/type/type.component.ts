import { Component, OnInit } from '@angular/core';
import { Type } from '../../Interfaces/Type';
import { Category } from '../../Interfaces/Category';
import { MarhabaService } from '../marhaba.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {
  selectedCategory:Category;
  categories:Category[];
  errorMessage_desc: string;
  errorMessage_name: string;
  type:Type;
  err=false;
  constructor(private marhaba:MarhabaService,private router:Router) {
    this.marhaba.getCategories().subscribe(x=>this.categories=x.json()); 
    this.type=new Type('','',new Category("",""));
    this.selectedCategory=new Category('','');
  }

  ngOnInit() {
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
    if(this.type.ResourceName==''){
      document.getElementById("errorMessage_name").style.display="initial";
      this.errorMessage_name="*";
      this.err=true;
    }
    if(this.type.ResourceDescription==''){
      document.getElementById("errorMessage_desc").style.display="initial";
      this.errorMessage_desc="*";
      this.err=true;
    }
    if(!this.err && this.type.ResourceName!='' &&this.type.ResourceDescription!='' && this.selectedCategory.ResourceName!=''){
      //this.selectedCategory.Types.push(this.type);
      this.type.Category=this.selectedCategory;
      this.marhaba.postType(this.type).subscribe(res=>console.log('success',res.json()));
      this.type=new Type('','',new Category("",""));
      // clean values in name and desc
    }
  }

}

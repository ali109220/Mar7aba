import { Component, OnInit } from '@angular/core';
import { Category } from '../../Interfaces/Category';
import { Router } from '@angular/router';
import { MarhabaService } from '../marhaba.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  errorMessage_desc: string;
  errorMessage_name: string;
  category:Category;
  err=false;
  constructor(private marhaba:MarhabaService,private router:Router) { 
    this.category=new Category('','');
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
    if(this.category.ResourceName==''){
      document.getElementById("errorMessage_name").style.display="initial";
      this.errorMessage_name="*";
      this.err=true;
    }
    if(this.category.ResourceDescription==''){
      document.getElementById("errorMessage_desc").style.display="initial";
      this.errorMessage_desc="*";
      this.err=true;
    }
    if(!this.err && this.category.ResourceName!='' &&this.category.ResourceDescription!=''){
      this.marhaba.postCategory(this.category).subscribe(res=>console.log('success',res.json()));
      this.category=new Category('','');
      // clean values in name and desc
    }
  }
}

import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../Interfaces/User';
import { MarhabaService } from '../marhaba.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user:User;
  _RePassword:string;
  errorMessage_userName:string;
  errorMessage_firstName:string;
  errorMessage_email:string;
  errorMessage_password:string;
  errorMessage_repassword:string;
  err=false;
 
  constructor(private ngZone:NgZone,private marhaba:MarhabaService,private router:Router) { 
    this.user=new User('','','','','','',new Date(),new Date(),false,false,false,0,0); 
    
  }

  ngOnInit() {
  }

  rigesterWithMarhaba(){
    
    debugger;
    if(this.user.UserName==''){
      this.err=true;
      document.getElementById("errorMessage_userName").style.display="block";
      document.getElementById("_firstName").style.margin="0";
      this.errorMessage_userName="You must fill it";
    }
    if(this.user.FirstName==''){
      this.err=true;
      document.getElementById("errorMessage_firstName").style.display="block";
      document.getElementById("_email").style.margin="0";
      this.errorMessage_firstName="You must fill it";
      
    }
    if(this.user.Password==''){
      this.err=true;
      document.getElementById("errorMessage_password").style.display="block";
      document.getElementById("_repassword").style.margin="0";
      this.errorMessage_password="You must fill it";
    }
    if(this.user.Email==''){
      this.err=true;
      document.getElementById("errorMessage_email").style.display="block";
      document.getElementById("_password").style.margin="0";
      this.errorMessage_email="You must fill it";
    }
    if(this._RePassword==''){
      this.err=true;
      document.getElementById("errorMessage_repassword").style.display="block";
      this.errorMessage_repassword="You must fill it";
    }
    if(!this.user.Password.includes(this._RePassword)){
      this.err=true;
      document.getElementById("errorMessage_repassword").style.display="block";
      this.errorMessage_repassword="Password not equal to Confirm Password";
    }
    if(!this.err){
      this.marhaba.postUsr(this.user).subscribe(res=>console.log('success',res.json()));
      this.router.navigate(['/home']);
    }
  }
  onChangeInput(key:string,input:string){
    if(key=="userName"){
      debugger;
      let regexp=new RegExp(/^[a-zA-Z]+$/);
      let regexp_=new RegExp(/^[a-zA-Z0-9_]*$/);
      //^[a-zA-Z0-9_]*$
      if(input!=''){
        this.err=false;
        document.getElementById("errorMessage_userName").style.display="none";
        document.getElementById("_firstName").style.margin="22px 0 0 0";
        this.errorMessage_userName="";
      }
      if(input.search(regexp_)===-1) {
        this.err=true;
        document.getElementById("errorMessage_userName").style.display="block";
        document.getElementById("_firstName").style.margin="0";
        this.errorMessage_userName="not allowed spaces";
      }
      if(input.substring(0,1).search(regexp)===-1) {
        this.err=true;
        document.getElementById("errorMessage_userName").style.display="block";
        document.getElementById("_firstName").style.margin="0";
        this.errorMessage_userName="start with only any characters";
      }
      if(input==''){
        this.err=true;
      document.getElementById("errorMessage_userName").style.display="block";
      document.getElementById("_firstName").style.margin="0";
      this.errorMessage_userName="You must fill it";
      }
    }
    if(key=="firstName"){
      let regexp=new RegExp(/^[a-zA-Z]+$/);
      //^[a-zA-Z0-9_]*$
      if(input!=''){
        this.err=false;
        document.getElementById("errorMessage_firstName").style.display="none";
        document.getElementById("_email").style.margin="22px 0 0 0";
        this.errorMessage_firstName="";
      }
      if(input.substring(0,1).search(regexp)===-1) {
        this.err=true;
        document.getElementById("errorMessage_firstName").style.display="block";
        document.getElementById("_email").style.margin="0";
        this.errorMessage_firstName="start with only any characters";
      }
      if(input==''){
        this.err=true;
      document.getElementById("errorMessage_userName").style.display="block";
      document.getElementById("_email").style.margin="0";
      this.errorMessage_firstName="You must fill it";
      }
    }
    if(key=="email"){
      let regexp=new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
      if(input!=''){
        this.err=false;
        document.getElementById("errorMessage_email").style.display="none";
        document.getElementById("_password").style.margin="22px 0 0 0";
        this.errorMessage_email="";
      }
      if(input.search(regexp)===-1) {
        this.err=true;
        document.getElementById("errorMessage_email").style.display="block";
        document.getElementById("_password").style.margin="0";
        this.errorMessage_email="Not valid";
      }
      if(input==''){
        this.err=true;
        document.getElementById("errorMessage_email").style.display="block";
        document.getElementById("_password").style.margin="0";
        this.errorMessage_email="You must fill it";
      }
    }
  }
}

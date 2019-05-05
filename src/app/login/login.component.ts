import { Component, OnInit } from '@angular/core';
import { MarhabaService } from '../marhaba.service';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
import { User } from '../../Interfaces/User';
import { LoginModel } from '../../Interfaces/LoginModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login-en.component.css']
})
export class LoginComponent implements OnInit {
  user:User;
  email:string;
  password:string;
  errorMessage_email:string;
  errorMessage_password:string;
  err=false;
  Checked=false;
  errorMessage='';
  constructor(private marhaba:MarhabaService,private router:Router,private location:Location) { 
    this.user=new User('','','','','','',new Date(),new Date(),false,false,false,0,0);
    this.user.Id=0;
  }

  ngOnInit() {
  }
  submit(){
    debugger;
    if(!this.err && this.email!='' &&this.password!=''){
      var _login=new LoginModel(this.email,this.password);
      this.marhaba.AuthenticationUser(_login).subscribe(x=>this.user=x.json());
      }
      this.WaitInterval();
  }
  WaitInterval(){
      
    setInterval(()=>{
      if(this.user.Id!=0 ){
        if(this.user.Id!=-1){
          debugger;
          localStorage.setItem("userToken",this.user.Password);
          localStorage.setItem("userName",this.user.UserName);
          if(this.user.IsAdmin)
          localStorage.setItem("IsAdmin","true");
          else
          localStorage.setItem("IsAdmin","false");
          this.router.navigate(['/home']);
          window.location.reload();
          this.user=new User('','','','','','',new Date(),new Date(),false,false,false,0,0);
          this.user.Id=0;
        }
        else{
          this.err=true;
          document.getElementById("errorMessage").style.display="block";
          this.errorMessage="Email or password not correct";
          this.user=new User('','','','','','',new Date(),new Date(),false,false,false,0,0);
          this.user.Id=0;
        }
      }
    },600)
  }
  onChangeInput(key:string,input:string){
    if(key=="email"){
      let regexp=new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
      if(input!=''){
        this.err=false;
        document.getElementById("errorMessage").style.display="none";
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
    if(key=="password"){
      if(input!=''){
        this.err=false;
        document.getElementById("errorMessage").style.display="none";

      }
    }

  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dir:string="ltr";
  title = 'app';
  constructor(){
    if(localStorage.getItem("Language")!=null){
      this.dir=localStorage.getItem("Language");
    }
  }
}

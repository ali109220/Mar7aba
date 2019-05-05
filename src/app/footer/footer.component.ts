import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  hover_action(number:number,value:boolean){
    switch(number){
      case 1 : {

        if(value){
          document.getElementById('find-store').style.backgroundColor='black';
          document.getElementById('mapmarker-store').style.color='white';
        }
        else{
          document.getElementById('find-store').style.backgroundColor='transparent';
          document.getElementById('mapmarker-store').style.color='black';
        }
        break;
      }
      case 2 : {
        if(value){
          document.getElementById('customer-service').style.backgroundColor='black';
          document.getElementById('phone').style.color='white';
        }
        else{
          document.getElementById('customer-service').style.backgroundColor='transparent';
          document.getElementById('phone').style.color='black';
        }
        break;
      }
      case 3 : {
        if(value){
          document.getElementById('interior-designers').style.backgroundColor='black';
          document.getElementById('floorplan').style.color='white';
        }
        else{
          document.getElementById('interior-designers').style.backgroundColor='transparent';
          document.getElementById('floorplan').style.color='black';
        }
        break;
      }
      case 4 : {
        if(value){
          document.getElementById('svg-social-facebook').style.fill='black';
        }
        else{
          document.getElementById('svg-social-facebook').style.fill='gray';
        }
      break;
    }
      case 5 : {
        if(value){
          document.getElementById('svg-social-instagram').style.fill='black';
        }
        else{
          document.getElementById('svg-social-instagram').style.fill='gray';
        }
      break;
    }
      case 6 : {
        if(value){
        document.getElementById('svg-social-twitter').style.fill='black';
        }
        else{
        document.getElementById('svg-social-twitter').style.fill='gray';
        }    
      break;
    }
      case 7 : {
        if(value){
        document.getElementById('svg-social-pinterest').style.fill='black';
        }
        else{
        document.getElementById('svg-social-pinterest').style.fill='gray';
        } 
      break;
    }
      case 8 : {
        if(value){
        document.getElementById('svg-social-youtube').style.fill='black';
        }
        else{
        document.getElementById('svg-social-youtube').style.fill='gray';
        } 
      break;
  }
  }
  }

}

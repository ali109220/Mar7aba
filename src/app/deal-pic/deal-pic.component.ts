import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-deal-pic',
  templateUrl: './deal-pic.component.html',
  styleUrls: ['./deal-pic.component.css']
})
export class DealPicComponent implements OnInit {
  selectedFile:File=null;
  imageUrl:string="assets/img/download.jpg";
  constructor() { }

  ngOnInit() {
  }
  onFileSelected(files:FileList){
    this.selectedFile=files.item(0);
    var reader=new FileReader();
    reader.onload=(event:any)=>{
      this.imageUrl=event.target.result;
    }
    reader.readAsDataURL(this.selectedFile);
    
  }
}

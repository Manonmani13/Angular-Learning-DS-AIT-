import { Component } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'eventemitterapp';
  constructor(){
    var con:any=document.getElementById("img1")
    fromEvent(con,"mousedown").subscribe((dt:any)=>{
      if(dt.button==2){
        alert("Can not copy image")
      }
    })
  }
}

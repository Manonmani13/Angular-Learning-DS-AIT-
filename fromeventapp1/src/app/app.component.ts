import { Component } from '@angular/core';

import {fromEvent} from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fromeventapp1';
  xpos:any;
  ypost:any;

  constructor(){
    //click ,mouseover
    fromEvent(document,"mouseover").subscribe((data:any)=>{
      this.xpos=data.clientX;
      this.ypost=data.clientY;
    })
  }
}

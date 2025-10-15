import { Component } from '@angular/core';

@Component({
  selector: 'app-c2',
  standalone: false,
  templateUrl: './c2.component.html',
  styleUrl: './c2.component.css'
})
export class C2Component {
  txt:string="";
  constructor(){
    this.txt=localStorage.getItem("sno")||"";
    localStorage.setItem("uname","manonmani");
    localStorage.getItem("uname");
    localStorage.removeItem("uname");
    localStorage.clear();
  }

}

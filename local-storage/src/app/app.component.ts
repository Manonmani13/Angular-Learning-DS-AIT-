import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'local-storage';
  sno:string="123";
  constructor(){
  localStorage.setItem("sno",this.sno.toString()); 
  sessionStorage.setItem("x","100")
  }
}

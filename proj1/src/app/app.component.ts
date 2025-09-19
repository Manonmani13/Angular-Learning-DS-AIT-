import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proj1';
  sno:number=100;
  fun1(){
    alert("Hi");
    this.sno=200;
  }
}

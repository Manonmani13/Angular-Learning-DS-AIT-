import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngifproj';
  flag:boolean=true;
  flag2:boolean=false;
  arr=[10,20,30,40,50];
  cities=["Chennai","Bangalore","Mumbai","Delhi"];
  txtCity:string='';
}

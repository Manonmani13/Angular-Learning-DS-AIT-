import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pure-impure-pipes';
  uname="manonmani";
  cities:any=["hyderabad","Chennai","mumbai"];
  funChange(newname:string){
    this.uname=newname;
  }

  cityAdd(city: string){
     this.cities.push(city);
  }
}

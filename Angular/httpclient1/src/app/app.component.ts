import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'httpclient1';
  constructor(private ht:HttpClient){

  }
  con_data:any;
  getData(){
    this.ht.get("https://restcountries.com/v3.1/all").subscribe(
      dt=>{
        this.con_data=dt
      }
    )
    // alert("Hi")
  }
}

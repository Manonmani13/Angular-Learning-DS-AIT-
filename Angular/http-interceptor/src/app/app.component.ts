import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'http-interceptor';
  ht=inject(HttpClient)
  funData(){
    this.ht.get("https://restcountries.com/v3.1./allx").subscribe((dt:any)=>{
      console.log(dt)
    })
  }
}

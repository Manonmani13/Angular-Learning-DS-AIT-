import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-node-api';
  constructor(private ht:HttpClient){

  }
  fun1(){
    // alert("Fun exec")
    this.ht.post("http://localhost:1234/met2",{un:"manonmani",city:"chennai"}).subscribe((dt:any)=>{
      alert(dt.result);
    })
  }

   fun2(){
    // alert("Fun exec")
    this.ht.get("http://localhost:1234/met1").subscribe((dt:any)=>{
      alert(dt.result);
    })
  }
}

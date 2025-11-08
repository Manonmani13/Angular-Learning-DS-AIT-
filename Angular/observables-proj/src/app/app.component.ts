import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'observables-proj';
  obj=new Observable(function(sender){
    
    sender.next("mano")
    sender.next(100.30)
    var count=0;
    sender.next(count)
    setInterval(()=>{
      count++;
      if(count==10){
        sender.complete();
      }
      if(count==9){
        sender.error("something went wrong")
      }
      if(count==5)
        sender.unsubscribe();
      sender.next(count)

    },1000)

  });

  constructor(private ht:HttpClient){
   
    this.fun1();
    this.fun2();
  }

  subscribe(){
 this.obj.subscribe(dt=>{
      console.log(`count is  ${dt}`)},
      er=>console.log(`Error Occured :${er}`),
      ()=>console.log("completed")
    )
  }
  fun1(){
    this.ht.get("https://restcountries.com/v3.1/all").subscribe(dt=>{
      console.log(dt)
    })
  }
  fun2(){
    console.log("Fun2")

  }
}

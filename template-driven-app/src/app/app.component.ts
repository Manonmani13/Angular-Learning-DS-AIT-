import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'template-driven-app';
  rad1:any;
  tc:any;
  drplang:any;
  funSend=(formRef:NgForm)=>{
    if(formRef.invalid){
      alert("Please enter valid data")
    }else{
    alert(this.rad1)
    alert(this.tc)
    alert(this.drplang)
    }
  }
}

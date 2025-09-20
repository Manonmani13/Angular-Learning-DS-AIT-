import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  uname:String="";
  pword:String=""
  constructor(private r:Router) { }
  funlogin(){
    if(this.uname=='manonmani' && this.pword=='manonmani'){
      alert("Valid User");
      this.r.navigateByUrl("welc");
    }
    else{
      alert("Invalid User");
            this.r.navigateByUrl("invalid");

    }
  }


}

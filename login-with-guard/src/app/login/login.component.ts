import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  uname:string='';
  upwd:string='';
  constructor(private rt:Router,private ser: LoginService){

  
  }
  login(){
    if(this.uname=="manonmani" && this.upwd=="manonmani123"){
      localStorage.setItem("auth","true");
      var path:any=localStorage.getItem("path");
      this.ser.authValid=true;
      this.rt.navigateByUrl(path);
      // alert("login success");
    }else{
      alert("invalid credentials"); 
    }
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  authValid:boolean=false;
  constructor() { 
    if(localStorage.getItem("auth")){
        this.authValid=true;
    }else{
      this.authValid=false;
    }
  }
}

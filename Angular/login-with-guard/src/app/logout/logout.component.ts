import { Component } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-logout',
  standalone: false,
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
  constructor(private ser:LoginService){
    ser.authValid=false;
    localStorage.clear();
  }

}

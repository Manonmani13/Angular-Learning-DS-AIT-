
import { Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'navigate-app';
  constructor(@Inject(Router) private rt:Router){

  }
  funp1(){
    console.log("p1 clicked");
    this.rt.navigateByUrl("c1")
  }
  funp2(){
    alert("p2 clicked");
  }
}

import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { AppRoutingModule } from "../../../activated-route-app/src/app/app-routing.module";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, C1Component, C2Component,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-routing';
}

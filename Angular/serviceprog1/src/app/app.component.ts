import { Component, Inject, Injectable } from '@angular/core';
import { S1Service } from './s1.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'serviceprog1';
  constructor(@Inject(S1Service) public s1service:S1Service){}
}

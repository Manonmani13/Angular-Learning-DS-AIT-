import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-service',
  standalone: false,
  templateUrl: './service.component.html',
  styleUrl: './service.component.css',
  encapsulation:ViewEncapsulation.ShadowDom
})
export class ServiceComponent {

}

import { Component } from '@angular/core';
import Data from '../Productdata';

@Component({
  selector: 'app-cardpage',
  standalone: false,
  templateUrl: './cardpage.component.html',
  styleUrl: './cardpage.component.css'
})
export class CardpageComponent {
  dataObj:any=Data;

}

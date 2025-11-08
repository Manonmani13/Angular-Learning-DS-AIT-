import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Data from '../Productdata';

@Component({
  selector: 'app-more-info',
  standalone: false,
  templateUrl: './more-info.component.html',
  styleUrl: './more-info.component.css'
})
export class MoreInfoComponent {
  product_id:any;
  proinf=Data;
  constructor(private ar: ActivatedRoute) { 
    ar.params.subscribe((data:any)=>{
      this.product_id=data.pid;
    })
  }

}

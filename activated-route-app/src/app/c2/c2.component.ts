import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-c2',
  standalone: false,
  templateUrl: './c2.component.html',
  styleUrl: './c2.component.css'
})
export class C2Component {
  constructor(private ar:ActivatedRoute){
    this.ar.params.subscribe(function(dt){
      alert(dt['user']+" "+dt['city']);
    })
  }

}

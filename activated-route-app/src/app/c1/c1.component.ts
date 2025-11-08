import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-c1',
  standalone: false,
  templateUrl: './c1.component.html',
  styleUrl: './c1.component.css'
})
export class C1Component {
  constructor(private ar:ActivatedRoute){
    this.ar.params.subscribe(function(dt){
      alert(dt['x']);
    })
  }

}

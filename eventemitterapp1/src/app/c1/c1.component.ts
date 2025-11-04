import { Component, EventEmitter } from '@angular/core';
import { EmitterService } from '../emitter.service';

@Component({
  selector: 'app-c1',
  standalone: false,
  templateUrl: './c1.component.html',
  styleUrl: './c1.component.css'
})
export class C1Component {

  constructor(private emitterService:EmitterService){

  }
  emitEmitter(){
    this.emitterService.em.emit({sno:100,uname:'mano'});
  }
}

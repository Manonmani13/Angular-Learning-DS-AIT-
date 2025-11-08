import { Component } from '@angular/core';
import { EmitterService } from '../emitter.service';

@Component({
  selector: 'app-c2',
  standalone: false,
  templateUrl: './c2.component.html',
  styleUrl: './c2.component.css'
})
export class C2Component {
  constructor(private emitterService:EmitterService){
    this.emitterService.em.subscribe((data)=>{
      alert("event "+data.sno)
    });
  }
  fun1(){
    alert("From c3 event fired");
    this.emitterService.em.emit({sno:120,uname:"Naveen"})
  }
}

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Output() booktic:any=new EventEmitter();

  fun1(confRef: any){
    alert("Exec...");
    alert(confRef.value)
    this.booktic.emit(confRef.value)
  }

}

import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-comp1',
  standalone: false,
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.css'
})
export class Comp1Component {

  @Input() x:any;

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log("parent component modified")
    
  }


}

import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-c2',
  standalone: false,
  templateUrl: './c2.component.html',
  styleUrl: './c2.component.css'
})
export class C2Component {
  count:any;
 constructor(){

    this.count=interval().subscribe((x:any)=>{
      console.log(`hello ${x}`)
    })
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.count.unsubscribe();
  }
}

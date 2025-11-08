import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';

@Component({
  selector: 'app-child1',
  standalone: false,
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css', 
    changeDetection:ChangeDetectionStrategy.OnPush

})
export class Child1Component {
    tmp:any='mano';
  cdf=inject(ChangeDetectorRef);
  ngOnInit():  void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    setTimeout(()=>{
      console.log("Time to execute")
    
      this.tmp='naveen'
      this.cdf.markForCheck()
    },3000)
  }
  fun1(){
    console.log("from child")
  }
}

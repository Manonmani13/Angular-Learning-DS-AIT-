import { Component } from '@angular/core';
import { fromEvent } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fromevent3';

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    var con:any=document.getElementById("txt1");
    fromEvent(con,"keyup").subscribe((dt:any)=>{
      alert(dt.key)
    })
        var con2:any=document.getElementById("txt2");
      fromEvent(con2,"keydown").subscribe((dt:any)=>{
        if(dt.keyCode<48 ||dt.keyCode>57)
        {
      alert(dt.keyCode)
          dt.preventDefault();
        }
    })
  }
}

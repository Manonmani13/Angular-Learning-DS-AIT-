import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit{
  title = 'life-cycle-hooks';
  sno:any=100;
  uname:string='scptt';
  constructor(){
    console.log("Const Call..")
    var con:any=document.getElementById("txt1");
    alert(con);
  }

  ngOnInit():void{
    console.log("Oninit exec.....");
    var con:any=document.getElementById("txt1");
    alert(con)
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    alert("hey")
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log("Do check exec..")
  }
}


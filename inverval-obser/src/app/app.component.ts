import { Component } from '@angular/core';
import {interval} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'inverval-obser';
  // constructor(){
  //   interval().subscribe((x:any)=>{
  //     console.log(`hello ${x}`)
  //   })
  // }
}

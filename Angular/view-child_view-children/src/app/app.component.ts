import { Component, QueryList, ViewChildren } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'view-child_view-children';
  @ViewChildren(ChildComponent) ref:QueryList<ChildComponent> =new QueryList<ChildComponent> ;
  funGet(){
    alert("Exce ..")
    console.log(this.ref.first.x)
    this.ref.last.x=20;
    this.ref.last.y=10
  }
}

import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // corrected 'styleUrl' to 'styleUrls'
})
export class AppComponent implements AfterViewInit {
  title = 'viewchild-comp';

  @ViewChild('element') ele_ref!: ElementRef;

  ngAfterViewInit(): void {
    if (this.ele_ref) {
      console.log(this.ele_ref.nativeElement.innerText);
      this.ele_ref.nativeElement.style.color = 'red';
    } else {
      console.warn('Element reference is undefined.');
    }
  }
}

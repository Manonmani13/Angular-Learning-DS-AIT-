import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-cq',
  imports: [FormsModule],
  templateUrl: './cq.component.html',
  styleUrl: './cq.component.css'
})
export class CqComponent {
  name='hello'

}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CqComponent } from "./cq/cq.component";
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CqComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'standalone-project1';
  name='mano'
}

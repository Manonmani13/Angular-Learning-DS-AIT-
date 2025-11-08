import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  standalone: false,
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  totalTickets:any=100;
  ticketsBooks(ev:any){
    this.totalTickets-=ev;
  }

}

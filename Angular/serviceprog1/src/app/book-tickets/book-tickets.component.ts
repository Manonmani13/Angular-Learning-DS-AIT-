import { Component } from '@angular/core';
import { S1Service } from '../s1.service';

@Component({
  selector: 'app-book-tickets',
  standalone: false,
  templateUrl: './book-tickets.component.html',
  styleUrl: './book-tickets.component.css'
})
export class BookTicketsComponent {
  constructor(public ser:S1Service) { }

  bookTickets(){
    if(this.ser.TotalTickets==0 ){
      alert("Tickets Sold Out");
    }
    this.ser.TotalTickets=this.ser.TotalTickets-10;
  }
}

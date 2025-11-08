import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookTicketsComponent } from './book-tickets/book-tickets.component';

@NgModule({
  declarations: [
    AppComponent,
    BookTicketsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent,BookTicketsComponent]
})
export class AppModule { }

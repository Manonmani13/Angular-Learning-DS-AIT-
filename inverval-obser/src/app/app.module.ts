import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: 'c1', component: C1Component },
  { path: 'c2', component: C2Component }
];

@NgModule({
  declarations: [
    AppComponent,
    C1Component,
    C2Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) // Use RouterModule.forRoot() here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
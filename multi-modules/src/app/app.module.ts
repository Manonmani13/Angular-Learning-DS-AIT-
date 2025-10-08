import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { M1homeComponent } from './m1home/m1home.component';

const routes: Routes = [
  {path:"",component:M1homeComponent},
  {path:"m1h",component:M1homeComponent}
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

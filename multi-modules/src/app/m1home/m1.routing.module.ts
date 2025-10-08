import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { M1homeComponent } from './m1home.component';

const routes: Routes = [
  {path:"",component:M1homeComponent,children:[{
  path:"m1h",component:M1homeComponent}]

  },
];
@NgModule({
 
  imports: [
    RouterModule.forChild(routes),
    AppRoutingModule
  ]
})
export class M1RoutingModule { }

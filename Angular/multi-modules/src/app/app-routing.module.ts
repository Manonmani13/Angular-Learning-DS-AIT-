 import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { M1homeComponent } from './m1home/m1home.component';

const routes: Routes = [{path:"m1moudle",loadChildren:()=>M1homeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardpageComponent } from './cardpage/cardpage.component';
import { MoreInfoComponent } from './more-info/more-info.component';

const routes: Routes = [
  {path:"",component:CardpageComponent},
  {path:"card",component:CardpageComponent},
  {path:"more/:pid",component:MoreInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

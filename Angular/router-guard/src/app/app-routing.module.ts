import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { accessGuard } from './access.guard';
import { DeniedComponent } from './denied/denied.component';

const routes: Routes = [
  {path:"hm",component:HomeComponent},  
  {path:"ab",component:AboutComponent, canActivate:[accessGuard]},
  {path:"cn",component:ContactComponent},
  {path:"den",component:DeniedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

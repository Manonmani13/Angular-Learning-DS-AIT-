import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { InvalidComponent } from './invalid/invalid.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"welc",component:WelcomeComponent},
  {path:"invalid",component:InvalidComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

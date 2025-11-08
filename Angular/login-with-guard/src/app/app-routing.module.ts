import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ServicesComponent } from './services/services.component';
import { authGuard } from './auth.guard';
import { LogoutComponent } from './logout/logout.component';
import { AbcdComponent } from './abcd/abcd.component';

const routes: Routes = [
  {path:"hm",component:HomeComponent},
  {path:"lg",component:LoginComponent},
  {path:"abcd",component:AbcdComponent, canActivate:[authGuard]},
  {path:"ser",component:ServicesComponent, canActivate:[authGuard]},
  {path:"logout",component:LogoutComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

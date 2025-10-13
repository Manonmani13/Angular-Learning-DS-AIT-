import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { HardwareServiceComponent } from './hardware-service/hardware-service.component';
import { SoftwareServiceComponent } from './software-service/software-service.component';
import { AngularComponent } from './angular/angular.component';
import { ReactComponent } from './react/react.component';
const routes: Routes = [
  {path:"hm",component:HomeComponent},
  {path:"ser",component:ServicesComponent, children:[
    {path:"",redirectTo:"ss",pathMatch:"full"},
 {path:"hs",component:HardwareServiceComponent},
  {path:"ss",component:SoftwareServiceComponent,children:[
    {path:"",redirectTo:"ag",pathMatch:"full"},
  {path:"ag",component:AngularComponent},
  {path:"rt",component:ReactComponent}
  ]}
  ]
  }  ,
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

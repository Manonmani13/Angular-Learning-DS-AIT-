import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { HardwareServiceComponent } from './hardware-service/hardware-service.component';
import { SoftwareServiceComponent } from './software-service/software-service.component';
import { AngularComponent } from './angular/angular.component';
import { ReactComponent } from './react/react.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    HardwareServiceComponent,
    SoftwareServiceComponent,
    AngularComponent,
    ReactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { NavigationBottomComponent } from './shared/navigation-bottom/navigation-bottom.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NavigationBottomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    ScullyLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

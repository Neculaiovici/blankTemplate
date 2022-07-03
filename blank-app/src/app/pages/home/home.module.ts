import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LandingComponent } from './landing/landing.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PartnersComponent } from './partners/partners.component';
import { WhyComponent } from './why/why.component';
import { ButtonsModule, CarouselModule, IconsModule, InputsModule, WavesModule } from 'angular-bootstrap-md';


@NgModule({
  declarations: [
    HomeComponent,
    LandingComponent,
    ServicesComponent,
    AboutComponent,
    ContactComponent,
    PartnersComponent,
    WhyComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ButtonsModule, WavesModule, InputsModule, IconsModule,CarouselModule
  ]
})
export class HomeModule { }

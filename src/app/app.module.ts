import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { BodyComponent } from './body/body.component';
import { ClientsComponent } from './clients/clients.component';
import { FooterComponent } from './footer/footer.component';
import { HowitworksComponent } from './howitworks/howitworks.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PricingComponent } from './pricing/pricing.component';
import { RequestsComponent } from './requests/requests.component';

@NgModule({
  declarations: [AppComponent, MainComponent, NavbarComponent,PricingComponent,ClientsComponent,
    BenefitsComponent,FooterComponent,BodyComponent,RequestsComponent,HowitworksComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

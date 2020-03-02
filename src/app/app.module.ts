import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { InfoModalPageModule } from './info-modal/info-modal.module';
import { CalendarModalPageModule } from './calendar-modal/calendar-modal.module';
import { SeatTypeModalPageModule } from './seat-type-modal/seat-type-modal.module';
import { PaymentModalPageModule } from './payment-modal/payment-modal.module';
import { HttpClientModule } from '@angular/common/http';
import { Geolocation } from '@ionic-native/geolocation/ngx';




@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    InfoModalPageModule, CalendarModalPageModule, SeatTypeModalPageModule, PaymentModalPageModule, HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
   
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

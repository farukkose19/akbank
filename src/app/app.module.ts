import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HarcamaDetayPage } from '../pages/harcama-detay/harcama-detay';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { KampanyaDetayPage } from '../pages/kampanya-detay/kampanya-detay';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HarcamaDetayPage,
    KampanyaDetayPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HarcamaDetayPage,
    KampanyaDetayPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}

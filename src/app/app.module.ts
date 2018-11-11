import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MoviesProvider } from '../providers/movies/movies';
import { GenerosPage } from '../pages/generos/generos';
import { PopularesPage } from '../pages/populares/populares';
import { LancamentoPage } from '../pages/lancamento/lancamento';
import { TabsPage } from '../pages/tabs/tabs';
import { PopularesPageModule } from '../pages/populares/populares.module';
import { GenerosPageModule } from '../pages/generos/generos.module';
import { LancamentoPageModule } from '../pages/lancamento/lancamento.module';
import { HttpClientModule } from '@angular/common/http';
import { FilmesalvoPageModule } from '../pages/filmesalvo/filmesalvo.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    PopularesPageModule,
    GenerosPageModule,
    LancamentoPageModule,
    HttpClientModule, 
    FilmesalvoPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GenerosPage,
    PopularesPage,
    LancamentoPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MoviesProvider
  ]
})
export class AppModule {}

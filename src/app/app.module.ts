import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { HttpClientModule } from '@angular/common/http';


import { environment } from 'src/environments/environment';
import { LoginComponent } from './pages/login/login.component';
import { DatosComponent } from './pages/datos/datos.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FIREBASE } from 'src/environments/firebase';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DatosComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp( FIREBASE.firebase ),
    AngularFireAuthModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

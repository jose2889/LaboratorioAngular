import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { QRCodeModule } from 'angular2-qrcode';
import { AppComponent } from './app.component';
import { CodigoqrComponent } from './components/codigoqr/codigoqr.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormulariosComponent } from './components/formularios/formularios.component';
import { appRouting } from './app.routes';
import { HomeComponent } from './components/home/home.component';
import { MaterialModule } from './material';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    CodigoqrComponent,
    FormulariosComponent,
    HomeComponent,
    NavbarComponent
    
  ],
  imports: [
    BrowserModule,
    QRCodeModule,
    FormsModule,
    appRouting, 
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

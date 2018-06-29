import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { QRCodeModule } from 'angular2-qrcode';
import { AppComponent } from './app.component';
import { CodigoqrComponent } from './components/codigoqr/codigoqr.component';
import { FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms';
import { FormulariosComponent } from './components/formularios/formularios.component';
import { appRouting } from './app.routes';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    CodigoqrComponent,
    FormulariosComponent,
    HomeComponent
    
  ],
  imports: [
    BrowserModule,
    QRCodeModule,
    FormsModule,
    appRouting, 
    ReactiveFormsModule, 
    NgForm
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

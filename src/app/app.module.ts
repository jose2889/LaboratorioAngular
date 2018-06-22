import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { QRCodeModule } from 'angular2-qrcode';
import { AppComponent } from './app.component';
import { CodigoqrComponent } from './components/codigoqr/codigoqr.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CodigoqrComponent
  ],
  imports: [
    BrowserModule,
    QRCodeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

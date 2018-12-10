import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { QRCodeModule } from 'angular2-qrcode';
// Import ngx-barcode module
import { NgxBarcodeModule } from 'ngx-barcode';

import { AppComponent } from './app.component';
import { CodigoqrComponent } from './components/codigoqr/codigoqr.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormulariosComponent } from './components/formularios/formularios.component';
import { appRouting } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { MaterialModule } from './material';
import { NavbarComponent } from './navbar/navbar.component';
import { TableMaterialComponent } from './components/table-material/table-material.component';
import { UserService } from './services/user.service';
import { CodidoBarraComponent } from './components/codido-barra/codido-barra.component';
import { HtmlToImgComponent } from './components/html-to-img/html-to-img.component';
import { ValidarRutComponent } from './components/validar-rut/validar-rut.component';




@NgModule({
  declarations: [
    AppComponent,
    CodigoqrComponent,
    FormulariosComponent,
    HomeComponent,
    NavbarComponent,
    TableMaterialComponent,
    CodidoBarraComponent,
    HtmlToImgComponent,
    ValidarRutComponent
    
    
  ],
  imports: [
    BrowserModule,
    QRCodeModule,
    NgxBarcodeModule,
    FormsModule,
    appRouting, 
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
    

  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

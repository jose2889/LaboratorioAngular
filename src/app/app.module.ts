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
import { BlagTabComponent } from './components/blag-tab/blag-tab.component';
import { ListarComponent } from './components/blag-tab/listar/listar.component';
import { IngresarComponent } from './components/blag-tab/ingresar/ingresar.component';
import { EliminarComponent } from './components/blag-tab/eliminar/eliminar.component';
import { FotosComponent } from './components/fotos/fotos.component';
import { CargaComponent } from './components/carga/carga.component';
import { CargaImagenesService } from './services/carga-imagenes.service';
import { NgHttpLoaderModule } from 'ng-http-loader/ng-http-loader.module';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import {NgxMaskModule} from 'ngx-mask'
// Firebase

import { AngularFirestoreModule } from 'angularfire2/firestore';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { NgDropFilesDirective } from './directives/ng-drop-files.directive';
import { CKEditorModule } from 'ng2-ckeditor';
import { MatTabsModule } from '@angular/material';

import { EditorModule } from '@tinymce/tinymce-angular';
import { OrderModule } from 'ngx-order-pipe';


import { AngularSplitModule } from 'angular-split';
import { TableroComponent } from './components/tablero/tablero.component';
import { CrudPrimengComponent } from './components/crud-primeng/crud-primeng.component';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {CarouselModule} from 'primeng/carousel';

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
    ValidarRutComponent,
    BlagTabComponent,
    ListarComponent,
    IngresarComponent,
    EliminarComponent,
    FotosComponent,
    CargaComponent,
    NgDropFilesDirective,
    TableroComponent,
    CrudPrimengComponent
  ],
  imports: [
    BrowserModule,
    QRCodeModule,
    NgxBarcodeModule,
    CKEditorModule,
    OrderModule,
    MatTabsModule,
    AngularSplitModule.forRoot(),
    EditorModule,
    FormsModule,
    appRouting,
    NgxMaskModule.forRoot(),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ToastModule.forRoot(),
    NgHttpLoaderModule,
    ButtonModule,
    CardModule,
    CarouselModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
   
  ],
  providers: [UserService, CargaImagenesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

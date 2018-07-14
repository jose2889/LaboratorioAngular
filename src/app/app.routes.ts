
import { RouterModule, Routes } from '@angular/router';
import { FormulariosComponent } from './components/formularios/formularios.component';
import { HomeComponent } from './components/home/home.component';
import { CodigoqrComponent } from './components/codigoqr/codigoqr.component';
import { TableMaterialComponent } from './components/table-material/table-material.component';
import { CodidoBarraComponent } from './components/codido-barra/codido-barra.component';
import { HtmlToImgComponent } from './components/html-to-img/html-to-img.component';


const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'formulario', component: FormulariosComponent },
    { path: 'table', component: TableMaterialComponent },
    { path: 'barra', component: CodidoBarraComponent },
    { path: 'qr', component: CodigoqrComponent },
    { path: 'htmltoimg', component: HtmlToImgComponent },
    { path: '**', pathMatch:'full', redirectTo: 'home' }
];

export const appRouting = RouterModule.forRoot(routes);
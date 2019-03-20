
import { RouterModule, Routes } from '@angular/router';
import { FormulariosComponent } from './components/formularios/formularios.component';
import { HomeComponent } from './components/home/home.component';
import { CodigoqrComponent } from './components/codigoqr/codigoqr.component';
import { TableMaterialComponent } from './components/table-material/table-material.component';
import { CodidoBarraComponent } from './components/codido-barra/codido-barra.component';
import { HtmlToImgComponent } from './components/html-to-img/html-to-img.component';
import { ValidarRutComponent } from './components/validar-rut/validar-rut.component';
import { BlagTabComponent } from './components/blag-tab/blag-tab.component';
import { ListarComponent } from './components/blag-tab/listar/listar.component';
import { IngresarComponent } from './components/blag-tab/ingresar/ingresar.component';
import { EliminarComponent } from './components/blag-tab/eliminar/eliminar.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'blog', component: BlagTabComponent,  children:[
        {path: 'listar', component: ListarComponent},
        {path: 'ingresar', component: IngresarComponent},
        {path: 'eliminar', component: EliminarComponent}
        
    ] },
    { path: 'formulario', component: FormulariosComponent },
    { path: 'table', component: TableMaterialComponent },
    { path: 'barra', component: CodidoBarraComponent },
    { path: 'qr', component: CodigoqrComponent },
    { path: 'htmltoimg', component: HtmlToImgComponent },
    { path: 'validar-rut', component: ValidarRutComponent },
    { path: '**', pathMatch:'full', redirectTo: 'home' }
];

export const appRouting = RouterModule.forRoot(routes);
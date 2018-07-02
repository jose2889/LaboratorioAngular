
import { RouterModule, Routes } from '@angular/router';
import { FormulariosComponent } from './components/formularios/formularios.component';
import { HomeComponent } from './components/home/home.component';
import { CodigoqrComponent } from './components/codigoqr/codigoqr.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'formulario', component: FormulariosComponent },
    { path: 'qr', component: CodigoqrComponent },
    { path: '**', pathMatch:'full', redirectTo: 'home' }
];

export const appRouting = RouterModule.forRoot(routes);
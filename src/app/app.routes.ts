import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Landing } from './components/landing/landing';
import { Ej01clase } from './components/ej01clase/ej01clase';
import { SaludoEnrutado } from './components/saludoEnrutado/saludoEnrutado';
import { RxJS } from './components/rxjs/rxjs';
import { Padre } from './components/padre/padre';

// aquí añadimos nombres y asignamos componento de las rutas (p.e.: localhost:4200/home
export const routes: Routes = [
    {path: 'home', component: Home},
    {path: 'landing', component: Landing},
    {path: 'ej01', component: Ej01clase},
    {path: 'saludo_enrutado', component: SaludoEnrutado},
    {path: 'saludo_enrutado/:nombre', component: SaludoEnrutado},
    {path: 'rxjs', component: RxJS},
    {path: 'padre', component: Padre},

    {path: '', component: Home}, // ruta por defecto
    {path: '**', redirectTo: 'home'}, // redirigir cualquier otra ruta a home
];

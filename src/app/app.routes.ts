import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Landing } from './components/landing/landing';
import { Ej01clase } from './components/ej01clase/ej01clase';

// aquí añadimos nombres y asignamos componento de las rutas (p.e.: localhost:4200/home
export const routes: Routes = [
    {path: 'home', component: Home},
    {path: 'landing', component: Landing},
    {path: 'ej01', component: Ej01clase}
];

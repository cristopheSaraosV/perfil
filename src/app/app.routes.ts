import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { SobreMi } from './pages/sobre-mi/sobre-mi';
import { Experiencia } from './pages/experiencia/experiencia';
import { Skills } from './pages/skills/skills';
import { Contacto } from './pages/contacto/contacto';

export const routes: Routes = [
    {path:'', component:Home},
    {path:'sobre-mi', component:SobreMi},
    {path:'experiencia', component:Experiencia},
    {path:'skills', component:Skills},
    {path:'contacto', component:Contacto},
    {path:'**', redirectTo:''},
];

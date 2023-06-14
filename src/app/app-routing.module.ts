import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreMiComponent } from './pages/sobre-mi/sobre-mi.component';
import { FormacionComponent } from './pages/formacion/formacion.component';
import { ExperienciaProfesionalComponent } from './pages/experiencia-profesional/experiencia-profesional.component';
import { OtraInformacionComponent } from './pages/otra-informacion/otra-informacion.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
{//Ruta para raíz
  path:'',
  pathMatch: 'full',
  redirectTo:'dashboard/sobreMi'
},
{//Ruta para dashboard
  path:'dashboard',
  component: DashboardComponent,
  children:[
    {//Ruta para Sobre mi
      path:'sobreMi',
      component:SobreMiComponent
    },
    {//Ruta para Formación
      path:'formacion',
      component:FormacionComponent
    },
    {//Ruta para Experiencia Profesional
      path:'experienciaProfesional',
      component:ExperienciaProfesionalComponent
    },
    {//Ruta para Otra Información
      path:'otraInformacion',
      component:OtraInformacionComponent
    }
  ]
},
{//Ruta para Not Found
  path:'**',
  component:NotFoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

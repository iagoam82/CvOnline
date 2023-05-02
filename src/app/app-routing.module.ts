import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreMiComponent } from './pages/sobre-mi/sobre-mi.component';
import { FormacionAcademicaComponent } from './pages/formacion-academica/formacion-academica.component';
import { ExperienciaProfesionalComponent } from './pages/experiencia-profesional/experiencia-profesional.component';
import { FormacionComplementariaComponent } from './pages/formacion-complementaria/formacion-complementaria.component';
import { OtraInformacionComponent } from './pages/otra-informacion/otra-informacion.component';
import { HabilidadesComponent } from './pages/habilidades/habilidades.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
{//Ruta para raíz
  path:'',
  pathMatch: 'full',
  redirectTo:'sobreMi'
},
{//Ruta para Sobre mi
  path:'sobreMi',
  component:SobreMiComponent
},
{//Ruta para habilidades
  path:'habilidades',
  component:HabilidadesComponent
},
{//Ruta para Formación Académica
  path:'formacionAcademica',
  component:FormacionAcademicaComponent
},
{//Ruta para Experiencia Profesional
  path:'experienciaProfesional',
  component:ExperienciaProfesionalComponent
},
{//Ruta para Formación Complementaria
  path:'formacionComplementaria',
  component:FormacionComplementariaComponent
},
{//Ruta para Otra Información
  path:'otraInformacion',
  component:OtraInformacionComponent
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

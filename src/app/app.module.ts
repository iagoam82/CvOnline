import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ExperienciaProfesionalComponent } from './pages/experiencia-profesional/experiencia-profesional.component';
import { FormacionAcademicaComponent } from './pages/formacion-academica/formacion-academica.component';
import { FormacionComplementariaComponent } from './pages/formacion-complementaria/formacion-complementaria.component'; 
import { HabilidadesComponent } from './pages/habilidades/habilidades.component';
import { OtraInformacionComponent } from './pages/otra-informacion/otra-informacion.component';
import { SobreMiComponent } from './pages/sobre-mi/sobre-mi.component';
import { BloqueExperienciaProfesionalComponent } from './components/bloque-experiencia-profesional/bloque-experiencia-profesional.component';
import { BloqueFormacionAcademicaComponent } from './components/bloque-formacion-academica/bloque-formacion-academica.component';
import { BloqueFormacionComplementariaComponent } from './components/bloque-formacion-complementaria/bloque-formacion-complementaria.component';

@NgModule({
  declarations: [
    AppComponent,

    ExperienciaProfesionalComponent,
    FormacionAcademicaComponent,
    FormacionComplementariaComponent,
    HabilidadesComponent,
    OtraInformacionComponent,
    SobreMiComponent,
    BloqueExperienciaProfesionalComponent,
    BloqueFormacionAcademicaComponent,
    BloqueFormacionComplementariaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

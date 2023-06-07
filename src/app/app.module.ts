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
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { NavegadorComponent } from './components/navegador/navegador.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    ExperienciaProfesionalComponent,
    FormacionAcademicaComponent,
    FormacionComplementariaComponent,
    HabilidadesComponent,
    OtraInformacionComponent,
    SobreMiComponent,
    NotFoundComponent,
    NavegadorComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

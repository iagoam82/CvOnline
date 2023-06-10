//MODULOS
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//COMPONENTES
import { AppComponent } from './app.component';
import { ExperienciaProfesionalComponent } from './pages/experiencia-profesional/experiencia-profesional.component';
import { FormacionComponent } from './pages/formacion/formacion.component';
import { OtraInformacionComponent } from './pages/otra-informacion/otra-informacion.component';
import { SobreMiComponent } from './pages/sobre-mi/sobre-mi.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NavegadorComponent } from './components/navegador/navegador.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,

    ExperienciaProfesionalComponent,
    FormacionComponent,
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
    MatGridListModule,
    MatToolbarModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

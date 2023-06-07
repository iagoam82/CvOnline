import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.scss'],
  
})
export class SobreMiComponent {

  nombre: string='Iago Alonso Meijide';
  profesion: string='Desarrollador web full stack';
  sobreMi1: string="Soy una persona organizada y responsable, con ganas de seguir aprendiendo y desarrollándome."+
  "Me adapto con facilidad a los cambios, buscando la mejora y el crecimiento tanto personal como profesionalmente";
  sobreMi2: string="Tras casi 20 años trabajando en hostelería he reorientado mi futuro profesional hacia la informática."+
  "Actualmente busco un empleo que me permita seguir adquiriendo conocimientos con el fin"+
  "de crecer dentro de la empresa según sus necesidades.";

  constructor(private router:Router){}

  volverAInicio(): void{
    this.router.navigate(['/sobreMi'])
  }
}

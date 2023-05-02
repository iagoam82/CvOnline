import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experiencia-profesional',
  templateUrl: './experiencia-profesional.component.html',
  styleUrls: ['./experiencia-profesional.component.scss']
})
export class ExperienciaProfesionalComponent {

  constructor(private router:Router){}

  volverAInicio(){
    this.router.navigate(['sobreMi'])
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experiencia-profesional',
  templateUrl: './experiencia-profesional.component.html',
  styleUrls: ['./experiencia-profesional.component.scss']
})
export class ExperienciaProfesionalComponent {

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
  constructor(private router:Router){}

  volverAInicio(){
    this.router.navigate(['sobreMi'])
  }
}

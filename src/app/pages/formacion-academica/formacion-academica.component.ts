import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formacion-academica',
  templateUrl: './formacion-academica.component.html',
  styleUrls: ['./formacion-academica.component.scss']
})
export class FormacionAcademicaComponent {

  constructor(private router:Router){}

  volverAInicio(){
    this.router.navigate(['/sobreMi'])
  }
}

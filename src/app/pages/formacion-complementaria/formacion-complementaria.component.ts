import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formacion-complementaria',
  templateUrl: './formacion-complementaria.component.html',
  styleUrls: ['./formacion-complementaria.component.scss']
})
export class FormacionComplementariaComponent {

  constructor(private router:Router){}

  volverAInicio(){
    this.router.navigate(['/sobreMi'])
  }
}

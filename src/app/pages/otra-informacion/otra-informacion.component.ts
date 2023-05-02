import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otra-informacion',
  templateUrl: './otra-informacion.component.html',
  styleUrls: ['./otra-informacion.component.scss']
})
export class OtraInformacionComponent {

  constructor(private router:Router){}

  volverAInicio(){
    this.router.navigate(['/sobreMi'])
  }
}

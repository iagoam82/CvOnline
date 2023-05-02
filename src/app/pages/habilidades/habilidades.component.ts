import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.scss']
})
export class HabilidadesComponent {

  constructor(private router:Router){}

  volverAInicio(){
    this.router.navigate(['/sobreMi'])
  }
}

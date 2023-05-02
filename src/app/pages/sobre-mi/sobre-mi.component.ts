import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.scss']
})
export class SobreMiComponent {

  constructor(private router:Router){}

  volverAInicio(): void{
    this.router.navigate(['/sobreMi'])
  }
}

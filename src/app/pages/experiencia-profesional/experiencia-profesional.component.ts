import { Component, OnInit } from '@angular/core';
import { ExperienciaProfesionalService } from './services/experiencia-profesional.service';
import { ExperienciaProfesional } from './models/experienciaProfesional.interface';

@Component({
  selector: 'app-experiencia-profesional',
  templateUrl: './experiencia-profesional.component.html',
  styleUrls: ['./experiencia-profesional.component.scss']
})
export class ExperienciaProfesionalComponent implements OnInit{

  listaExperienciaProfesional: ExperienciaProfesional[]=[];

  constructor(private experienciaProfesionalService: ExperienciaProfesionalService){}

  ngOnInit(): void {
    this.listaExperienciaProfesional = this.experienciaProfesionalService.obtenerExperienciaProfesional()
    .sort((a: ExperienciaProfesional, b: ExperienciaProfesional) => b.id - a.id);
  }
  
  
}

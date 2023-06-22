import { Component, OnInit } from '@angular/core';
import { ExperienciaProfesionalService } from './services/experiencia-profesional.service';
import { ExperienciaProfesional } from './models/experienciaProfesional.interface';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-experiencia-profesional',
  templateUrl: './experiencia-profesional.component.html',
  styleUrls: ['./experiencia-profesional.component.scss']
})
export class ExperienciaProfesionalComponent implements OnInit{

  listaExperienciaProfesional: ExperienciaProfesional[]=[];
  public colSize= 3;
  public isMobile: boolean = false;

  constructor(
    private experienciaProfesionalService: ExperienciaProfesionalService,
    breackpointObserver: BreakpointObserver
    ){
      breackpointObserver.observe([
        Breakpoints.Handset
      ]).subscribe(result=>{
        this.isMobile=result.matches;
          if(this.isMobile){
            this.colSize=1;
          }
          else{
            this.colSize=3;
          }
      });
    }

  ngOnInit(): void {
    this.listaExperienciaProfesional = this.experienciaProfesionalService.obtenerExperienciaProfesional()
    .sort((a: ExperienciaProfesional, b: ExperienciaProfesional) => b.id - a.id);
  }
}

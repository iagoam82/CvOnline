import { Component, OnInit } from '@angular/core';
import { FormacionAcademicaService } from './services/formacion-academica.service';
import { FormacionComplementariaService } from './services/formacion-complementaria.service';
import { FormacionAcademica } from './models/formacionAcademica.interface';
import { FormacionComplementaria } from './models/formacionComplementaria.interface';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.scss']
})
export class FormacionComponent implements OnInit {
    
  listaFormacionAcademica: FormacionAcademica[]=[] ;
  listaFormacionComplementaria:  FormacionComplementaria[]=[];
  public colSize=2;
  public isMobile: boolean = false;

  constructor(
    private formacionAcademicaService: FormacionAcademicaService,
    private fomacionComplementariaService: FormacionComplementariaService,
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
          this.colSize=2;
        }
    });
  }

  ngOnInit(): void {
    this.listaFormacionAcademica = this.formacionAcademicaService.obtenerFormacionAcademica()
    .sort((a: FormacionAcademica, b: FormacionAcademica) => b.id - a.id)

    this.listaFormacionComplementaria = this.fomacionComplementariaService.obtenerFormacionComplementaria()
    .sort((a: FormacionComplementaria, b: FormacionComplementaria) => b.id - a.id);
  }
}

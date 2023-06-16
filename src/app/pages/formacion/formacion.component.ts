import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormacionAcademicaService } from './services/formacion-academica.service';
import { FormacionComplementariaService } from './services/formacion-complementaria.service';
import { FormacionAcademica } from './models/formacionAcademica.interface';
import { FormacionComplementaria } from './models/formacionComplementaria.interface';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.scss']
})
export class FormacionComponent implements OnInit {
    
  listaFormacionAcademica: FormacionAcademica[]=[] ;
  listaFormacionComplementaria:  FormacionComplementaria[]=[];

  constructor(
    private formacionAcademicaService: FormacionAcademicaService,
    private fomacionComplementariaService: FormacionComplementariaService
  ){}

  ngOnInit(): void {
    this.listaFormacionAcademica = this.formacionAcademicaService.obtenerFormacionAcademica()
    .sort((a: FormacionAcademica, b: FormacionAcademica) => b.id - a.id)

    this.listaFormacionComplementaria = this.fomacionComplementariaService.obtenerFormacionComplementaria()
    .sort((a: FormacionComplementaria, b: FormacionComplementaria) => b.id - a.id);
  }
}

import { Injectable } from '@angular/core';
import { FORMACION_ACADEMICA } from '../mocks/formacionAcademica.mock';
import { FormacionAcademica } from '../models/formacionAcademica.interface';

@Injectable({
  providedIn: 'root'
})
export class FormacionAcademicaService {

  constructor() { }
  obtenerFormacionAcademica():FormacionAcademica[]{
    return FORMACION_ACADEMICA
  }
}

import { Injectable } from '@angular/core';
import { FormacionComplementaria } from '../models/formacionComplementaria.interface';
import { FORMACION_COMPLEMENTARIA } from '../mocks/formacionComplementaria.mock';

@Injectable({
  providedIn: 'root'
})
export class FormacionComplementariaService {

  constructor() { }

  obtenerFormacionComplementaria():FormacionComplementaria[]{
    return FORMACION_COMPLEMENTARIA
  }
}

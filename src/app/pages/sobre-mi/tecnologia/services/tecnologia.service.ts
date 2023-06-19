import { Injectable } from '@angular/core';
import { TECNOLOGIAS } from '../mocks/tecnologia.mock';
import { Tecnologia } from '../models/tecnologia.interface';

@Injectable({
  providedIn: 'root'
})
export class TecnologiaService {

  constructor() { }

  //Metodo para obtener las tecnologias
  obtenerTecnologias():Tecnologia[]{
    return TECNOLOGIAS;
  }
  
}

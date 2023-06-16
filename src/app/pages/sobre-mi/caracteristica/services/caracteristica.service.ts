import { Injectable } from '@angular/core';
import { CARACTERISTICAS } from '../mocks/caracteristica.mock';
import { Caracteristica } from '../models/caracteristica.interface';

@Injectable({
  providedIn: 'root'
})
export class CaracteristicaService {

  constructor() { }

  //Metodo para obtener las caracteristicas
  obtenerCaracteristicas():Caracteristica[]{
    return CARACTERISTICAS
  }
}

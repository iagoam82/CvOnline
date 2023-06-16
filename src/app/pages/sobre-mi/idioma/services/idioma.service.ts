import { Injectable } from '@angular/core';
import { IDIOMAS } from '../mocks/idioma.mock';
import { Idioma } from '../models/idioma.interface';

@Injectable({
  providedIn: 'root'
})
export class IdiomaService {

  constructor() { }

  //Metodo para obtener los idiomas
  obtenerIdiomas():Idioma[]{
    return IDIOMAS;
  }
}

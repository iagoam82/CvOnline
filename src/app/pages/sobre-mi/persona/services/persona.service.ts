import { Injectable } from '@angular/core';
import { Persona } from '../models/persona.interface';
import { PERSONAS } from '../mocks/persona.mock';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  constructor() { }
  //Metodo para obtener los datos de la persona
  obtenerPersonas(): Persona[]{
    return PERSONAS;
  }
}

import { Injectable } from '@angular/core';
import { EXPERIENCIA_PROFESIONAL } from '../mocks/experienciaProfesional.mock';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaProfesionalService {

  constructor() { }

  obtenerExperienciaProfesional() {
    return EXPERIENCIA_PROFESIONAL
  }
}

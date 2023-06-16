import { TestBed } from '@angular/core/testing';

import { ExperienciaProfesionalService } from './experiencia-profesional.service';

describe('ExperienciaProfesionalService', () => {
  let service: ExperienciaProfesionalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExperienciaProfesionalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

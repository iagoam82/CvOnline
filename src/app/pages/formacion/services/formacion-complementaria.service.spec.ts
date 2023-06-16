import { TestBed } from '@angular/core/testing';

import { FormacionComplementariaService } from './formacion-complementaria.service';

describe('FormacionComplementariaService', () => {
  let service: FormacionComplementariaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormacionComplementariaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloqueFormacionComplementariaComponent } from './bloque-formacion-complementaria.component';

describe('BloqueFormacionComplementariaComponent', () => {
  let component: BloqueFormacionComplementariaComponent;
  let fixture: ComponentFixture<BloqueFormacionComplementariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloqueFormacionComplementariaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloqueFormacionComplementariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloqueExperienciaProfesionalComponent } from './bloque-experiencia-profesional.component';

describe('BloqueExperienciaProfesionalComponent', () => {
  let component: BloqueExperienciaProfesionalComponent;
  let fixture: ComponentFixture<BloqueExperienciaProfesionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloqueExperienciaProfesionalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloqueExperienciaProfesionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

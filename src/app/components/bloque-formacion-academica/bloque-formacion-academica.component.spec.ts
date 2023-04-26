import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloqueFormacionAcademicaComponent } from './bloque-formacion-academica.component';

describe('BloqueFormacionAcademicaComponent', () => {
  let component: BloqueFormacionAcademicaComponent;
  let fixture: ComponentFixture<BloqueFormacionAcademicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloqueFormacionAcademicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloqueFormacionAcademicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

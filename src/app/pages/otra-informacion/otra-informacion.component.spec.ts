import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtraInformacionComponent } from './otra-informacion.component';

describe('OtraInformacionComponent', () => {
  let component: OtraInformacionComponent;
  let fixture: ComponentFixture<OtraInformacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtraInformacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtraInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

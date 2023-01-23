import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroeDetalleComponent } from './heroe-detalle.component';

describe('HeroeDetalleComponent', () => {
  let component: HeroeDetalleComponent;
  let fixture: ComponentFixture<HeroeDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroeDetalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroeDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

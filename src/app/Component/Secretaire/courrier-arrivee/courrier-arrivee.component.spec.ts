import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourrierArriveeComponent } from './courrier-arrivee.component';

describe('CourrierArriveeComponent', () => {
  let component: CourrierArriveeComponent;
  let fixture: ComponentFixture<CourrierArriveeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourrierArriveeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourrierArriveeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

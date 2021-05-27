import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourrierDepartComponent } from './courrier-depart.component';

describe('CourrierDepartComponent', () => {
  let component: CourrierDepartComponent;
  let fixture: ComponentFixture<CourrierDepartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourrierDepartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourrierDepartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

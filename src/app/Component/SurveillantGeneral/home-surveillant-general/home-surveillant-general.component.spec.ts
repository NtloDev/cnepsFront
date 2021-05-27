import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSurveillantGeneralComponent } from './home-surveillant-general.component';

describe('HomeSurveillantGeneralComponent', () => {
  let component: HomeSurveillantGeneralComponent;
  let fixture: ComponentFixture<HomeSurveillantGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSurveillantGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSurveillantGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

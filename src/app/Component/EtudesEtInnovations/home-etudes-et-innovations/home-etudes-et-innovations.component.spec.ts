import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEtudesEtInnovationsComponent } from './home-etudes-et-innovations.component';

describe('HomeEtudesEtInnovationsComponent', () => {
  let component: HomeEtudesEtInnovationsComponent;
  let fixture: ComponentFixture<HomeEtudesEtInnovationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeEtudesEtInnovationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeEtudesEtInnovationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

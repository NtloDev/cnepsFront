import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImputerComponent } from './imputer.component';

describe('ImputerComponent', () => {
  let component: ImputerComponent;
  let fixture: ComponentFixture<ImputerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImputerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImputerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarSecretaireComponent } from './navbar-secretaire.component';

describe('NavbarSecretaireComponent', () => {
  let component: NavbarSecretaireComponent;
  let fixture: ComponentFixture<NavbarSecretaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarSecretaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarSecretaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

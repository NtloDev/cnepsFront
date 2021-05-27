import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfViewSecretaireComponent } from './pdf-view-secretaire.component';

describe('PdfViewSecretaireComponent', () => {
  let component: PdfViewSecretaireComponent;
  let fixture: ComponentFixture<PdfViewSecretaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfViewSecretaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfViewSecretaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

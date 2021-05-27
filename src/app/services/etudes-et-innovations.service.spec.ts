import { TestBed } from '@angular/core/testing';

import { EtudesEtInnovationsService } from './etudes-et-innovations.service';

describe('EtudesEtInnovationsService', () => {
  let service: EtudesEtInnovationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtudesEtInnovationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { AuhenticationService } from './auhentication.service';

describe('AuhenticationService', () => {
  let service: AuhenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuhenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

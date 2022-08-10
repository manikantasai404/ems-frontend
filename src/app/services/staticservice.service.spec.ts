import { TestBed } from '@angular/core/testing';

import { StaticserviceService } from './staticservice.service';

describe('StaticserviceService', () => {
  let service: StaticserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaticserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

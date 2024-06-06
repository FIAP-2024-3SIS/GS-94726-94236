import { TestBed } from '@angular/core/testing';

import { OceanApiService } from './ocean/ocean-api.service';

describe('OceanApiService', () => {
  let service: OceanApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OceanApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

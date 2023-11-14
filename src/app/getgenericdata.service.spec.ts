import { TestBed } from '@angular/core/testing';

import { GetgenericdataService } from './getgenericdata.service';

describe('GetgenericdataService', () => {
  let service: GetgenericdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetgenericdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

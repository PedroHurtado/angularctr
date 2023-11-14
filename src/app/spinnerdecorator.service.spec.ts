import { TestBed } from '@angular/core/testing';

import { SpinnerdecoratorService } from './spinnerdecorator.service';

describe('SpinnerdecoratorService', () => {
  let service: SpinnerdecoratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpinnerdecoratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

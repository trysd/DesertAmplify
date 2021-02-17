import { TestBed } from '@angular/core/testing';

import { TestCheckService } from './test-check.service';

describe('TestCheckService', () => {
  let service: TestCheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestCheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

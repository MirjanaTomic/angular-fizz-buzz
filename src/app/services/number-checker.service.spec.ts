import { TestBed } from '@angular/core/testing';

import { NumberCheckerService } from './number-checker.service';

describe('NumberCheckerService', () => {
  let service: NumberCheckerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumberCheckerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

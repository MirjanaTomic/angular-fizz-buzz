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

  it('should create a source array of 100 elements', () => {
    spyOn(service, 'createSourceArr').and.callThrough();
    expect(service.sourceArr.length).toBe(100);
  });

  it('should generate the observable with correct values', (done: DoneFn) => {
    service.numbersArr$.subscribe((numbers) => {
      expect(numbers.length).toEqual(100);
      expect(numbers[2]).toEqual('Fizz');
      expect(numbers[4]).toEqual('Buzz');
      expect(numbers[14]).toEqual('FizzBuzz');
      done();
    });
  });
});

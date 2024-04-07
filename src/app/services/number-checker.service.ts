import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NumberCheckerService {
  arrLenght = 100;
  sourceArr$ = of(
    Array.from({ length: this.arrLenght }, (item, index) => index + 1)
  );

  numbersArr$: Observable<string[]> = this.sourceArr$.pipe(
    map((numArr) => {
      return numArr.map((item) => {
        let result = '';

        result += item % 3 === 0 ? 'Fizz' : '';
        result += item % 5 === 0 ? 'Buzz' : '';

        return result || item.toString();
      });
    })
  );

  constructor() {}
}

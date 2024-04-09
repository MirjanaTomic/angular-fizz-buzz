import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NumberCheckerService {
  arrLenght = 100;
  private _sourceArr = this.createSourceArr(this.arrLenght);
  get sourceArr() {
    return this._sourceArr;
  }

  createSourceArr(length: number): number[] {
    return Array.from({ length: length }, (item, index) => index + 1);
  }

  isFizzOrBuzz(arr: number[]): string[] {
    return arr.map((item) => {
      let result = '';

      result += item % 3 === 0 ? 'Fizz' : '';
      result += item % 5 === 0 ? 'Buzz' : '';

      return result || item.toString();
    });
  }

  numbersArr$: Observable<string[]> = of(this.isFizzOrBuzz(this.sourceArr));

  constructor() {}
}

import { Component } from '@angular/core';
import { NumberCheckerService } from '../../services/number-checker.service';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-number-list',
  standalone: true,
  imports: [NgIf, NgFor, AsyncPipe],
  templateUrl: './number-list.component.html',
  styleUrl: './number-list.component.scss',
})
export class NumberListComponent {
  numbersArr$ = this.numberChecker.numbersArr$;

  constructor(private numberChecker: NumberCheckerService) {}
}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberListComponent } from './number-list.component';

describe('NumberListComponent', () => {
  let component: NumberListComponent;
  let fixture: ComponentFixture<NumberListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumberListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NumberListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render numbersArr$ correctly', () => {
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    const listItems = compiled.querySelectorAll('.number-list li');

    expect(listItems.length).toBe(100);
    expect(listItems[0].textContent).toBe('1');
    expect(listItems[2].textContent).toBe('Fizz');
    expect(listItems[4].textContent).toBe('Buzz');
    expect(listItems[14].textContent).toBe('FizzBuzz');
  });
});

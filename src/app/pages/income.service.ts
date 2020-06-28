import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IncomeService {

  private budget = new BehaviorSubject<number>(0);
  public share = this.budget.asObservable()

  constructor() { }

  getValue(value) {
    this.budget.next(value);
  }
}

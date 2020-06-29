import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class IncomeService {

  /// Income data
  private budget = new BehaviorSubject<number>(0);
  public share = this.budget.asObservable();


  /// Income List
  private IncomeList = new BehaviorSubject<any>(
    [
      {
        listNumber: "#",
        date: "Date",
        source: "Source",
        amount: 0,

      },
    ]);

  public updateIncomeList = this.IncomeList.asObservable();

  constructor() { }

  ///Get Income value 
  getIncome(value) {
    this.budget.next(value);
  }


  /// Get Income list
  getIncomeLIst(list) {
    this.IncomeList.next(list)
  }

};



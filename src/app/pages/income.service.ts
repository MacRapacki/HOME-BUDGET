import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IncomeService {

  /// INCOME DATA
  private budget = new BehaviorSubject<number>(0);
  public share = this.budget.asObservable();


  /// FOOD DATA
  private totalFoodSpent = new BehaviorSubject<number>(0);
  public shareFoodSpent = this.totalFoodSpent.asObservable();

  /// Income List
  // private IncomeList = new BehaviorSubject<any>(
  //   [
  //     {
  //       listNumber: "#",
  //       date: "Date",
  //       source: "Source",
  //       amount: 0,

  //     },
  //   ]);

  // public updateIncomeList = this.IncomeList.asObservable();


  constructor() { }


  ///GET INCOME DATA
  getIncome(value) {
    this.budget.next(value);
  }


  ///GET FOOD DATA
  getFoodSpent(value) {
    this.totalFoodSpent.next(value);
  }

  /// Get Income list
  // getIncomeLIst(list) {
  //   this.IncomeList.next(list);
  // }

  ///form
};



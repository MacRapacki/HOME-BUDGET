import { Component, OnInit } from '@angular/core';
import { IncomeService } from '../pages/income.service';


@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.scss']
})
export class StatusBarComponent implements OnInit {

  budgetProc: number = 100;
  leftProc: number = 50;
  expensesProc: number = 50;

  totalBudget: number = 0;
  totalExpenses: number = 0;



  constructor(private IncomeService: IncomeService) {

  }

  ngOnInit(): void {
    this.IncomeService.share.subscribe(x => this.totalBudget = x);
    this.IncomeService.shareFoodSpent.subscribe(x => this.totalExpenses = x);
    this.getTotalIncome();
    this.getFoodSpent();
  }


  /// GET TOTAL BUDGET FROM STORAGE
  getTotalIncome() {
    if (localStorage.getItem('totalIncome') === null) {
      this.totalBudget = 0;
    }

    else {
      this.totalBudget = JSON.parse(localStorage.getItem('totalIncome'))
    }
  };


  ///GET TOTAL FOOD SPENT
  getFoodSpent() {
    if (localStorage.getItem('foodTotalSpent') === null) {
      this.totalExpenses = 0;
    }

    else {
      this.totalExpenses = JSON.parse(localStorage.getItem('foodTotalSpent'))
    }
  }


  ///MONEY LEFT COUNTER
  moneyLeftCounter() {
    return this.totalBudget - this.totalExpenses
  }


  ///PRECENT COUNTER
  leftPrecentCounter() {
    const value = ((this.totalBudget - this.totalExpenses) * 100 / this.totalBudget).toFixed(1);
    return isNaN(parseInt(value)) ? 0 : value;
  }

  expensesPrecentCounter() {
    const value = (this.totalExpenses * 100 / this.totalBudget).toFixed(1);
    return isNaN(parseInt(value)) ? 0 : value;
  }
}



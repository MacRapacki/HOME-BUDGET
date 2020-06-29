import { Component, OnInit } from '@angular/core';
import { IncomeService } from '../pages/income.service';


@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.scss']
})
export class StatusBarComponent implements OnInit {

  budgetProc: number = 100;
  leftProc: number = 20;
  expensesProc: number = 50;

  totalBudget: number = 0;

  constructor(private IncomeService: IncomeService) {

  }

  ngOnInit(): void {
    this.IncomeService.share.subscribe(x => this.totalBudget = x);
    this.getTotalIncome();
  }

  /// get totalBudget from storage
  getTotalIncome() {
    if (localStorage.getItem('totalIncome') === null) {
      this.totalBudget = 1;
    }

    else {
      this.totalBudget = JSON.parse(localStorage.getItem('totalIncome'))
    }
  };


}



import { Component, OnInit, } from '@angular/core';
import { IncomeService } from '../income.service';




@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss'],
})
export class IncomeComponent implements OnInit {

  arr = [
    {
      listNumber: "#",
      date: "Date",
      source: "Source",
      amount: 0,

    },
  ];


  /// Form data
  date = new Date().toLocaleDateString('en-CA');
  sourceName: string = "";
  incomeAmount: number = 0;

  /// Total income
  totalIncome: number = 0;


  constructor(private IncomeService: IncomeService) { }


  ngOnInit(): void {
    this.IncomeService.updateIncomeList.subscribe(x => this.arr = x)
  }


  /// show form on click
  showForm() {
    document.querySelector(".form").classList.toggle("active")
  }


  /// add incom info to list and update array
  public addItem(e) {
    e.preventDefault();
    const newArr = [...this.arr]
    if (this.sourceName === "" || this.incomeAmount === 0) { return alert('Fill the form.') };

    const listItem = {
      listNumber: "#",
      date: this.date,
      source: this.sourceName,
      amount: this.incomeAmount,
    };

    newArr.push(listItem);
    /// reset form inputs
    this.sourceName = "";
    this.incomeAmount = 0;

    /// total income count loop
    this.totalIncome = 0;
    for (let i = 1; i < newArr.length; i++) {
      this.totalIncome += newArr[i].amount
    };

    this.arr = newArr;

    /// send total income and new aray service
    this.IncomeService.getIncome(this.totalIncome);
    this.IncomeService.getIncomeLIst(this.arr);

  }



}

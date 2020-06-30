import { Component, OnInit, } from '@angular/core';
import { IncomeService } from '../income.service';




@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss'],
})
export class IncomeComponent implements OnInit {

  arr = [];


  /// FORM DATA
  date = new Date().toLocaleDateString('en-CA');
  sourceName: string = "";
  incomeAmount: number = 0;


  /// TOTAL INCOME
  totalIncome: any = 0;


  constructor(private IncomeService: IncomeService) { }


  ngOnInit(): void {
    // this.IncomeService.updateIncomeList.subscribe(x => this.arr = x);
    this.getArrayList();
  }

  ///GET LIST FROM LOCAL STORAGE
  getArrayList() {
    if (localStorage.getItem('arrayList') === null) {
      this.arr = [
        {
          listNumber: "#",
          date: "Date",
          source: "Source",
          amount: 0,

        },
      ];
    }
    else {
      this.arr = JSON.parse(localStorage.getItem('arrayList'))
    }
  };


  /// "ADD+" BUTTON FUNCTION
  showForm() {
    document.querySelector(".form").classList.toggle("active")
  };


  /// SUBMIT FORM BUTTON FUNCTION
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

    /// send total income to service
    this.IncomeService.getIncome(this.totalIncome);


    /// add to local storage
    localStorage.setItem('arrayList', JSON.stringify(this.arr));
    localStorage.setItem('totalIncome', (this.totalIncome));

  }



}

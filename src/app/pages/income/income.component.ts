import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeComponent implements OnInit {

  arr = [
    {
      listNumber: "#",
      date: "Date",
      source: "Source",
      amount: "Amount",

    },
  ];

  date = new Date().toLocaleDateString('en-CA');
  sourceName: string = "";
  incomeAmount: any = 0

  constructor() { }

  ngOnInit(): void {
  }

  /// show form on click
  showForm() {
    document.querySelector(".form").classList.toggle("active")
  }

  ///add incom info to list and update array
  addItem(e) {
    e.preventDefault();

    if (this.sourceName === "" || this.incomeAmount === 0) { return alert('Fill the form.') };

    const listItem = {
      listNumber: "#",
      date: this.date,
      source: this.sourceName,
      amount: this.incomeAmount,
    };

    this.arr.push(listItem);




    this.sourceName = "";
    this.incomeAmount = 0

  }

}

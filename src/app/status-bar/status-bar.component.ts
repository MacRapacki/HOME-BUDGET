import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.scss']
})
export class StatusBarComponent implements OnInit {

  budgetProc: number = 88;
  leftProc: number = 20;
  expensesProc: number = 50;

  constructor() { }

  ngOnInit(): void {
  }



}



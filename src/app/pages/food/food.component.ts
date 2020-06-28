import { Component, OnInit } from '@angular/core';
import { SrvRecord } from 'dns';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {

  arr = [
    {
      listNumber: "#",
      date: "Date",
      shop: "Shop",
      item: "Item",
      price: "Price",

    },
  ];

  totalSpent: number = 0;


  date = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();
  shopName: string = "";
  itemName: string = "";
  priceValue: any = 0

  constructor() {


  }

  ngOnInit(): void {
  }

  showForm() {
    document.querySelector(".form").classList.toggle("active")
  }

  addItem(e) {
    e.preventDefault();

    if (this.date === "" || this.shopName === "" || this.itemName === "" || this.priceValue === 0) { return alert('Fill the form.') };

    const listItem = {
      listNumber: "#",
      date: this.date,
      shop: this.shopName,
      item: this.itemName,
      price: this.priceValue,
    };

    this.arr.push(listItem);

    this.totalSpent += this.priceValue


    this.shopName = "";
    this.itemName = "";
    this.priceValue = 0

  }

  todayDate() {
    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    return date
  }

}

import { Component, OnInit } from '@angular/core';
import { IncomeService } from '../income.service';


@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {

  arr = [];

  /// TOAL SPENT
  totalSpent: number = 0;

  /// FORM DATA
  date = new Date().toLocaleDateString('en-CA');
  shopName: string = "";
  itemName: string = "";
  priceValue: any = 0

  constructor(private IncomeService: IncomeService) { }


  ngOnInit(): void {
    this.getTotalSpent();
    this.getArrayList();
  }


  ///GET LIST FROM LOCAL STORAGE
  getArrayList() {
    if (localStorage.getItem('foodArray') === null) {
      this.arr = [
        {
          listNumber: "#",
          date: "Date",
          shop: "Shop",
          item: "Item",
          price: "Price",

        },
      ];
    }
    else {
      this.arr = JSON.parse(localStorage.getItem('foodArray'))
    }
  };


  ///GET LIST FROM LOCAL STORAGE
  getTotalSpent() {
    if (localStorage.getItem('foodTotalSpent') === null) {
      this.totalSpent = 0;
    }
    else {
      this.totalSpent = JSON.parse(localStorage.getItem('foodTotalSpent'))
    }
  };


  /// "ADD+" BUTTON FUNCTION
  showForm() {
    document.querySelector(".form").classList.toggle("active")
  }


  ///SUBMIT FORM BUTTON FUNCTION
  addItem(e) {
    e.preventDefault();

    if (this.shopName === "" || this.itemName === "" || this.priceValue === 0) { return alert('Fill the form.') };

    const listItem = {
      listNumber: "#",
      date: this.date,
      shop: this.shopName,
      item: this.itemName,
      price: this.priceValue,
    };

    this.arr.push(listItem);

    this.totalSpent += this.priceValue

    /// reset inputs
    this.shopName = "";
    this.itemName = "";
    this.priceValue = 0

    /// total income count loop
    this.totalSpent = 0;
    for (let i = 1; i < this.arr.length; i++) {
      this.totalSpent += this.arr[i].price
    };

    ///SEND TOTAL SPENT TO SERVICE
    this.IncomeService.getFoodSpent(this.totalSpent)

    /// SET DATA TO LOCAL STORAGE
    localStorage.setItem('foodArray', JSON.stringify(this.arr));
    localStorage.setItem('foodTotalSpent', JSON.stringify(this.totalSpent));

  }



}

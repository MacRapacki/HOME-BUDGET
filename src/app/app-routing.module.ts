import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodComponent } from './pages/food/food.component';
import { CarComponent } from './pages/car/car.component';
import { BankComponent } from './pages/bank/bank.component';
import { HealthComponent } from './pages/health/health.component';
import { HomeComponent } from './pages/home/home.component';
import { IncomeComponent } from './pages/income/income.component';
import { PersonalComponent } from './pages/personal/personal.component';
import { PhoneComponent } from './pages/phone/phone.component';
import { SportComponent } from './pages/sport/sport.component';


const routes: Routes = [
  { path: "food", component: FoodComponent },
  { path: "car", component: CarComponent },
  { path: "bank", component: BankComponent },
  { path: "health", component: HealthComponent },
  { path: "home", component: HomeComponent },
  { path: "income", component: IncomeComponent },
  { path: "personal", component: PersonalComponent },
  { path: "phone", component: PhoneComponent },
  { path: "sport", component: SportComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

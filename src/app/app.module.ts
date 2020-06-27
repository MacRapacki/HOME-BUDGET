import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { FoodComponent } from './pages/food/food.component';
import { CarComponent } from './pages/car/car.component';
import { PersonalComponent } from './pages/personal/personal.component';
import { HomeComponent } from './pages/home/home.component';
import { PhoneComponent } from './pages/phone/phone.component';
import { BankComponent } from './pages/bank/bank.component';
import { HealthComponent } from './pages/health/health.component';
import { SportComponent } from './pages/sport/sport.component';
import { IncomeComponent } from './pages/income/income.component';
import { RoutingComponent } from './routing/routing.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    StatusBarComponent,
    FoodComponent,
    CarComponent,
    PersonalComponent,
    HomeComponent,
    PhoneComponent,
    BankComponent,
    HealthComponent,
    SportComponent,
    IncomeComponent,
    RoutingComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

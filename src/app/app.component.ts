import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pizza-order';
  eggRollNum: number;
  pizzaNum: number;
  newResult: boolean;
  empResult: boolean;
  constructor() { }

  ngOnInit(): void {
    this.eggRollNum = 3;
    this.pizzaNum = 4;
    this.newResult = false;
    this.empResult = false;
  }
}

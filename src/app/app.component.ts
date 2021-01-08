import { Component, OnInit } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateX(-100%)', position: 'absolute', top: '0', width: '100%'}),
        animate('200ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({transform: 'translateX(-100%)'}))
      ])
    ]),
    trigger('slideInOut1', [
      transition(':enter', [
        style({transform: 'translateX(100%)', position: 'absolute', top: '0', width: '100%'}),
        animate('200ms ease-out', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('200ms ease-out', style({transform: 'translateX(100%)'}))
      ])
    ]),
  ]
})
export class AppComponent implements OnInit {
  title = 'pizza-order';
  eggRollNum: number;
  pizzaNum: number;
  newResult: boolean;
  empResult: boolean;
  showHome: boolean;
  constructor() { }

  ngOnInit(): void {
    this.eggRollNum = 3;
    this.pizzaNum = 4;
    this.newResult = false;
    this.empResult = false;
    this.showHome = true;
  }

  gotoNewResView() {
    this.newResult = true;
    this.empResult = false;
    this.showHome = false;
    this.pizzaNum += 1;
  }
  gotoEmpResView() {
    this.newResult = false;
    this.empResult = true;
    this.showHome = false;
  }

  gotoHome() {
    this.newResult = false;
    this.empResult = false;
    this.showHome = true;
  }

}

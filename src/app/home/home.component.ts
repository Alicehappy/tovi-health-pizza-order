import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  
  eggRollNum: number;
  pizzaNum: number;
  constructor() { }
  
  ngOnInit(): void {
    this.eggRollNum = 3;
    this.pizzaNum = 4;
  }

}

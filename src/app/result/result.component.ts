import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  eggRollNum: number;
  pizzaNum: number;
  constructor() { }
  
  ngOnInit(): void {
    this.eggRollNum = 3;
    this.pizzaNum = 4;
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales-card',
  templateUrl: './sales-card.component.html',
  styleUrls: ['./sales-card.component.css']
})
export class SalesCardComponent implements OnInit {
  selectedValue: string;

    foods = [
      {value: 'steak-0', viewValue: 'Steak'},
      {value: 'pizza-1', viewValue: 'Pizza'},
      {value: 'tacos-2', viewValue: 'Tacos'}
    ];

  constructor() { }

  ngOnInit() {
  }

}

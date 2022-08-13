import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {
  title = 'Counter - App';
  operationNum = 5;
  number = 10;

  constructor() { }

  acumular(value: number) {
    this.number += value;
  }

}

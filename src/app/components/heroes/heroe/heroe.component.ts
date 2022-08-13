import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css'],
})
export class HeroeComponent {

  // * Variables
  name: string = 'Superman';
  age: number = 30;

  constructor() { }

  get nameCapitalize(): string {
    return this.name.toUpperCase();
  }

  // * Funtions
  getName(): string {
    return `${ this.name } - ${ this.age }`;
  }

  changeName(): void {
    this.name = 'Batman';
  }

  changeAge(): void {
    this.age = 40;
  }


}

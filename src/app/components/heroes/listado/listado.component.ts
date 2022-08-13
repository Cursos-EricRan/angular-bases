import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  // * Variables
  titile = 'Heroes list';
  heroes: string[] = ['Aquaman', 'Superman', 'Batman', 'Mujer Maravilla'];
  heroesDeleted: string[] = [];

  constructor() { }

  // * Functions
  deleteLastHero(hero: string) {
    this.heroesDeleted.push(this.heroes.pop() || '');
    this.heroes = this.heroes.filter(h => h !== hero);
  }

  deleteFirstHero() {
    const heroDeleted = this.heroes.shift() || '';
    this.heroesDeleted.push(heroDeleted);
  }

}

import { Component, OnInit } from '@angular/core';

import { Heroe } from '../heroe';
import { HeroService } from '../heroe.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  add(nombre: string): void {
    nombre = nombre.trim();
    if (!nombre) { return; }
    this.heroService.addHero({ nombre } as Heroe)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Heroe): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

}
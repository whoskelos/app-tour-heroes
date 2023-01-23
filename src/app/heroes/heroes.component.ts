import { Component, OnInit } from '@angular/core';

import { Heroe } from "../heroe";
import { HeroeService } from "../heroe.service";
import { MessageService } from "../message.service";
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  
  heroes: Heroe[] = [];

  constructor(private heroeService: HeroeService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroeService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }


}

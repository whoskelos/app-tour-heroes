import { Component, OnInit } from '@angular/core';
import { Heroe } from "../heroe";
import { HeroeService } from "../heroe.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Heroe[] = [];

  constructor(private heroeService: HeroeService) {}

  ngOnInit(): void {
      this.getHeroes();
  }

  getHeroes(): void {
    this.heroeService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1,5));
  }
}

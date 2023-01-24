import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Heroe } from '../heroe';
import { HeroService } from '../heroe.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './heroe-detalle.component.html',
  styleUrls: [ './heroe-detalle.component.css' ]
})
export class HeroDetalleComponent implements OnInit {
  hero: Heroe | undefined;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }
}
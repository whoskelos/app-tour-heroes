import { Component, Input } from '@angular/core';
import { Heroe } from "../heroe";

import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { HeroeService } from "../heroe.service";

@Component({
  selector: 'app-heroe-detalle',
  templateUrl: './heroe-detalle.component.html',
  styleUrls: ['./heroe-detalle.component.css']
})
export class HeroeDetalleComponent {
  @Input() heroe?: Heroe;

  constructor(
    private route: ActivatedRoute,
    private heroeService: HeroeService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroeService.getHeroe(id)
      .subscribe(heroe => this.heroe = heroe);
  }

  volver(): void {
    this.location.back();
  }
}

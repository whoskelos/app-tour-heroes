import { Component, OnInit } from '@angular/core';
import { Heroe } from "../heroe";
import { LISTAHEROES } from "../prueba-heroes";
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit{
  heroes = LISTAHEROES;
  selectedHeroe?: Heroe;

  ngOnInit() {
    onSelect(heroe: Heroe): void {
      this.selectedHeroe = heroe;
    }
  }

}

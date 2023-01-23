import { Injectable } from '@angular/core';
import { Heroe } from "./heroe";
import { LISTAHEROES } from "./prueba-heroes";
import { Observable, of } from "rxjs";
import { MessageService } from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class HeroeService {
  getHeroes(): Observable<Heroe[]> {
    const heroes = of(LISTAHEROES);
    this.messageService.add('HeroeService: fetched heroes');
    return heroes;
  }

  getHeroe(id: number): Observable<Heroe> {
    const heroe = LISTAHEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroeService: Fetched hero id=${id}`);
    return of(heroe);
  }

  constructor(private messageService: MessageService) { }
}

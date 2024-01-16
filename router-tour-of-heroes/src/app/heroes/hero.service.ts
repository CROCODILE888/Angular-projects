import { Injectable } from '@angular/core';
import { MessageService } from '../message.service';
import { Observable, map, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

    getHeroes(): Observable <Hero[]> {
      // const heroes= of(HEROES); 
      this.messageService.add('HeroService: fetched heroes');
      return of(HEROES);
  }

  getHero(id: number | string){
    return this.getHeroes().pipe(
      map((heroes: Hero[])=>heroes.find(hero => hero.id ===+id)!)
    )
  }
}

import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css',
  
})
export class HeroDetailComponent implements OnInit {
  hero: Hero | undefined;

  constructor(private route: ActivatedRoute,private heroService: HeroService,private location: Location){}

  getHero(): void{
   const id = Number(this.route.snapshot.paramMap.get('id'));
   this.heroService.getHero(id).subscribe(hero=>this.hero=hero)
  }
  
 ngOnInit(): void {
     this.getHero();
 }

 goBack(): void{
  this.location.back();
 }
}

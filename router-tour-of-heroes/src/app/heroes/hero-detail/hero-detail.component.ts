import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs';
import { HeroService } from '../hero.service';
import { Observable } from 'rxjs';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent implements OnInit{
  hero$!: Observable<Hero>;
  
  constructor(private route: ActivatedRoute, private router: Router, private service: HeroService){}

  ngOnInit(): void {
      this.hero$ = this.route.paramMap.pipe(
        switchMap((params: ParamMap)=>this.service.getHero(params.get('id')!))
      )
  }

  gotoHeroes(hero: Hero){
    const heroId = this.hero$ ? hero.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/heroes', { id: heroId, foo: 'foo' }]);
  }
}

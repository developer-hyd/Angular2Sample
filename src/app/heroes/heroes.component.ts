import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero-details/hero';
import { HeroService } from '../service/hero.service';

  
@Component({

	templateUrl: './heroes.component.html',
	styleUrls: ['./heroes.component.css'],
	selector: 'my-heroes',
  providers: [HeroService]

})

export class HeroesComponent implements OnInit{
	title = 'Tour of Heroes';
	selectedHero: Hero;
  heroes : Hero[];

  constructor(private heroService: HeroService) { }

	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	};

  ngOnInit(): void {
    this.getHeroes();
  }
  
  getHeroes(): void {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  
	
}






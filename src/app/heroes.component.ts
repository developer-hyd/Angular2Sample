import { Component, OnInit } from '@angular/core';
import {Hero} from './hero/hero';
import { HeroService } from './service/hero.service';


@Component({

	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
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






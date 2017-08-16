import { Component, OnInit } from '@angular/core';
import {Hero} from './hero/hero';
import { HeroService } from './service/hero.service';


@Component({

	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	selector: 'app-root',
  providers: [HeroService]

})

export class AppComponent implements OnInit{
	title = 'Tour of Heroes';
	selectedHero: Hero;
  heroes : Hero[];

	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	};

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
  this.heroes = this.heroService.getHeroes();
  }

  constructor(private heroService: HeroService) { }
	
}






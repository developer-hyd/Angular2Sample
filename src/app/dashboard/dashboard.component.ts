import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero-details/hero';
import { HeroService } from '../service/hero.service';

@Component({
	selector: 'my-dashboard',
	templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroesSlowly()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }
}
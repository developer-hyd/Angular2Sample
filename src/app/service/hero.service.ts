import { Injectable } from '@angular/core';

import { Hero } from '../hero/hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
  getHeroes(): Hero[] {
    return HEROES;
  }
}
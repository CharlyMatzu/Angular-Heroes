import { Component, OnInit } from '@angular/core';
import { HeroesService, IHeroe } from '../../services/heroes.service';
import { Router } from '@angular/router';





@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: IHeroe[] = [];

  constructor( private _heroesService: HeroesService,
              private _router: Router
             ) { }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
  }

  verHeroe( index: number ) {
    this._router.navigate( ['/heroe', index] );
  }

}

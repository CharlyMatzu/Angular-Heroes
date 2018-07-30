import { Component, OnInit } from '@angular/core';
import { HeroesService, IHeroe } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html'
})
export class BuscarComponent implements OnInit {

  heroes: IHeroe[] = [];
  termino: string;

  constructor( private _heroesService: HeroesService,
               private _router: Router,
               private activatedRoute: ActivatedRoute
   ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
        this.termino = params['termino'];
        this.heroes = this._heroesService.buscarHeroes( params['termino'] );
    });
  }

  verHeroe( nombre: string ) {
    const heroeIndex = this._heroesService.getHeroeIndexByName( nombre );
    this._router.navigate( ['/heroe', heroeIndex] );
  }

}

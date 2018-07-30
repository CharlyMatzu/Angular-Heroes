import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor( private _router: Router  ) { }

  ngOnInit() {
  }


  public buscar(termino: string) {
    // console.log('Termino: ' + termino);
    this._router.navigate( ['/buscar', termino] );
  }

}

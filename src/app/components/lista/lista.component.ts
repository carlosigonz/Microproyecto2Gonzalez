import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  

  constructor( private _http: HttpService ) { }

  peliculas: Observable<any>;

  ngOnInit(): void {
  //   this._http.getMovies().subscribe(data => {
  //     this.peliculas = data;
  //     console.log(this.peliculas);
  //   })
  this.peliculas = this._http.getMovies();
  }
}

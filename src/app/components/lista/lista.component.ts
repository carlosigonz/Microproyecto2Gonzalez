import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  
  // currentVal="";
  // getVal(val){
  //   event.preventDefault;
  //   console.log(val);
  //   this.currentVal=val;
  // }

  constructor( private _http: HttpService,private route: ActivatedRoute) { }

  search = document.getElementById('search-button');
  // input = document.getElementById('inputValue');
  
  

  peliculas: Observable<any>;

  ngOnInit(): void {
  this.peliculas = this._http.getMovies();
  this.route.params.subscribe(params=>{
    console.log(params)
  })
  }
  input:string='';
  getVal(){
    console.log(this.input);
    return this.input
  }

  getSearch(){
    this.peliculas = this._http.searchMovies(this.getVal())
  }

}

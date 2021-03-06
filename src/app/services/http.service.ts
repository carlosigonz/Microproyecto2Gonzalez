import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  page=1;
  APIKEY = 'ea4007a015008ecd693c5ef6e79bf3b2';
  URL = `https://api.themoviedb.org/3/search/movie?api_key=${this.APIKEY}&query=`;
  BUSQUEDA = 'https://api.themoviedb.org/3/search/movie?api_key=ea4007a015008ecd693c5ef6e79bf3b2&query=';
  LISTA =`https://api.themoviedb.org/3/discover/movie?api_key=ea4007a015008ecd693c5ef6e79bf3b2&page=${this.page}`;
  ESTRENOS = 'https://api.themoviedb.org/3/movie/upcoming?api_key=ea4007a015008ecd693c5ef6e79bf3b2';

  constructor(private http: HttpClient) { }
  

  searchMovies(val:string):Observable<any>{
    return this.http.get<any>(`https://api.themoviedb.org/3/search/movie?api_key=${this.APIKEY}&language=en-US&query=${val}`).pipe(map((data:any)=>data.results))
  }

  getMovies(): Observable<any>{
    return this.http.get<any>(this.LISTA).pipe(map((data:any)=>data.results))
  }

  nextList(){
    this.page = this.page+1;
    this.getMovies();
  }

  getEstrenos(): Observable<any>{
    return this.http.get<any>(this.ESTRENOS).pipe(map((data:any)=>data.results))
  }

}

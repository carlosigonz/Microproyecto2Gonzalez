import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  APIKEY = 'ea4007a015008ecd693c5ef6e79bf3b2';
  URL = `https://api.themoviedb.org/3/search/movie?api_key=${this.APIKEY}&query=`;
  ENDPOINT = 'https://api.themoviedb.org/3/search/movie?api_key=ea4007a015008ecd693c5ef6e79bf3b2&query=';
  constructor(private http: HttpClient) { }
  

  getMovies(){
    return this.http.get('')
  }

}

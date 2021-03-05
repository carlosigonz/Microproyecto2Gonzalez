import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  constructor(private moviesSvc: HttpService) { }
  
  ngOnInit(): void {
  }

}

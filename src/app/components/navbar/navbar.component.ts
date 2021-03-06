import { Component, OnInit } from '@angular/core';
import firebase from "firebase"
import { AutenticacionService } from 'src/app/services/autenticacion.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user: firebase.User = null;

  constructor(public authService: AutenticacionService) { }

  // this.authService.getCurrentUser().subscribe(user => {
  // this.user = user;
    // })

  ngOnInit(): void {
  }

}

import { Component, OnInit,Output,Input,EventEmitter } from '@angular/core';
import { FirebaseApp } from '@angular/fire';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/autenticacion.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {


  constructor(
    private authService: AutenticacionService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  async googleLogin(){
    const user = await this.authService.loginwithGoogle();
    if (user){
      this.router.navigate(['/posts']);
    }
  }

  ingresado(){
    if(this.authService.isAuthenticated){
      return true;
    }
    return false;
  }
  
}

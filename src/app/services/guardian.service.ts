import { Injectable } from '@angular/core';
import { CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot,UrlTree,Router } from '@angular/router';
import  AutenticacionService  from 'src/app/services/autenticacion.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardianService implements CanActivate {

  constructor(private authService: AutenticacionService , private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>
  |boolean
  | UrlTree {
    if(this.authService.isAuthenticated()){
      return true;
    }
    return this.router.parseUrl('/login')
  }

}

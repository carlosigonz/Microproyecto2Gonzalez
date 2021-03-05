import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  constructor(private afAuth: AngularFireAuth) { }

  async loginwithGoogle(): Promise<firebase.User>{
    try {
      const res = await this.afAuth.signInWithPopup(
        new firebase.auth.GoogleAuthProvider()
      );
      const { user } = res;
      localStorage.setItem('user',user.uid);
      return user;
    }catch (err){
    console.log(err);
    localStorage.removeItem('user');
    return null;
    }
  }

  getCurrentUser(): Observable<firebase.User>{
    return this.afAuth.user;
  }

  async logout(): Promise<void>{
    try{
      await this.afAuth.signOut();
      localStorage.removeItem('user');
    }catch(e){
      localStorage.removeItem('user')
    }
  }

  isAuthenticated(): boolean{
    return localStorage.getItem('user')?true:false;
  }

}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase/app";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  constructor(private router:Router, private authFire:AngularFireAuth) {
    this.user = authFire.authState;
    this.user
      .subscribe(
        (user) => {
          if (user) {
            this.userDetails = user;
          } else {
            this.userDetails = null;
          }
        }
      );
   }

  login(auth: any){
    return this.authFire.auth.signInWithEmailAndPassword(auth.email, auth.password);
  }

  isLoggedIn() {
    if (this.userDetails == null) {
      return false;
    } else {
      return true;
    }
  }

  logout(){    
    this.authFire.auth.signOut()
      .then(
        data => {
          localStorage.removeItem('bzbooksappdl');
          this.router.navigate(['/login']);
        }
      );
  }

  signInWithGoogle() {
    return this.authFire.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )
  }
}

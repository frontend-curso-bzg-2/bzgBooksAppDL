import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase";
import { Observable } from 'rxjs';
import { IAuth } from '../../models/user';
import { MessagesService } from '../../../alerts/services/messages.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  constructor(private router:Router, private authFire:AngularFireAuth, private alertServices:MessagesService) {
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

  login(auth: IAuth){
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
      ).catch(function(error) {
        this.alertServices.message("No se pudo llevar a cabo la acción, intente de nuevo.","error");
      });;
  }

  signInWithGoogle() {
    return this.authFire.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )
  }

  signInWithTwitter(){
    return this.authFire.auth.signInWithPopup(
      new firebase.auth.TwitterAuthProvider()
    )
  }

  signInWithFacebook(){
    return this.authFire.auth.signInWithPopup(
      new firebase.auth.FacebookAuthProvider()
    )
  }
}

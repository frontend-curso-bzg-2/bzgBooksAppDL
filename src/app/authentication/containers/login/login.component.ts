import { Component, OnInit, NgZone } from '@angular/core';
import { Store, select } from "@ngrx/store";

import { IAuth } from '../../models/user';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { AuthTypes } from '../../models/authtypes';

import * as Auth from "../../actions/auth";
import * as fromAuth from "../../reducers/auth";
import { MessagesService } from "../../../alerts/services/messages.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl']
})
export class LoginComponent implements OnInit {

  pending$ = this.store.pipe(select(fromAuth.getPending));
  error$ = this.store.pipe(select(fromAuth.getError));
  success$ = this.store.pipe(select(fromAuth.getLoggedIn));

  constructor(private authService: AuthService, private router: Router, private zone: NgZone,
  private store : Store<fromAuth.State>, private alertService: MessagesService) { }

  ngOnInit() {
    this.error$.subscribe(error=>{
      this.alertService.message("Usuario o contraseña incorrecta.", "error");
    });

    this.success$.subscribe(sucess => {
      if(sucess){
        this.router.navigate(['main/books']);
      }
    });

  }

  login(event: IAuth) {
    if(event){
      this.store.dispatch(new Auth.Login());
      this.authService.login(event)
        .then(
          auth => {
            localStorage.setItem('bzbooksappdl', JSON.stringify(auth.user));
            this.store.dispatch(new Auth.LoginSuccess(auth.user.uid));
          },
          error => {
            this.store.dispatch(new Auth.LoginFailure(error));
          });
    }
  }

  private okLoginFunction(auth: any): void {
    localStorage.setItem('bzbooksappdl', JSON.stringify(auth.user));
    this.zone.run(() => {
      this.store.dispatch(new Auth.LoginSuccess(auth.user.uid));
    });
  }

  loginAuthExternal(event: AuthTypes) {
    if(event){
      this.store.dispatch(new Auth.Login());
      switch (event) {
        case AuthTypes.Twitter:
          this.authService.signInWithTwitter()
            .then(auth => this.okLoginFunction(auth)).catch(error => this.errorFunction(error));
          break;
        default:
        case AuthTypes.Facebook:
          this.authService.signInWithFacebook()
            .then(auth => this.okLoginFunction(auth)).catch(error => this.errorFunction(error));
          break;
        case AuthTypes.Google:
          this.authService.signInWithGoogle()
            .then(auth => this.okLoginFunction(auth)).catch(error => this.errorFunction(error));
          break;
      }
    }
  }  

  private errorFunction(error: any): void {
    this.store.dispatch(new Auth.LoginFailure(error));
  }
}

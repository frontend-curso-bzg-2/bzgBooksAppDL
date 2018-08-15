import { Injectable } from '@angular/core';
import { Router, CanActivate } from "@angular/router";
import { map, take } from "rxjs/operators";
import { Observable, of } from "rxjs";
import { AuthService } from "../auth/auth.service";
import * as fromAuth from "../../reducers";
import { Store, select } from '@ngrx/store';
import * as Auth from "../../actions/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router:Router, private authService: AuthService, private store:Store<fromAuth.State>) { }
  
  canActivate():Observable<boolean>{
    return this.store.pipe( select(fromAuth.getLoggedIn), map(loggedIn => {
      if(!loggedIn){
        this.router.navigate(["/login"]);
        return false;
      }
      return true;
    }), take(1));
  }
/*
  checkLocalStorage(){
    let user = JSON.parse(localStorage.getItem('bzbooksappdl'));
    if(user){
      this.store.dispatch(new Auth.LoginSuccess(user.uid));
      return true;
    }
    return false;   
  }*/

}

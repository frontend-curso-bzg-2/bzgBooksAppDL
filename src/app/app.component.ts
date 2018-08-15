import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as Auth from "./authentication/actions/auth";
import * as fromAuth from "./authentication/reducers";

@Component({
  selector: 'books-store',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  constructor(private store:Store<fromAuth.State>){
    this.checkLocalStorage();
  }

  private checkLocalStorage(){
    let user = JSON.parse(localStorage.getItem('bzbooksappdl'));
    if(user){
      this.store.dispatch(new Auth.LoginSuccess(user.uid));
      return true;
    }
    return false;   
  }
}

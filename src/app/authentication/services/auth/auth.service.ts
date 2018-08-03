import { Injectable } from '@angular/core';
import { IAuth } from '../../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }

  login(auth: IAuth){
    localStorage.setItem('bzbooksappdl',JSON.stringify(auth));
    this.router.navigate(["/main/books"]);
  }

  logout(){
    localStorage.removeItem('bzbooksappdl');
  }
}

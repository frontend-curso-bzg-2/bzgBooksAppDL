import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }

  login(auth: any){
    localStorage.setItem('bzbooksappdl',JSON.stringify(auth));
    this.router.navigate(["/main/books"]);
  }

  logout(){
    localStorage.removeItem('bzbooksappdl');
    this.router.navigate(["/"]);
  }
}

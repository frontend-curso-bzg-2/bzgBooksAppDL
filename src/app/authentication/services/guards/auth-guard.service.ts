import { Injectable } from '@angular/core';
import { Router, CanActivate } from "@angular/router";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router:Router) { }
  
  canActivate():Observable<boolean>{
    if(!localStorage.getItem("bzbooksappdl")){
      this.router.navigate(["/login"]);
      return of(false);  
    };
    return of(true);
    
  }

}

import { Component, OnInit } from '@angular/core';
import { IAuth } from '../../models/user';
import { AuthService } from '../../services/auth/auth.service';
import { AngularFireAuth } from "angularfire2/auth";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService, private authFire:AngularFireAuth) { }

  ngOnInit() {
  }

  login(event:IAuth){
    this.authService.login(event);
  }

  loginFire(event:IAuth){
    this.authFire.auth.signInWithEmailAndPassword(event.email, event.password).then(
      auth => {
        this.authService.login(this.authFire.auth.currentUser);
      },
      error => {
        console.log(error.message);
      }
    );
  }

  loginGoogle(event:boolean){
    this.authService.loginGoogle(event);
  }

}

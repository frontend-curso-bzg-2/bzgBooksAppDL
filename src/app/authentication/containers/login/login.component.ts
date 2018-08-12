import { Component, OnInit, NgZone } from '@angular/core';
import { IAuth } from '../../models/user';
import { auth } from 'firebase';
import { AuthService } from '../../services/auth/auth.service';
import { AngularFireAuth } from "angularfire2/auth";
import { Router } from '@angular/router';
import { AuthTypes } from '../../models/authtypes';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private authFire: AngularFireAuth,
    private router: Router, private zone: NgZone) { }

  ngOnInit() {
  }

  login(event: IAuth) {
    this.authService.login(event)
      .then(
        auth => {
          localStorage.setItem('bzbooksappdl', JSON.stringify(auth));
          this.router.navigate(['main/books']);
        },
        error => {
          alert(error.message);
        });
  }

  loginAuthExternal(event: AuthTypes) {
    switch (event) {
      case AuthTypes.Google:
        this.authService.signInWithGoogle()
          .then(this.okLoginFunction()).catch(this.errorFunction());
        break;
      case AuthTypes.Twitter:
        this.authService.signInWithTwitter()
          .then(this.okLoginFunction()).catch(this.errorFunction());
        break;
      default:
      case AuthTypes.Facebook:
        this.authService.signInWithFacebook()
          .then(this.okLoginFunction()).catch(this.errorFunction());
        break;
    }
  }

  private okLoginFunction(): (value: auth.UserCredential) => void | PromiseLike<void> {
    return data => {
      localStorage.setItem('bzbooksappdl', JSON.stringify(data));
      this.zone.run(() => {
        this.router.navigate(['main/books']);
      });
    };
  }

  private errorFunction(): (reason: any) => void | PromiseLike<void> {
    return (err) => {
      console.log(err);
    };
  }
}

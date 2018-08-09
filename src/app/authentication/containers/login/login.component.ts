import { Component, OnInit, NgZone } from '@angular/core';
import { IAuth } from '../../models/user';
import { auth } from 'firebase';
import { AuthService } from '../../services/auth/auth.service';
import { AngularFireAuth } from "angularfire2/auth";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService, private authFire:AngularFireAuth,
    private router: Router, private zone: NgZone) { }

  ngOnInit() {
  }

  login(event:IAuth){
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
    if(event){
      this.authService.signInWithGoogle()
      .then(
        data => {          
          localStorage.setItem('bzbooksappdl', JSON.stringify(data));
          this.zone.run(() => {            
            this.router.navigate(['main/books']);
          });          
        }
      ).catch(
        (err) => {
          console.log(err);
        }
      );
    }
  }

}

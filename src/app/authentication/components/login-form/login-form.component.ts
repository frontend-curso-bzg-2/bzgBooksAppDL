import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IAuth, Auth } from "../../models/user";
import { AuthTypes } from "../../models/authtypes";

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.styl']
})
export class LoginFormComponent implements OnInit {
  @Output() submitted = new EventEmitter<IAuth>();
  @Output() submittedAuthExternal = new EventEmitter<AuthTypes>();
  login:IAuth;

  constructor() {
    this.login = new Auth();
   }

  ngOnInit() {
  }

  submit(){
    this.submitted.emit(this.login);
  }

  loginGoogle(){
    this.submittedAuthExternal.emit(AuthTypes.Google);
  }

  loginTwitter(){
    this.submittedAuthExternal.emit(AuthTypes.Twitter);
  }

  loginFacebook(){
    this.submittedAuthExternal.emit(AuthTypes.Facebook);
  }

}

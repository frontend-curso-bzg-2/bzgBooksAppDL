import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IAuth, Auth } from "../../models/user";

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.styl']
})
export class LoginFormComponent implements OnInit {
  @Output() submitted = new EventEmitter<IAuth>();
  login:IAuth;

  constructor() {
    this.login = new Auth();
   }

  ngOnInit() {
  }

  submit(){
    console.log(this.login);
    this.submitted.emit(this.login);
  }

}

import { Component, OnInit } from '@angular/core';
import { IAuth } from '../../models/user';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  login(event:IAuth){
    this.authService.login(event);
  }

}

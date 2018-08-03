import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../authentication/services/auth/auth.service";

@Component({
  selector: 'nav-menu-left',
  templateUrl: './nav-menu-left.component.html',
  styleUrls: ['./nav-menu-left.component.styl']
})
export class NavMenuLeftComponent implements OnInit {

  constructor(private authService: AuthService) { 

  }

  ngOnInit() {
  }

  logout(){
    this.authService.logout();
  }

}

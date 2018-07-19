import { Component, OnInit } from '@angular/core';
import {User} from './user';

@Component({
  selector: 'nav-left-options',
  templateUrl: './nav-left-options.component.html',
  styleUrls: ['./nav-left-options.component.styl']
})
export class NavLeftOptionsComponent implements OnInit {

  user: User;

  constructor() { }

  ngOnInit() {
    this.user = {
      name: "Juan Alejandro"
    }
  }

}

import { Component, OnInit, Input } from '@angular/core';
import {User} from '../nav-left-options/user';

@Component({
  selector: 'nav-left-top',
  templateUrl: './nav-left-top.component.html',
  styleUrls: ['./nav-left-top.component.styl']
})
export class NavLeftTopComponent implements OnInit {

  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

}

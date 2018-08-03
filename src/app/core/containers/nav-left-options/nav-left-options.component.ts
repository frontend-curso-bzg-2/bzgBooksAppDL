import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import {User} from '../../../authentication/models/user';
import { AuthService } from '../../../authentication/services/auth/auth.service';

@Component({
  selector: 'nav-left-options',
  templateUrl: './nav-left-options.component.html',
  styleUrls: ['./nav-left-options.component.styl'],
  animations: [
    trigger('asideCollapse', [
      state('close', style({
        width: "50px"
      })),
      state('open', style({
        width: "100%"
      })),
      transition('open => close',animate('100ms ease-out')),
      transition('close => open',animate('100ms ease-in'))
    ])
  ]
})
export class NavLeftOptionsComponent implements OnInit {

  @Input() asideState: string;
  user: User;

  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.user = {
      name: "Juan Alejandro"
    }
  }

  logout(){
    this.authService.logout();
  }

}

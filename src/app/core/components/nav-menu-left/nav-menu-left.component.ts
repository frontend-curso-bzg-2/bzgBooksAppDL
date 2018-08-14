import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { AuthService } from "../../../authentication/services/auth/auth.service";
import { ModalService } from '../../../modal/services';
import * as fromAuth from "../../../authentication/reducers/auth";
import * as Auth from "../../../authentication/actions/auth";

@Component({
  selector: 'nav-menu-left',
  templateUrl: './nav-menu-left.component.html',
  styleUrls: ['./nav-menu-left.component.styl']
})
export class NavMenuLeftComponent implements OnInit {

  constructor(private authService: AuthService, private modalService: ModalService,
     private store: Store<fromAuth.State>) {

  }

  ngOnInit() {
  }

  logout() {
    this.store.dispatch(new Auth.Logout);
    this.authService.logout();
  }

  openModal(event: any, id: string) {
    event.preventDefault();
    this.modalService.open(id, true);
  }

  closeModal(id: string, selection: boolean) {
    this.modalService.close(id);
    if (selection)
      this.logout();
  }
}

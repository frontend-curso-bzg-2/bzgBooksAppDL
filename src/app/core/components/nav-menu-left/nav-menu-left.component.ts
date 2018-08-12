import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../authentication/services/auth/auth.service";
import { ModalService } from '../../../modal/services';

@Component({
  selector: 'nav-menu-left',
  templateUrl: './nav-menu-left.component.html',
  styleUrls: ['./nav-menu-left.component.styl']
})
export class NavMenuLeftComponent implements OnInit {

  constructor(private authService: AuthService, private modalService: ModalService) {

  }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }

  openModal(event: any, id: string) {
    event.preventDefault();
    this.modalService.open(id);
  }

  closeModal(id: string, selection: boolean) {
    this.modalService.close(id);
    if (selection)
      this.logout();
  }
}

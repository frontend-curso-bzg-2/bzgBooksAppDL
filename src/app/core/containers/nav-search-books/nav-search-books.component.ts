import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { BooksListService } from "../../../books/services/list/books-list.service";
import { Observable } from 'rxjs';
import { Store, select } from "@ngrx/store";
import * as layout from "../../actions/layout";
import * as fromRoot from "../../../reducer/reducer";
import {User} from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { ModalService } from '../../../modal/services';

@Component({
  selector: 'nav-search-books',
  templateUrl: './nav-search-books.component.html',
  styleUrls: ['./nav-search-books.component.styl']
})
export class NavSearchBooksComponent implements OnInit {

  actionAside$:Observable<string> = this.store.pipe(select(fromRoot.getShowSideNav));
  state : string = "open";
  user: User;

  constructor(private bookListService:BooksListService, private store: Store<fromRoot.State>,
     private authService:AngularFireAuth,private modalService: ModalService) { 
    this.state = 'open';
  }

  ngOnInit() {
    this.authService.authState
    .subscribe(
      user => {        
        this.user = user;     
      }
    );
  }

  closeAside(){
    if(this.state === 'close') {
      this.state='open'; this.store.dispatch(new layout.OpenSideNav());
    }else {
      this.state = 'close'; this.store.dispatch(new layout.CloseSideNav()); 
    } 
  }

  searchText(event:string){
    this.bookListService.searchBooks(event, 0, 20);    
  }

  openModal(event: any, id: string) {
    event.preventDefault();
    this.modalService.open(id, false);
  }

  closeModal(id: string) {
    this.modalService.close(id);    
  }
}

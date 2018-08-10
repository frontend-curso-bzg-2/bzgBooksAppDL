import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { BooksListService } from "../../../books/services/list/books-list.service";
import {User} from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'nav-search-books',
  templateUrl: './nav-search-books.component.html',
  styleUrls: ['./nav-search-books.component.styl']
})
export class NavSearchBooksComponent implements OnInit {

  @Output() actionAside = new EventEmitter<string>();
  state : string;
  user: User;

  constructor(private bookListService:BooksListService, private authService:AngularFireAuth) { 
    this.state = 'open';
  }

  ngOnInit() {
    this.authService.authState
    .subscribe(
      user => {        
        this.user = user;
        //console.log(this.user);
      }
    );
  }

  closeAside(){
    this.state = (this.state === 'close') ? 'open' : 'close';
    this.actionAside.emit(this.state);
  }

  searchText(event:string){
    this.bookListService.searchBooks(event, 0, 20);    
  }
}

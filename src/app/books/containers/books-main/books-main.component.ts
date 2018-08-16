import { Component, OnInit } from '@angular/core';
import { BooksListService } from "../../services/list/books-list.service";
import { BookList } from '../../models/books';
import { Store, select } from '@ngrx/store';
import * as fromAuth from "../../../authentication/reducers/";
import { Observable } from 'rxjs';

@Component({
  selector: 'books-main',
  templateUrl: './books-main.component.html',
  styleUrls: ['./books-main.component.styl']
})
export class BooksMainComponent implements OnInit {
  user$:Observable<string> = this.store.pipe(select(fromAuth.getUser));
  booksList: BookList;
  
  constructor(private booksService:BooksListService, private store: Store<fromAuth.State>) { 
    this.booksService.searchBooks('Colombia');
  }

  ngOnInit() {
    this.booksService.booksList
        .subscribe(
          books => {        
            if(books){
              this.booksList = books;
            }        
          }
    );
  }
  
}

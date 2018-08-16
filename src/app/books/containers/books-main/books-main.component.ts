import { Component, OnInit } from '@angular/core';
import { BooksListService } from "../../services/list/books-list.service";
import { BookList } from '../../models/books';
import { Store, select } from '@ngrx/store';
import * as fromAuth from "../../../authentication/reducers/";
import { Observable } from 'rxjs';
import { Collection } from '../../../collections/models/collections';
import { CollectionService } from '../../../collections/services/collection.service';
@Component({
  selector: 'books-main',
  templateUrl: './books-main.component.html',
  styleUrls: ['./books-main.component.styl']
})
export class BooksMainComponent implements OnInit {
  collectionList: Observable<Collection[]>;
  user$:Observable<string> = this.store.pipe(select(fromAuth.getUser));
  booksList: BookList;
  droppedData: any;
  
  constructor(private booksService:BooksListService, private store: Store<fromAuth.State>,
    private collectionService: CollectionService) { 
    this.booksService.searchBooks('Colombia');
  }

  ngOnInit() {
    this.user$.subscribe(user => {
      this.collectionList = this.collectionService.getList(user);
    });
    this.booksService.booksList
        .subscribe(
          books => {        
            if(books){
              this.booksList = books;
            }        
          }
    );
  }

  dragEnd(event): void {
    console.log("dropData: "+event);
  }
  
}

import { Component, OnInit } from '@angular/core';
//import { books } from '../../../data-books';
import { BooksListService } from "../../services/list/books-list.service";
import { BookList } from '../../models/books';

@Component({
  selector: 'books-main',
  templateUrl: './books-main.component.html',
  styleUrls: ['./books-main.component.styl']
})
export class BooksMainComponent implements OnInit {

  booksList: BookList;
  
  constructor(private booksService:BooksListService) { 
    this.booksService.searchBooks('Colombia');
  }

  ngOnInit() {
    //this.booksList = books.items;
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

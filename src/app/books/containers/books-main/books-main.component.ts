import { Component, OnInit } from '@angular/core';
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
    this.booksService.booksList
        .subscribe(
          books => {        
            if(books){
              this.booksList = books;
            }        
          }
    );
  }

  onDrop(event): void {
    console.log("dropData: "+event);
  }
  
}

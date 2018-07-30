import { Component, OnInit } from '@angular/core';
import { books } from '../../../data-books';
import { BooksListService } from "../../services/list/books-list.service";

@Component({
  selector: 'app-books-main',
  templateUrl: './books-main.component.html',
  styleUrls: ['./books-main.component.styl']
})
export class BooksMainComponent implements OnInit {

  booksList: any[];
  constructor(private booksService:BooksListService) { 
    this.booksList = [];
  }

  ngOnInit() {
    this.booksList = books.items;
    //this.booksService.getBookList().subscribe(books=>{this.booksList = books});
  }

}
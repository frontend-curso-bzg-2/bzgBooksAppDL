import { Component, OnInit } from '@angular/core';
import { books } from '../../../data-books';

@Component({
  selector: 'app-books-main',
  templateUrl: './books-main.component.html',
  styleUrls: ['./books-main.component.styl']
})
export class BooksMainComponent implements OnInit {

  booksList: any[];
  constructor() { 
    this.booksList = [];
  }

  ngOnInit() {
    this.booksList = books.items;
  }

}

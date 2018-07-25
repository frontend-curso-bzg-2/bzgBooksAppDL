import { Component, OnInit } from '@angular/core';
import { books } from '../data-books';

@Component({
  selector: 'main-item-home',
  templateUrl: './main-item-home.component.html',
  styleUrls: ['./main-item-home.component.styl']
})
export class MainItemHomeComponent implements OnInit {

  booksList: any[];
  
  constructor() { 
    this.booksList = [];
  }

  ngOnInit() {
    this.booksList = books.items;
  }

}

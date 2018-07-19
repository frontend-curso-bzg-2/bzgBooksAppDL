import { Component, OnInit } from '@angular/core';
import { books } from '../data-books';

@Component({
  selector: 'main-item-collections',
  templateUrl: './main-item-collections.component.html',
  styleUrls: ['./main-item-collections.component.styl']
})
export class MainItemCollectionsComponent implements OnInit {

  booksList: any[];
  constructor() { 
    this.booksList = [];
  }

  ngOnInit() {
    this.booksList = books.items;
  }

}

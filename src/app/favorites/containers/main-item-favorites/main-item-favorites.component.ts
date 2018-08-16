import { Component, OnInit } from '@angular/core';
import { BooksListService } from "../../../books/services/list/books-list.service";
import { BookList } from '../../../books/models/books';
import { Store, select } from '@ngrx/store';
import * as fromAuth from "../../../authentication/reducers/";
import { Observable } from '../../../../../node_modules/rxjs';

@Component({
  selector: 'main-item-favorites',
  templateUrl: './main-item-favorites.component.html',
  styleUrls: ['./main-item-favorites.component.styl']
})
export class MainItemFavoritesComponent implements OnInit {

  favoritesList: any;
  
  constructor(private booksService:BooksListService, private store: Store<fromAuth.State>) { 
    this.favoritesList = [];
  }

  ngOnInit() {
  } 

  removeFavorite(favorite:any){
  }

}
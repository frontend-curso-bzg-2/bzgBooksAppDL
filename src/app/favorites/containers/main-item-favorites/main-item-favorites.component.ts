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
  user$:Observable<string> = this.store.pipe(select(fromAuth.getUser));
  
  constructor(private booksService:BooksListService, private store: Store<fromAuth.State>) { 
    this.favoritesList = [];
  }

  ngOnInit() {
    this.user$.subscribe(user => {
      this.booksService.getFavorites(user).subscribe(
            favorites => {        
              if(favorites){
                this.favoritesList = favorites;
              }        
            }
      );
    });
  } 

  removeFavorite(favorite:any){
    this.user$.subscribe(user => {
      this.booksService.deleteFavorites(user, favorite);
    });
  }

}
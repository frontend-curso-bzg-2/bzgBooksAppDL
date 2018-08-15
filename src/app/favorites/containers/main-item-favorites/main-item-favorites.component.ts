import { Component, OnInit } from '@angular/core';
import { BooksListService } from "../../../books/services/list/books-list.service";
import { BookList } from '../../../books/models/books';

@Component({
  selector: 'main-item-favorites',
  templateUrl: './main-item-favorites.component.html',
  styleUrls: ['./main-item-favorites.component.styl']
})
export class MainItemFavoritesComponent implements OnInit {

  favoritesList: any;
  
  constructor(private booksService:BooksListService) { 
    
  }

  ngOnInit() {
    this.booksService.getFavorites().subscribe(
          books => {        
            if(books){
              this.favoritesList = books;
            }        
          }
    );
  } 

  removeFavorite(book:any){
    this.booksService.deleteFavorites(book);
  }

}
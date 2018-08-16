import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
//import { books } from '../../../data-books';
import { BooksListService } from '../../services/list/books-list.service';
import { BookList } from '../../models/books';
import { Favorite } from '../../models/favorite';
import { Observable } from '../../../../../node_modules/rxjs';
import { Store, select } from '@ngrx/store';
import * as fromAuth from "../../../authentication/reducers/";

@Component({
  selector: 'book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.styl']
})
export class BookDetailComponent implements OnInit {

  starList:boolean[];
  book: any;
  recommendedList: BookList;
  isFavorite : boolean;
  favoriteKey: string;
  user$:Observable<string> = this.store.pipe(select(fromAuth.getUser));

  constructor(private router: ActivatedRoute, private bookService: BooksListService, private store: Store<fromAuth.State>) {
    this.book={};    
   }

  ngOnInit() {
    let id:string;     
    this.starList = [false,false,false,false,false];   
    //id = this.router.snapshot.paramMap.get('id');
    this.router.params.subscribe( (params: Params) => { 
      id = params.id 
      this.bookService.getBook(id).subscribe(
        books => {
          if (books) {
            this.book = books;
            let rating=this.book.volumeInfo.averageRating;
            this.buildBookStarsRating(rating); 
            let industryId = this.book.volumeInfo.industryIdentifiers;
            this.buildRecommendedBooksList(industryId);   
            this.askIsFavorite(this.book.id);         
            }
          }
        );
      });   
    //this.book = books.items.find( item => {return item.id = id});
  }

  private askIsFavorite(id:any) {
    this.user$.subscribe(user => {
      this.bookService.getFavorites(user).subscribe(favorites => {
        if (favorites) {
          this.isFavorite = false;
          favorites.forEach(favoriteBook => {
            if (favoriteBook.book.id === id){
              this.isFavorite = true;
              this.favoriteKey = favoriteBook.key;
            }              
          });
        }
      });
    });    
  }

  private buildRecommendedBooksList(industryId: any) {
    if (industryId) {
      this.bookService.searchRecommendedBooks(industryId[1].identifier, 0, 8);
      this.bookService.recommendedBooksList.subscribe(books => {
          if (books) {
            this.recommendedList = books;
          }
        });
    }
  }

  private buildBookStarsRating(rating: any) {
    if (rating) {
      let adjustedrating = Math.round(rating);
      for (var i = 0; i < adjustedrating; i++) {
        this.starList[i] = true;
      }
    }
  }

  addFavorite() {
    this.user$.subscribe(user => {
      this.bookService.addFavorites(user, this.book);
    });
  }

  removeFavorite(favoriteKey:string){
    let favorite = new Favorite();
    favorite.key=favoriteKey;
    favorite.book=this.book;
    this.user$.subscribe(user => {
      this.bookService.deleteFavorites(user, favorite);
    });
  }

}

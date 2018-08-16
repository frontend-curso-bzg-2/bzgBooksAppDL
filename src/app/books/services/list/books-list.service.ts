import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError } from 'rxjs/operators';
import { Observable, of, Subject } from 'rxjs';
import { MessagesService } from '../../../alerts/services/messages.service';

import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import * as firebase from "firebase";
import { environment } from "../../../../environments/environment";
import { BookList } from "../../models/books";
import { Favorite } from '../../models/favorite';

@Injectable({
  providedIn: 'root'
})
export class BooksListService {

  url = environment.apiBooks;
  booksList: Subject<BookList> = new Subject();
  recommendedBooksList: Subject<BookList> = new Subject();
  favsRef: AngularFireList<any>;
  user: firebase.User;

  constructor(private http: HttpClient, private alertService: MessagesService, private authFire: AngularFireAuth,
    private rdb: AngularFireDatabase) { 
    this.booksList.next({ kind: "", totalItems: 0, items: [] });
  }

  searchRecommendedBooks(text: string, startIndex?: number, maxResults?: number) {
    let url = this.buildSearchUrlWithParams(text, startIndex, maxResults);
    this.http.get<BookList>(url)
        .pipe(
          catchError(this.handleError<BookList>('Get Recommended Books List', null))
        )
        .subscribe(
          (books) => {
            this.recommendedBooksList.next(books);
          }
        );
  }

  searchBooks(text: string, startIndex?: number, maxResults?: number) {
    if(text){
      let url = this.buildSearchUrlWithParams(text, startIndex, maxResults);    
      this.http.get<BookList>(url)
        .pipe(
          catchError(this.handleError<BookList>('Get Books List', null))
        )
        .subscribe(
          (books) => {
            this.booksList.next(books);
          }
        );
    }
  }

  private buildSearchUrlWithParams(text: string, startIndex: number, maxResults: number) {
    let url = this.url + `volumes?q=${text}`;
    if (startIndex) {
      url += `&startIndex=${startIndex}`;
      if (maxResults) {
        url += `&maxResults=${maxResults}`;
      }
    }
    return url;
  }

  getBook(id: string): Observable<any> {
    let url = this.url + `volumes/${id}`;
    return this.http.get<any>(url)
      .pipe(
        catchError(this.handleError<any>('Get Book', null))
      );
  }
    
    let favorite = new Favorite();
    favorite.key=createdKey;
    favorite.book=favoriteBook;
    var updates = {};
    return this.rdb.database.ref().update(updates).then(_ => this.alertService.message("Agregado a Favoritos", "success"));
  }

<<<<<<< HEAD
  getFavorites() : Observable<any>{
    //return this.favsRef.valueChanges();
    return new Observable<any>();
=======
>>>>>>> 14db1ca755f6ee5d05fd334d46b5250ee37d568b
  }

    var updates = {};
  }

  private handleError<T>(operation="operation", result?: T){
    return (error:any):Observable<T> => {
      let message=`${operation} ha fallado: ${error.message}`;
      console.error(message);
      this.alertMessage(message);
      return of(result as T);
    }
  }

  private alertMessage(message:string){    
    this.alertService.message(message, "error");
  }
}

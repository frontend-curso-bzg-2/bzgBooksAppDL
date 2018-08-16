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

  constructor(private http: HttpClient, private alertService: MessagesService, private authFire: AngularFireAuth,
    private rdb: AngularFireDatabase) { 
    this.booksList.next({ kind: "", totalItems: 0, items: [] });
    this.recommendedBooksList.next({ kind: "", totalItems: 0, items: [] });    
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
    
  addFavorites(userId:string, favoriteBook: any) {
    let createdKey = this.rdb.database.ref().child('favorites/' + userId).push().key;
    let favorite = new Favorite();
    favorite.key=createdKey;
    favorite.book=favoriteBook;
    var updates = {};
    updates['favorites/' + userId+'/' + createdKey] = favorite;
    return this.rdb.database.ref().update(updates).then(_ => this.alertService.message("Agregado a Favoritos", "success"));
  }

  getFavorites(userId:string) : Observable<any>{
    return this.rdb.list('favorites/' + userId).valueChanges();
  }

  deleteFavorites(userId:string, favorite:any){
    var updates = {};
    updates['favorites/' + userId+'/' + favorite.key] = favorite;
    this.rdb.database.ref('favorites/' + userId+'/' + favorite.key).remove().then(_ =>  this.alertService.message("Eliminado de Favoritos", "success") );
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

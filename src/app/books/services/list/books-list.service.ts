import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError } from 'rxjs/operators';
import { Observable, of, Subject } from 'rxjs';
import { MessagesService } from '../../../alerts/services/messages.service';

import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import * as firebase from "firebase/app";
import { environment } from "../../../../environments/environment";
import { BookList } from "../../models/books";

@Injectable({
  providedIn: 'root'
})
export class BooksListService {

  url = environment.apiBooks;
  booksList: Subject<BookList> = new Subject();
  favsRef: AngularFireList<any>;
  user: firebase.User;

  constructor(private http: HttpClient, private alertService: MessagesService, private authFire: AngularFireAuth,
    rdb: AngularFireDatabase) { 
    this.booksList.next({ kind: "", totalItems: 0, items: [] });
    authFire.authState
      .subscribe(
        user => {
          this.user = user;
          this.favsRef = rdb.list('favorites/' + this.user.uid);
        }
      );
  }

  searchBooks(text: string, startIndex?: number, maxResults?: number) {
    if(text){
      let url = this.url + `volumes?q=${text}`;
      if (startIndex) {
        url += `&startIndex=${startIndex}`;  
        if (maxResults) {
          url += `&maxResults=${maxResults}`;
        }
      }
    
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

  getBook(id: string): Observable<any> {
    let url = this.url + `volumes/${id}`;
    return this.http.get<any>(url)
      .pipe(
        catchError(this.handleError<any>('Get Book', null))
      );
  }
    
  addFavorites(book: any) {
    this.favsRef.push(book).then(_ => this.alertService.message("Agregado a Favoritos", "success"));
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

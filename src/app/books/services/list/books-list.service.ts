import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { MessagesService } from '../../../alerts/services/messages.service';

@Injectable({
  providedIn: 'root'
})
export class BooksListService {

  url = "api/";
  constructor(private http: HttpClient, private alertService: MessagesService) { }

  getBookList(text?:string):Observable<any>{
    let url = this.url+"books";
    if(text){
      url+=`?id=${text}`;
    }
    return this.http.get(url).pipe(
      //catchError(this.handleError("getBookList", []))
    );
    
  }

  private handleError<T>(operation="operation", result?: T){
    return (error:any):Observable<T> => {
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }

  private log(message:string){
    console.log(message);
    this.alertService.message(message, "error");
  }
}

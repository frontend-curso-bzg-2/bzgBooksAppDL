import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { MessagesService } from '../../../alerts/services/messages.service';

@Injectable({
  providedIn: 'root'
})
export class BooksListService {

  url = "api/";
  constructor(private http: HttpClient, private alertService: MessagesService) { }

  getBookList(id?:string):Observable<any>{
    let url = this.url+"books";
    if(id){
      url = url + `?id=${id}`;
    }
    return this.http.get(url).pipe(
      catchError(this.handleError("Obtener Lista de Libros [getBookList]", []))
    );    
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

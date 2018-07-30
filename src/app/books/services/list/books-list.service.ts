import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from '../../../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksListService {

  url = "api/";
  constructor(private http: HttpClient) { }

  getBookList(text?:string):Observable<any>{
    return this.http.get(this.url+"books");
  }
}

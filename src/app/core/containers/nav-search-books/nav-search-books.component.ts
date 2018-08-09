import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { BooksListService } from "../../../books/services/list/books-list.service";

@Component({
  selector: 'nav-search-books',
  templateUrl: './nav-search-books.component.html',
  styleUrls: ['./nav-search-books.component.styl']
})
export class NavSearchBooksComponent implements OnInit {

  @Output() actionAside = new EventEmitter<string>();
  state : string;

  constructor(private bookListService:BooksListService) { 
    this.state = 'open';
  }

  ngOnInit() {
  }

  closeAside(){
    this.state = (this.state === 'close') ? 'open' : 'close';
    this.actionAside.emit(this.state);
    //console.log("emit...");
  }

  searchText(event:string){
    this.bookListService.searchBooks(event);
  }
}

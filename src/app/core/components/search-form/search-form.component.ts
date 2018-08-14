import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.styl']
})
export class SearchFormComponent implements OnInit {

  @Output() searchText = new EventEmitter<string>();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  searchBooks(event:any, text : string) {    
    this.searchText.emit(text);
    this.router.navigate(['main/books']);
  }

}

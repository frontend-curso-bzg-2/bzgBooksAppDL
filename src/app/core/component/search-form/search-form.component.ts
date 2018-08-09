import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.styl']
})
export class SearchFormComponent implements OnInit {

  @Output() searchText = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  searchBooks(text : string) {
    this.searchText.emit(text);
  }

}

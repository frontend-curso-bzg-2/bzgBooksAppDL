import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { books } from '../data-books';

@Component({
  selector: 'book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.styl']
})
export class BookDetailComponent implements OnInit {

  book: any;

  constructor(private router: ActivatedRoute) {
    let id:string;
    //id = this.router.snapshot.paramMap.get('id');
    this.router.params.subscribe( (params: Params) => { id = params.id });
    this.book = books.items.find( item => {return item.id = id});
   }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
//import { books } from '../../../data-books';
import { BooksListService } from '../../services/list/books-list.service';

@Component({
  selector: 'book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.styl']
})
export class BookDetailComponent implements OnInit {

  starList:boolean[];
  book: any;

  constructor(private router: ActivatedRoute, private bookService: BooksListService) {
    this.book={};    
   }

  ngOnInit() {
    let id:string; 
    this.starList = [false,false,false,false,false];   
    //id = this.router.snapshot.paramMap.get('id');
    this.router.params.subscribe( (params: Params) => { 
      id = params.id 
      this.bookService.getBookList(id).subscribe(
        (books:any)=>{
          if(books[0]){
            this.book = books[0];            
            let rating=this.book.volumeInfo.averageRating;
            if(rating){
              let adjustedrating=Math.round(rating);              
              for(var i=0;i < adjustedrating;i++){
                  this.starList[i]=true;        
              }              
            }
          }
        }
      );
    });
    
    //this.book = books.items.find( item => {return item.id = id});

  }

}

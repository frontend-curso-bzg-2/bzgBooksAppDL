import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { routes } from "./routes.books";
import { BooksMainComponent } from "./containers/books-main/books-main.component";
import { BookDetailComponent } from "./containers/book-detail/book-detail.component";
import { DragAndDropModule } from 'angular-draggable-droppable';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DragAndDropModule
  ],
  declarations: [BooksMainComponent, BookDetailComponent],
  exports: [BooksMainComponent]
})
export class BooksModule { }

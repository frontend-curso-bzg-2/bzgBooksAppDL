import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavSearchBooksComponent } from './nav-search-books/nav-search-books.component';

@NgModule({
  declarations: [
    AppComponent,
    NavSearchBooksComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

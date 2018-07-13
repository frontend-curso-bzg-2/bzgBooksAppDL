import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavSearchBooksComponent } from './nav-search-books/nav-search-books.component';
import { NavLeftOptionsComponent } from './nav-left-options/nav-left-options.component';
import { MainContentComponent } from './main-content/main-content.component';

@NgModule({
  declarations: [
    AppComponent,
    NavSearchBooksComponent,
    NavLeftOptionsComponent,
    MainContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

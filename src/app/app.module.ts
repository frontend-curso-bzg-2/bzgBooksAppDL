import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavSearchBooksComponent } from './nav-search-books/nav-search-books.component';
import { NavLeftOptionsComponent } from './nav-left-options/nav-left-options.component';
import { MainContentComponent } from './main-content/main-content.component';
import { NavLeftTopComponent } from './nav-left-top/nav-left-top.component';
import { MainItemHomeComponent } from './main-item-home/main-item-home.component';
import { MainItemCollectionsComponent } from './main-item-collections/main-item-collections.component';
import { MainItemFavoritesComponent } from './main-item-favorites/main-item-favorites.component';
import { RouterModule } from '@angular/router';
import {routes} from './routes';
import { BookDetailComponent } from './book-detail/book-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavSearchBooksComponent,
    NavLeftOptionsComponent,
    MainContentComponent,
    NavLeftTopComponent,
    MainItemHomeComponent,
    MainItemCollectionsComponent,
    MainItemFavoritesComponent,
    BookDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

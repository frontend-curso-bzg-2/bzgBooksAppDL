import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { routes } from "./routes.core";

import { CoreComponent } from './containers/core/core.component';
import { MainContentComponent } from "./containers/main-content/main-content.component";
import { MainItemHomeComponent } from "./containers/main-item-home/main-item-home.component";
import { NavSearchBooksComponent } from "./containers/nav-search-books/nav-search-books.component";

import { NavLeftOptionsComponent } from "./containers/nav-left-options/nav-left-options.component";
import { NavLeftTopComponent } from "./containers/nav-left-top/nav-left-top.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CoreComponent, MainContentComponent, MainItemHomeComponent, NavSearchBooksComponent,
    NavLeftOptionsComponent,NavLeftTopComponent
  ],
  exports: [CoreComponent]
})
export class CoreModule { }

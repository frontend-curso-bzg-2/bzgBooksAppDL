import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { AlertsModule } from "../alerts/alerts.module";
import { AuthenticationModule } from "../authentication/authentication.module"
import { routes } from "./routes.core";
import { CoreComponent } from './containers/core/core.component';
import { MainContentComponent } from "./containers/main-content/main-content.component";
import { NavSearchBooksComponent } from "./containers/nav-search-books/nav-search-books.component";
import { NavLeftOptionsComponent } from "./containers/nav-left-options/nav-left-options.component";
import { NavLeftTopComponent } from "./components/nav-left-top/nav-left-top.component";
import { NavMenuLeftComponent } from './components/nav-menu-left/nav-menu-left.component';
import { SearchFormComponent } from './components/search-form/search-form.component';

import { ModalComponent } from '../modal/components/modal.component';
//import { ModalService } from '../modal/services/modal.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AlertsModule,
    AuthenticationModule    
  ],
  declarations: [CoreComponent, MainContentComponent, NavSearchBooksComponent, 
    NavLeftOptionsComponent,NavLeftTopComponent, NavMenuLeftComponent, SearchFormComponent, 
    ModalComponent
  ],
  exports: [CoreComponent]
})
export class CoreModule { }

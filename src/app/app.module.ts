import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpModule } from '@angular/http';
import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from "angularfire2/database";

import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { BooksDBService } from "./api-data/api-books-demo";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module'

import { routes } from './routes';
import { AppComponent } from './app.component';
import { environment } from "../environments/environment";
import { reducers, metaReducer } from './reducer/reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    CoreModule,
    HttpModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    StoreModule,
    StoreDevtoolsModule,
    /*HttpClientInMemoryWebApiModule.forRoot(
      BooksDBService, { dataEncapsulation: false, delay: 1500 }
    )*/
    StoreModule.forRoot(reducers, {metaReducers: metaReducer}),
    StoreDevtoolsModule.instrument(
      {
        name: 'Bzg Books App',
        logOnly: environment.production,
        maxAge: 30
      }
      
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

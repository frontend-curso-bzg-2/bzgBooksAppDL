import { Routes } from "@angular/router";
import { BooksMainComponent } from "./containers/books-main/books-main.component";
import { BookDetailComponent } from "./containers/book-detail/book-detail.component";
import { AuthGuardService } from "../authentication/services/guards/auth-guard.service";


export const routes: Routes = [
    {
        path: '',
        component: BooksMainComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'detail/:id',
        component: BookDetailComponent,
        canActivate: [AuthGuardService]
    }
];
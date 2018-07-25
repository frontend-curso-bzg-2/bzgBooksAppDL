import { Routes } from "@angular/router";
import { BooksModule } from "./books.module";
import { BookDetailComponent } from "../book-detail/book-detail.component";


export const routes: Routes = [
    {
        path: 'list',
        component: BooksModule
    },
    {
        path: 'detail/:id',
        component: BookDetailComponent
    },
    {
        path: '**', redirectTo: 'list', pathMatch: 'full'
    }
];
import { Routes } from "@angular/router";
import { CoreComponent } from "./containers/core/core.component";
import { AuthGuardService } from "../authentication/services/guards/auth-guard.service";

export const routes: Routes = [
    {
        path: 'main',
        component: CoreComponent,
        canActivate: [AuthGuardService],
        children: [
            {
                path: 'books',
                loadChildren: '../books/books.module#BooksModule',
                canActivate: [AuthGuardService]
            },
            {
                path: 'collections',
                loadChildren: '../collections/collections.module#CollectionsModule',
                canActivate: [AuthGuardService]
            },
            {
                path: 'favorites',
                loadChildren: '../favorites/favorites.module#FavoritesModule',
                canActivate: [AuthGuardService]
            }            
        ]
    },
    {
        path: '', redirectTo: 'main', pathMatch: 'full'
    }
];
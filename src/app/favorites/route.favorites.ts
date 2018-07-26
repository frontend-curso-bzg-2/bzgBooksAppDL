import { Routes } from "@angular/router";
import { MainItemFavoritesComponent } from "./containers/main-item-favorites/main-item-favorites.component";

export const routes: Routes = [
    {
        path: 'list',
        component: MainItemFavoritesComponent
    },
    {
        path: '**', redirectTo: 'list', pathMatch: 'full'
    }
];
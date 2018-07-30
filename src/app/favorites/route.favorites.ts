import { Routes } from "@angular/router";
import { MainItemFavoritesComponent } from "./containers/main-item-favorites/main-item-favorites.component";

export const routes: Routes = [
    {
        path: '',
        component: MainItemFavoritesComponent
    },
    {
        path: '**', redirectTo: '', pathMatch: 'full'
    }
];
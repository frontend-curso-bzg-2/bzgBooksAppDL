import { Routes } from "@angular/router";
import { MainItemCollectionsComponent } from "./containers/main-item-collections/main-item-collections.component";

export const routes: Routes = [
    {
        path: 'list',
        component: MainItemCollectionsComponent
    },
    {
        path: '**', redirectTo: 'list', pathMatch: 'full'
    }
];
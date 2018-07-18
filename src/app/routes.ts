import { Routes  } from '@angular/router';
import { MainItemHomeComponent } from './main-item-home/main-item-home.component';
import { MainItemCollectionsComponent } from './main-item-collections/main-item-collections.component';
import { MainItemFavoritesComponent } from './main-item-favorites/main-item-favorites.component';

export const routes: Routes =[
    {
        path: '',
        component:  MainItemHomeComponent
    },
    {
        path: 'collections',
        component: MainItemCollectionsComponent
    },
    {
        path: 'favorites',
        component: MainItemFavoritesComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];
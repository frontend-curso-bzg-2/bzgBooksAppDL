import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { routes } from "./route.favorites";
import { MainItemFavoritesComponent } from './containers/main-item-favorites/main-item-favorites.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MainItemFavoritesComponent],
  exports: [MainItemFavoritesComponent]
})
export class FavoritesModule { }
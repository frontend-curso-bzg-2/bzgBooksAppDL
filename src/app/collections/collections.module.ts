import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { routes } from "./routers.collections";
import { MainItemCollectionsComponent } from './containers/main-item-collections/main-item-collections.component';
import { MenuListComponent } from './components/menu-list/menu-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MainItemCollectionsComponent, MenuListComponent],
  exports: [MainItemCollectionsComponent]
})
export class CollectionsModule { }

import { Routes } from "@angular/router";
import { MainItemCollectionsComponent } from "./containers/main-item-collections/main-item-collections.component";
import { AuthGuardService } from "../authentication/services/guards/auth-guard.service";

export const routes: Routes = [
    {
        path: '',
        component: MainItemCollectionsComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: '**', redirectTo: '', pathMatch: 'full'
    }
];
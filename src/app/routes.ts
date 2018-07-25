import { Routes  } from '@angular/router';

export const routes: Routes =[
    {
        path: '',
        redirectTo: 'main/books',
        pathMatch: 'full'
    },
    {
        path: 'main',
        loadChildren:  './core/core.module#CoreModule'
    },
    {
        path: 'login',
        loadChildren: './authentication/authentication.module#AuthenticationModule'
    },
    {
        path: '**',
        redirectTo: ''
    }
];
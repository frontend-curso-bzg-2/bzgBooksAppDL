import { Routes  } from '@angular/router';

export const routes: Routes =[
    {
        path: '',
        redirectTo: 'main/books',
        pathMatch: 'full'
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
import { Routes } from '@angular/router';
export const routes: Routes = [
    { path: ':filter', loadChildren: () => import('./todos/todos.routes') },
    { path: '**', redirectTo: 'all', pathMatch: 'full' },
];

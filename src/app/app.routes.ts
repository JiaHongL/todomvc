import { Routes } from '@angular/router';
import { TodoListComponent } from './components/todo-list.component';

export const routes: Routes = [
    { path: 'all', component: TodoListComponent },
    { path: 'active', component: TodoListComponent },
    { path: 'completed', component: TodoListComponent },
    { path: '', redirectTo: '/all', pathMatch: 'full' },
];

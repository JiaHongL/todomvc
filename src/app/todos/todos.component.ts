import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';

import { HeaderComponent } from './components/header.component';
import { FooterComponent } from './components/footer.component';
import { InfoComponent } from './components/info.component';
import { TodoItemComponent } from './components/todo-item.component';
import { ToggleAllComponent } from './components/toggle-all.component';

import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    InfoComponent, 
    TodoItemComponent,
    ToggleAllComponent
  ],
  template: `
    <section class="todoapp">
        <app-header (addTodo)="todoService.add($event)" />
        <!-- This section should be hidden by default and shown when there are todos -->
        <section class="main">
          @if(todoService.todos().length > 0){
            <app-toggle-all/> 
          }
          <ul class="todo-list">
            <!-- These are here just to show the structure of the list items -->
            @for (todo of todoService.todos(); track todo.id) {
              <app-todo-item 
                [todoItem]="todo"
                (toggle)="todoService.toggle(todo.id)" 
                (delete)="todoService.delete(todo.id)"
                (update)="todoService.update($event.id, $event.text)"
              />
            }
          </ul>
        </section>
        <!-- This footer should be hidden by default and shown when there are todos -->
        @if(todoService.todos().length > 0){
          <app-footer/>
        }
    </section>
    <app-info/>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosComponent {
  todoService = inject(TodoService);
  updateLocalStorageEffectRef = effect(() => {
    window.localStorage.setItem('todos', JSON.stringify(this.todoService.todos()));
  });
}



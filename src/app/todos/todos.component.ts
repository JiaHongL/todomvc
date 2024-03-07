import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';

import { HeaderComponent } from './components/header.component';
import { FooterComponent } from './components/footer.component';
import { InfoComponent } from './components/info.component';
import { TodoItemComponent } from './components/todo-item.component';
import { ToggleAllComponent } from './components/toggle-all.component';

import { TodosService } from './todos.service';

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
        <app-header (addTodo)="todosService.add($event)" />
        <!-- This section should be hidden by default and shown when there are todos -->
        <section class="main">
          @if(todosService.todos().length > 0){
            <app-toggle-all/> 
          }
          <ul class="todo-list">
            <!-- These are here just to show the structure of the list items -->
            @for (todo of todosService.todos(); track todo.id) {
              <app-todo-item 
                [todoItem]="todo"
                (toggle)="todosService.toggle(todo.id)" 
                (delete)="todosService.delete(todo.id)"
                (update)="todosService.update($event.id, $event.text)"
              />
            }
          </ul>
        </section>
        <!-- This footer should be hidden by default and shown when there are todos -->
        @if(todosService.todos().length > 0){
          <app-footer/>
        }
    </section>
    <app-info/>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosComponent {
  todosService = inject(TodosService);
  updateLocalStorageEffectRef = effect(() => {
    window.localStorage.setItem('todos', JSON.stringify(this.todosService.todos()));
  });
}



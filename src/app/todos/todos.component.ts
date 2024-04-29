import { ChangeDetectionStrategy, Component, effect, inject, input } from '@angular/core';

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
          @if(todosService.filteredTodos().length > 0){
            <app-toggle-all (toggleAll)="todosService.toggleAll($event)"/> 
          }
          <ul class="todo-list">
            <!-- These are here just to show the structure of the list items -->
            @for (todo of todosService.filteredTodos(); track todo.id) {
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
          <app-footer (clearCompleted)="todosService.clearCompleted()"/>
        }
    </section>
    <app-info/>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosComponent {
  todosService = inject(TodosService);

  filter = input<string>();
  filterEffectRef = effect(() => {
    const filter = this.filter() || 'all';
    this.todosService.filter.set(filter);
  }, { allowSignalWrites: true });

  constructor() {
    this.todosService.getTodos$().subscribe((todos) => {
      this.todosService.todos.set(todos);
    });
  }

}



import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';

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
          @if(filteredTodos().length > 0){
            <app-toggle-all/> 
          }
          <ul class="todo-list">
            <!-- These are here just to show the structure of the list items -->
            @for (todo of filteredTodos(); track todo.id) {
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
  filteredTodos = computed(() => {
    const filter = this.filter();
    let filteredData = [];
    switch (filter) {
      case 'active':
        filteredData = this.todosService.todos().filter(todo => !todo.completed);
        break;
      case 'completed':
        filteredData = this.todosService.todos().filter(todo => todo.completed);
        break;
      default:
        filteredData = this.todosService.todos();
        break;
    }
    return filteredData;
  });

}



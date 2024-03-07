import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { TodosService } from '../todos.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink, 
    RouterLinkActive
  ],
  template: `
    <footer class="footer">
      <!-- This should be 0 items left by default -->
      <span class="todo-count"><strong>{{ activeTodoCount() }}</strong> item left</span>
      <!-- Remove this if you don't implement routing -->
      <ul class="filters">
        <li>
          <a routerLink="/all" routerLinkActive="selected">All</a>
        </li>
        <li>
          <a routerLink="/active" routerLinkActive="selected">Active</a>
        </li>
        <li>
          <a routerLink="/completed" routerLinkActive="selected">Completed</a>
        </li>
      </ul>
      <!-- Hidden if no completed items are left ↓ -->
      <button class="clear-completed" (click)="clearCompleted.emit()">Clear completed</button>
    </footer>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {

  clearCompleted = output();

  todosService = inject(TodosService);
  activeTodoCount = computed(() => this.todosService.todos().filter(todo => !todo.completed).length);

}

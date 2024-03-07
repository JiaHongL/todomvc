import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { InfoComponent } from './info.component';
import { TodoItemComponent } from './todo-item.component';
import { ToggleAllComponent } from './toggle-all.component';

@Component({
  selector: 'app-todo-list',
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
        <app-header/>
        <!-- This section should be hidden by default and shown when there are todos -->
        <section class="main">
          <app-toggle-all/>
          <ul class="todo-list">
            <!-- These are here just to show the structure of the list items -->
            <app-todo-item/>
          </ul>
        </section>
        <!-- This footer should be hidden by default and shown when there are todos -->
        <app-footer/>
    </section>
    <app-info/>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent { }

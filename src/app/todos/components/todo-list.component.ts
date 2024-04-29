import { ChangeDetectionStrategy, Component, ElementRef, effect, input, output, signal, viewChildren } from '@angular/core';
import { TodoItem } from '../models/todo-item.model';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [],
  template: `
    <ul class="todo-list">
      <!-- These are here just to show the structure of the list items -->
      @for (todo of todos();let i = $index; track todo.id) {
        <!-- List items should get the class editing when editing and completed when marked as completed --> 
        <li [class.completed]="todo.completed" [class.editing]="focusId() === todo.id">
          <div class="view">
            <label [attr.for]="'toggle-' + todo.id" class="visually-hidden">標記完成 {{ todo.text }}</label>
            <input [id]="'toggle-' + todo.id" [attr.aria-labelledby]="'todoLabel' + todo.id" class="toggle" type="checkbox" [checked]="todo.completed" (click)="toggle.emit({id: todo.id})">
            <label (dblclick)="focusId.set(todo.id);input.focus()" >
              {{todo.text}}
            </label>
            <button class="destroy" (click)="delete.emit({id: todo.id})"></button>
          </div>
          <div class="input-container">
            <input 
              #input 
              id="edit-todo-input" 
              class="edit" 
              [value]="todo.text"
              (focus)="focusId.set(todo.id);"
              (blur)="focusId.set('');input.value = todo.text;"
              (keyup.enter)="focusId.set(''); todo.text=input.value;update.emit({id: todo.id, text: input.value});"
            >  
          </div>
        </li>
      }
    </ul>
  `,
  styles:`
    .visually-hidden { 
      position: absolute;
      width: 1px;
      height: 1px;
      margin: -1px;
      padding: 0;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      border: 0;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent {
  todos = input.required<TodoItem[]>();

  toggle = output<{ id: string }>();
  delete = output<{ id: string }>();
  update = output<{ id: string; text: string }>();

  focusId = signal('');
  inputs = viewChildren('input', { read: ElementRef });

  editingEffectRef = effect(() => {
    const focusId = this.focusId();
    if (focusId !== '') {
      setTimeout(() => {
        const index = this.todos().findIndex(todo => todo.id === focusId);
        this.inputs()[index]?.nativeElement.focus();
      });
    }
  });

}

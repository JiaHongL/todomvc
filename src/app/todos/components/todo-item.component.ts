import { Component, ElementRef, Signal, computed, effect, input, output, signal, untracked, viewChild } from '@angular/core';
import { TodoItem } from '../models/todo-item.model';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  template: `
    <!-- List items should get the class editing when editing and completed when marked as completed --> 
    <li [class.completed]="isCompleted()" [class.editing]="isEditing()">
      <div class="view">
        <input class="toggle" type="checkbox" [checked]="isCompleted()" (click)="toggle.emit(todoItem().id)">
        <label (dblclick)="isEditing.set(true)" >
          {{todoItem().text}}
        </label>
        <button class="destroy" (click)="delete.emit(todoItem().id)"></button>
      </div>
      <div class="input-container">
        <input 
          #input 
          id="edit-todo-input" 
          class="edit" 
          [value]="todoItem().text"
          (blur)="isEditing.set(false);input.value = todoItem().text;"
          (keyup.enter)="isEditing.set(false);update.emit({id: todoItem().id, text: input.value});"
        >  
      </div>
    </li>
  `
})
export class TodoItemComponent {
  todoItem = input.required<TodoItem>();

  isCompleted: Signal<boolean> = computed(() => this.todoItem()?.completed || false);
  isEditing = signal(false);

  toggle = output<string>();
  delete = output<string>();
  update = output<{ id: string; text: string }>();

  input = viewChild('input', {read:ElementRef});

  editingEffectRef = effect(() => {
    if (this.isEditing()) {
      setTimeout(() => {
        this.input()?.nativeElement.focus();
      });
    }
  });

}

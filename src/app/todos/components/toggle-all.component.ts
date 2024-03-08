import { Component, effect, output, inject, computed, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { TodosService } from '../todos.service';

@Component({
  selector: 'app-toggle-all',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  template: `
    <input 
      [formControl]="checkboxFormControl" 
      id="toggle-all" 
      class="toggle-all" 
      type="checkbox" 
      (change)="emitToggleAllEvent()"
    >
    <label for="toggle-all">Toggle All Input</label>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToggleAllComponent {
  toggleAll = output<boolean>();
  todosService = inject(TodosService);

  isAllCompleted = computed(() => {
    return this.todosService.filteredTodos().every(todo => todo.completed);
  });
  updateTodosEffectRef = effect(() => {
    if (this.isAllCompleted() !== this.checkboxFormControl.value) {
      this.checkboxFormControl.setValue(this.isAllCompleted());
    }
  });

  checkboxFormControl = new FormControl(this.isAllCompleted());

  emitToggleAllEvent() {
    const checked = this.checkboxFormControl.value || false;
    this.toggleAll.emit(checked);
  }

}

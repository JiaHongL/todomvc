import { Injectable, InjectionToken, WritableSignal, computed, effect, inject, signal } from '@angular/core';
import { TodoItem } from './models/todo-item.model';

export const WINDOW = new InjectionToken<Window>('WindowToken', {
  factory: () => {
    if(typeof window !== 'undefined') {
      return window
    }
    return new Window();
  }
});

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  window = inject(WINDOW);

  todos: WritableSignal<TodoItem[]> = signal(
    this.window.localStorage?.getItem('todos') ? JSON.parse(this.window?.localStorage?.getItem('todos') as string) : []
  );

  filter = signal('all');
  filteredTodos = computed(() => {
    const filter = this.filter();
    let filteredData = [];
    switch (filter) {
      case 'active':
        filteredData = this.todos().filter(todo => !todo.completed);
        break;
      case 'completed':
        filteredData = this.todos().filter(todo => todo.completed);
        break;
      default:
        filteredData = this.todos();
        break;
    }
    return filteredData;
  });

  isFirstTimeTriggered = true;
  updateLocalStorageEffectRef = effect(() => {
    const todosString = JSON.stringify(this.todos());
    this.isFirstTimeTriggered ? this.isFirstTimeTriggered = false : window.localStorage.setItem('todos', todosString);
  });

  add(text: any) {
    const newTodo = {
      id: this.generateGUID(),
      completed: false,
      text
    };
    this.todos.update(todos => [...todos, newTodo]);
  }

  delete(id: string) {
    this.todos.update(todos => todos.filter(todo => todo.id !== id));
  }

  toggle(id: string) {
    this.todos.update(todos => todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    }));
  }

  toggleAll(checked: boolean) {
    const filteredTodoIds = this.filteredTodos().map(todo => todo.id);
    this.todos.update(todos => todos.map(item => {
      if (filteredTodoIds.includes(item.id)) {
        return { ...item, completed: checked };
      }
      return item;
    }));
  }

  update(id: string, text: string) {
    this.todos.update(todos => todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, text };
      }
      return todo;
    }));
  }

  clearCompleted() {
    this.todos.update(todos => todos.filter(todo => !todo.completed));
  }

  private generateGUID() {
    const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    const timestamp = new Date().getTime();
    const timeString = timestamp.toString(16);
    return timeString + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4();
  }

}

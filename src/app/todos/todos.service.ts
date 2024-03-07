import { Injectable, WritableSignal, signal } from '@angular/core';
import { TodoItem } from './models/todo-item.model';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todos: WritableSignal<TodoItem[]> = signal(
    window.localStorage.getItem('todos') ? JSON.parse(window.localStorage.getItem('todos') as string) : []
  );

  constructor() { }

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

import { Injectable, WritableSignal, computed, inject, signal } from '@angular/core';
import { TodoItem } from './models/todo-item.model';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, mergeMap } from 'rxjs';

// export const WINDOW = new InjectionToken<Window>('WindowToken', {
//   factory: () => {
//     if (typeof window !== 'undefined') {
//       return window
//     }
//     return new Window();
//   }
// });

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private api = environment.apiUrl + '/todos';

  private http = inject(HttpClient);

  todos: WritableSignal<TodoItem[]> = signal([]);

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
  
  // window = inject(WINDOW);
  // updateLocalStorageEffectRef = effect(() => {
  //   const todosString = JSON.stringify(this.todos());
  //   this.isFirstTimeTriggered ? this.isFirstTimeTriggered = false : window.localStorage.setItem('todos', todosString);
  // });

  getTodos$(): Observable<TodoItem[]> {
    return this.http.get<TodoItem[]>(this.api);
  }

  add(text: any) {
    const newTodo = {
      completed: false,
      text
    };
    this.http.post<TodoItem>(this.api, newTodo).subscribe((res) => {
      this.todos.update(todos => [...todos, res]);
    });
  }

  delete(id: string) {
    this.http.delete(this.api + '/' + id).pipe(
      mergeMap(() => this.getTodos$())
    ).subscribe((todos) => {
      this.todos.set(todos);
    });
  }

  update(id: string, text: string) {
    this.http.put<TodoItem>(this.api, {
      id,
      text
    }).subscribe((res) => {
      this.todos.update(todos => todos.map(todo => {
        if (todo.id === res.id) {
          return { ...todo, ...res };
        }
        return todo;
      }));
    });
  }

  toggle(id: string) {
    let newTodo = this.todos().find(todo => todo.id === id);
    if (newTodo) {
      newTodo.completed = !newTodo.completed;
    }
    this.http.put<TodoItem>(this.api, newTodo).subscribe((res) => {
      this.todos.update(todos => todos.map(todo => {
        if (todo.id === res.id) {
          return { ...todo, ...res };
        }
        return todo;
      }));
    });
  }

  toggleAll(checked: boolean) {
    let newTodos = this.todos().map(todo => {
      return { ...todo, completed: checked };
    });
    this.http.put<TodoItem[]>(this.api + '/batch', newTodos).subscribe((res) => {
      this.todos.set(res);
    });
  }

  clearCompleted() {
    this.http.post(
      this.api + '/delete/batch',
      {
        ids: this.todos().filter(todo => todo.completed).map(todo => todo.id)
      }
    ).pipe(
      mergeMap(() => this.getTodos$())
    ).subscribe((todos) => {
      this.todos.set(todos);
    });
  }

}

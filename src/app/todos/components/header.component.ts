import { ChangeDetectionStrategy, Component, ElementRef, viewChild } from '@angular/core';
import {
  outputFromObservable
} from '@angular/core/rxjs-interop';

import { Subject } from 'rxjs';
import { filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    <header class="header">
      <h1>todos</h1>
      <input 
        #input 
        class="new-todo" 
        placeholder="What needs to be done?" 
        autofocus
        (keyup.enter)="valueChange$.next(input.value)"
      >
    </header>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  input = viewChild.required<ElementRef<HTMLInputElement>>('input');

  valueChange$ = new Subject<string>();
  addTodo = outputFromObservable<string>(
    this.valueChange$.asObservable().pipe(
      filter((value) => !!value.trim()),
      tap(() => this.input().nativeElement.value = ''),
    )
  );

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-all',
  standalone: true,
  imports: [],
  template: `
    <input id="toggle-all" class="toggle-all" type="checkbox">
    <label for="toggle-all">Mark all as complete</label>
  `,
  styles: ``
})
export class ToggleAllComponent {

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  template: `
    <!-- List items should get the class editing when editing and completed when marked as completed -->
    <li class="completed">
      <div class="view">
        <input class="toggle" type="checkbox" checked>
        <label>Taste JavaScript</label>
        <button class="destroy"></button>
      </div>
      <input class="edit" value="Create a TodoMVC template">
    </li>
    <li>
      <div class="view">
        <input class="toggle" type="checkbox">
        <label>Buy a unicorn</label>
        <button class="destroy"></button>
      </div>
      <input class="edit" value="Rule the web">
    </li>
  `,
  styles: ``
})
export class TodoItemComponent {

}

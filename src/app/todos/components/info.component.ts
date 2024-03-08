import { Component } from '@angular/core';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [],
  template: `
    <footer class="info">
      <p>Double-click to edit a todo</p>
      <!-- Change this out with your name and url ↓ -->
      <p>Created by <a href="https://github.com/JiaHongL/todomvc">JiaHongL</a></p>
      <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
    </footer>
  `
})
export class InfoComponent {}

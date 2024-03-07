import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink, 
    RouterLinkActive
  ],
  template: `
    <footer class="footer">
      <!-- This should be 0 items left by default -->
      <span class="todo-count"><strong>0</strong> item left</span>
      <!-- Remove this if you don't implement routing -->
      <ul class="filters">
        <li>
          <a routerLink="/all" routerLinkActive="selected">All</a>
        </li>
        <li>
          <a routerLink="/active" routerLinkActive="selected">Active</a>
        </li>
        <li>
          <a routerLink="/completed" routerLinkActive="selected">Completed</a>
        </li>
      </ul>
      <!-- Hidden if no completed items are left ↓ -->
      <button class="clear-completed">Clear completed</button>
    </footer>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent { }

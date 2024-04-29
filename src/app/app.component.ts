import { Component, inject } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <router-outlet />
  `
})
export class AppComponent {
  meta = inject(Meta);

  constructor() {
    this.meta.addTag({ name: 'description', content: 'Angular TodoMVC use Signal + SSR + PWA'});
    this.meta.addTag({ name: 'author', content: 'Joe' });
    this.meta.addTag({ name: 'keywords', content: 'Angular, TodoMVC, Signal, SSR, PWA' }); 
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'root',
  template: `
    <h1>hello world!</h1>
    <button type="button" class="btn btn-primary" rel="hi-button">Hi</button>
  `,
    styles: [`
      head, body, .app-content {
        height: 100vh;
        width: 100vw;
      }
    `]

})

export class RootComponent {
}
